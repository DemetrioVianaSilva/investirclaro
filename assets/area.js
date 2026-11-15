/* Investir Claro — Área do aluno (simulador pago)
   Login sem senha pelo Supabase Auth (link ou código enviado por e-mail).
   As questões ficam no banco e só são entregues a compradores ativos (RLS). Nada do banco pago fica neste arquivo. */
(function () {
  var app = document.getElementById("area");
  if (!app) return;
  var PROVA = app.getAttribute("data-prova") || "cpa";
  var SB = "https://potnmbimyemwjwmsfdet.supabase.co";
  var ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvdG5tYmlteWVtd2p3bXNmZGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1ODE3MTMsImV4cCI6MjExMDE1NzcxM30.jCOZeBYpqcMVx62umWtidTzxYF1jkgbSJOn2YJqLU0M";
  var CONF = {
    cpa: {
      nome: "CPA", minimo: 0.70, totalSim: 50, tempoMin: 150,
      temas: { sfn: "Estrutura e dinâmica do SFN", produtos: "Produtos do mercado financeiro", relacionamento: "Relacionamento com o cliente", inovacao: "Inovação e desenvolvimento de mercado" },
      pesos: { sfn: 10, produtos: 20, relacionamento: 15, inovacao: 5 }
    }
  }[PROVA];
  var LETRAS = ["A", "B", "C", "D"];
  var CHAVE = "ic_area_sessao", HIST = "ic_area_hist_" + PROVA;
  var sessao = null, banco = null, timer = null;

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ler(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function gravar(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function misturar(l) { for (var i = l.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = l[i]; l[i] = l[j]; l[j] = t; } return l; }
  function topo() { window.scrollTo({ top: Math.max(0, app.offsetTop - 90), behavior: "smooth" }); }
  function tempoFmt(ms) { var s = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(s / 3600); return (h ? h + ":" : "") + String(Math.floor(s / 60) % 60).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }

  /* ---------- Supabase (REST, sem biblioteca externa) ---------- */
  function api(caminho, opt) {
    opt = opt || {};
    var h = { apikey: ANON, "Content-Type": "application/json" };
    h.Authorization = "Bearer " + (sessao ? sessao.access_token : ANON);
    return fetch(SB + caminho, { method: opt.method || "GET", headers: h, body: opt.body ? JSON.stringify(opt.body) : undefined })
      .then(function (r) { return r.text().then(function (t) { var d = null; try { d = t ? JSON.parse(t) : null; } catch (e) {} if (!r.ok) { var err = new Error((d && (d.msg || d.message || d.error_description)) || ("Erro " + r.status)); err.status = r.status; throw err; } return d; }); });
  }
  function salvarSessao(d) {
    sessao = { access_token: d.access_token, refresh_token: d.refresh_token, expira: Date.now() + (Number(d.expires_in) || 3600) * 1000, email: d.user ? d.user.email : (sessao && sessao.email) };
    gravar(CHAVE, sessao);
  }
  function renovar() {
    if (!sessao || !sessao.refresh_token) return Promise.reject(new Error("sem sessão"));
    if (sessao.expira - Date.now() > 120000) return Promise.resolve();
    return api("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: { refresh_token: sessao.refresh_token } }).then(salvarSessao);
  }
  function sair() { gravar(CHAVE, null); sessao = null; banco = null; if (timer) clearInterval(timer); login(); }

  /* Volta do link mágico: o token chega no #hash */
  function lerHash() {
    if (location.hash.indexOf("access_token=") < 0) {
      if (location.hash.indexOf("error") >= 0) { history.replaceState(null, "", location.pathname); return "O link expirou ou já foi usado. Peça um novo abaixo."; }
      return null;
    }
    var p = new URLSearchParams(location.hash.slice(1));
    salvarSessao({ access_token: p.get("access_token"), refresh_token: p.get("refresh_token"), expires_in: p.get("expires_in") });
    history.replaceState(null, "", location.pathname);
    return null;
  }

  /* ---------- Login ---------- */
  function login(msg) {
    app.innerHTML =
      '<div class="gate">' +
      '<p class="eyebrow">Área do aluno · ' + CONF.nome + '</p>' +
      '<h1>Entre com o e-mail da compra</h1>' +
      '<p class="lead">Use o mesmo e-mail que você usou na Hotmart. Vamos mandar um link de acesso, sem senha.</p>' +
      (msg ? '<p class="erro-msg">' + esc(msg) + '</p>' : '') +
      '<form id="f-email" class="pilha" novalidate><div class="campo"><label for="email">E-mail</label><input id="email" type="email" autocomplete="email" placeholder="nome@email.com" required></div>' +
      '<button class="btn btn-grande" type="submit">Receber o link de acesso</button></form>' +
      '<p class="muted" style="font-size:.9rem">Comprou e ainda não tem acesso? A liberação acontece em alguns minutos depois da aprovação do pagamento. Dúvidas: <span data-email></span>.</p>' +
      '</div>';
    if (window.icPreencherEmail) window.icPreencherEmail();
    document.getElementById("f-email").onsubmit = function (ev) {
      ev.preventDefault();
      var email = document.getElementById("email").value.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return login("Confira o e-mail digitado.");
      var b = this.querySelector("button"); b.disabled = true; b.textContent = "Enviando…";
      api("/auth/v1/otp", { method: "POST", body: { email: email, create_user: true } })
        .then(function () { enviado(email); })
        .catch(function (e) { login(e.status === 429 ? "Muitas tentativas em pouco tempo. Espere alguns minutos e tente de novo." : "Não conseguimos enviar agora. Tente de novo em instantes."); });
    };
  }
  function enviado(email, msg) {
    app.innerHTML =
      '<div class="gate">' +
      '<p class="eyebrow">Confira seu e-mail</p>' +
      '<h1>Enviamos o acesso para ' + esc(email) + '</h1>' +
      '<p class="lead">Abra o e-mail e toque no link para entrar. Se não aparecer, olhe também no spam e nas promoções.</p>' +
      (msg ? '<p class="erro-msg">' + esc(msg) + '</p>' : '') +
      '<form id="f-cod" class="pilha" novalidate><div class="campo"><label for="cod">Recebeu um código de 6 dígitos? Digite aqui</label><input id="cod" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000"></div>' +
      '<button class="btn" type="submit">Entrar com o código</button></form>' +
      '<button class="btn btn-sec" id="outro">Usar outro e-mail</button>' +
      '</div>';
    document.getElementById("outro").onclick = function () { login(); };
    document.getElementById("f-cod").onsubmit = function (ev) {
      ev.preventDefault();
      var cod = document.getElementById("cod").value.replace(/\D/g, "");
      if (cod.length !== 6) return enviado(email, "O código tem 6 números.");
      api("/auth/v1/verify", { method: "POST", body: { type: "email", email: email, token: cod } })
        .then(function (d) { salvarSessao(d); carregar(); })
        .catch(function () { enviado(email, "Código inválido ou expirado. Peça um novo link."); });
    };
  }

  /* ---------- Acesso e banco ---------- */
  function carregar() {
    app.innerHTML = '<div class="gate"><p class="lead">Carregando sua área…</p></div>';
    renovar()
      .then(function () { return api("/auth/v1/user"); })
      .then(function (u) { sessao.email = u.email; gravar(CHAVE, sessao); return api("/rest/v1/compradores?select=status&prova=eq." + PROVA); })
      .then(function (c) {
        /* Quem decide o acesso é o banco (RLS): sem compra ativa, a consulta volta vazia */
        return api("/rest/v1/questoes?select=numero,tema,enunciado,alternativas,correta,comentario&prova=eq." + PROVA + "&ativo=eq.true&order=numero&limit=2000")
          .then(function (q) { banco = q || []; if (!banco.length) return semAcesso(c && c[0] ? c[0].status : null); marca(); menu(); });
      })
      .catch(function (e) { if (e.status === 401 || e.message === "sem sessão") return sair(); login("Sua sessão expirou. Entre de novo."); });
  }
  function semAcesso(status) {
    app.innerHTML =
      '<div class="gate"><p class="eyebrow">Acesso não encontrado</p>' +
      '<h1>Não achamos uma compra ativa para ' + esc(sessao.email || "este e-mail") + '</h1>' +
      '<p class="lead">' + (status ? "O acesso deste e-mail está suspenso (reembolso ou cancelamento)." : "Confira se este é o mesmo e-mail usado na Hotmart. Se você acabou de comprar, aguarde alguns minutos e entre de novo.") + '</p>' +
      '<div class="acoes"><a class="btn" href="../certificacoes/cpa/">Conhecer o preparatório</a><button class="btn btn-sec" id="sair">Entrar com outro e-mail</button></div>' +
      '<p class="muted" style="font-size:.9rem">Precisa de ajuda? <span data-email></span></p></div>';
    if (window.icPreencherEmail) window.icPreencherEmail();
    document.getElementById("sair").onclick = sair;
  }
  /* Marca d'água discreta com o e-mail do aluno */
  function marca() {
    var m = document.getElementById("marca-agua");
    if (!m) { m = document.createElement("div"); m.id = "marca-agua"; m.setAttribute("aria-hidden", "true"); document.body.appendChild(m); }
    m.textContent = Array(40).join((sessao.email || "") + "   ·   ");
  }

  /* ---------- Menu ---------- */
  function menu() {
    if (timer) clearInterval(timer);
    var cont = {}; banco.forEach(function (q) { cont[q.tema] = (cont[q.tema] || 0) + 1; });
    var hist = ler(HIST) || [];
    var temas = Object.keys(CONF.temas).map(function (k) {
      return '<button class="btn btn-sec" data-tema="' + k + '">' + esc(CONF.temas[k]) + ' <small>(' + (cont[k] || 0) + ')</small></button>';
    }).join("");
    var histHtml = hist.length ? '<div class="revisao">' + hist.slice(0, 8).map(function (h) {
      return '<div class="rev ' + (h.p >= CONF.minimo ? "certa" : "errada") + '"><p><strong>' + esc(h.tipo) + '</strong> · ' + new Date(h.d).toLocaleDateString("pt-BR") + '</p><p class="resp">' + h.a + ' de ' + h.t + ' (' + Math.round(h.p * 100) + '%)</p></div>';
    }).join("") + '</div>' : '<p class="muted">Você ainda não fez nenhum simulado.</p>';
    app.innerHTML =
      '<div class="intro-card">' +
      '<div class="sim-cab"><span class="eyebrow">Área do aluno · ' + CONF.nome + '</span><button class="btn btn-sm btn-sec" id="sair">Sair</button></div>' +
      '<h1>Olá! Seu banco tem <span class="marca">' + banco.length + ' questões</span></h1>' +
      '<div class="regras"><div><strong>' + CONF.totalSim + '</strong><span>questões no simulado</span></div><div><strong>' + (CONF.tempoMin / 60).toString().replace(".", ",") + ' h</strong><span>de tempo, como na prova</span></div><div><strong>' + Math.round(CONF.minimo * 100) + '%</strong><span>para passar</span></div></div>' +
      '<h2>Simulado completo</h2><p>As questões são sorteadas a cada tentativa, nos pesos da prova: SFN 20%, Produtos 40%, Relacionamento 30% e Inovação 10%.</p>' +
      '<div class="acoes"><button class="btn btn-grande" id="simulado">Começar simulado de ' + CONF.totalSim + ' questões</button></div>' +
      '<h2>Treino por tema</h2><p>10 questões sorteadas do tema escolhido, com o comentário logo depois de cada resposta.</p>' +
      '<div class="acoes" style="flex-wrap:wrap">' + temas + '</div>' +
      '<h2>Seus últimos resultados</h2>' + histHtml +
      '</div>';
    document.getElementById("sair").onclick = sair;
    document.getElementById("simulado").onclick = function () { iniciar(sortear(CONF.pesos), "Simulado completo", false); };
    app.querySelectorAll("[data-tema]").forEach(function (b) {
      b.onclick = function () { var k = b.getAttribute("data-tema"), p = {}; p[k] = 10; iniciar(sortear(p), "Treino · " + CONF.temas[k], true); };
    });
    topo();
  }
  function sortear(pesos) {
    var lista = [];
    Object.keys(pesos).forEach(function (k) { lista = lista.concat(misturar(banco.filter(function (q) { return q.tema === k; })).slice(0, pesos[k])); });
    return misturar(lista).map(function (q) {
      var ordem = misturar([0, 1, 2, 3]), alts = ordem.map(function (i) { return q.alternativas[i]; });
      return { tema: q.tema, enunciado: q.enunciado, alternativas: alts, correta: alts.indexOf(q.alternativas[q.correta]), comentario: q.comentario };
    });
  }

  /* ---------- Prova ---------- */
  function iniciar(qs, tipo, treino) {
    var resp = new Array(qs.length).fill(null), inicio = Date.now(), limite = treino ? 0 : CONF.tempoMin * 60000;
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
      var el = document.getElementById("relogio"); if (!el) return;
      var dec = Date.now() - inicio;
      el.textContent = limite ? tempoFmt(limite - dec) : tempoFmt(dec);
      if (limite && dec >= limite) { clearInterval(timer); fim(); }
    }, 1000);
    function mostrar(i) {
      var q = qs[i], r = resp[i], ver = treino && r !== null;
      var alts = q.alternativas.map(function (a, k) {
        var cls = ver ? (k === q.correta ? " certa" : (k === r ? " errada" : "")) : "";
        return '<button class="alt' + cls + '" data-k="' + k + '" aria-pressed="' + (r === k) + '"' + (ver ? " disabled" : "") + '><span class="bolha">' + LETRAS[k] + '</span><span>' + esc(a) + '</span></button>';
      }).join("");
      var ultima = i === qs.length - 1;
      app.innerHTML =
        '<div class="sim-cab"><span class="eyebrow">' + esc(tipo) + ' · ' + (i + 1) + ' de ' + qs.length + '</span><span class="relogio" id="relogio">' + (limite ? tempoFmt(limite - (Date.now() - inicio)) : tempoFmt(Date.now() - inicio)) + '</span></div>' +
        '<div class="progresso"><i style="width:' + ((i + 1) / qs.length * 100) + '%"></i></div>' +
        '<p class="tema-tag">' + esc(CONF.temas[q.tema]) + '</p>' +
        '<p class="enunciado">' + esc(q.enunciado) + '</p>' +
        '<div class="alts" role="group" aria-label="Alternativas">' + alts + '</div>' +
        (ver ? '<div class="rev ' + (r === q.correta ? "certa" : "errada") + '" style="margin-top:16px"><p><strong>' + (r === q.correta ? "Certo!" : "Resposta correta: " + LETRAS[q.correta]) + '</strong></p><p class="coment">' + esc(q.comentario) + '</p></div>' : '') +
        '<div class="sim-nav"><button class="btn btn-sec" id="voltar"' + (i === 0 ? " disabled" : "") + '>Anterior</button>' +
        '<button class="btn btn-sec" id="parar">Encerrar</button>' +
        '<button class="btn" id="avancar"' + (r === null ? " disabled" : "") + '>' + (ultima ? "Ver resultado" : "Próxima") + '</button></div>';
      app.querySelectorAll(".alt").forEach(function (b) {
        b.onclick = function () { resp[i] = Number(b.getAttribute("data-k")); mostrar(i); };
      });
      document.getElementById("voltar").onclick = function () { mostrar(i - 1); };
      document.getElementById("avancar").onclick = function () { if (ultima) fim(); else mostrar(i + 1); };
      document.getElementById("parar").onclick = function () { fim(); };
      topo();
    }
    function fim() {
      clearInterval(timer);
      var a = 0, t = {};
      qs.forEach(function (q, i) { t[q.tema] = t[q.tema] || { c: 0, n: 0 }; t[q.tema].n++; if (resp[i] === q.correta) { a++; t[q.tema].c++; } });
      var p = a / qs.length;
      var hist = ler(HIST) || []; hist.unshift({ tipo: tipo, a: a, t: qs.length, p: p, d: Date.now() }); gravar(HIST, hist.slice(0, 30));
      var temasHtml = Object.keys(t).map(function (k) {
        var x = t[k], pp = x.c / x.n;
        return '<div class="tema-res"><strong>' + esc(CONF.temas[k]) + '</strong><span>' + x.c + '/' + x.n + '</span><div class="barra"><i class="' + (pp < CONF.minimo ? "fraco" : "") + '" style="width:' + Math.round(pp * 100) + '%"></i></div></div>';
      }).join("");
      var revHtml = qs.map(function (q, i) {
        var r = resp[i], ok = r === q.correta;
        return '<div class="rev ' + (ok ? "certa" : "errada") + '"><p class="tema-tag">' + (i + 1) + ' · ' + esc(CONF.temas[q.tema]) + '</p><p>' + esc(q.enunciado) + '</p>' +
          '<p class="resp"><strong>' + (ok ? "Você acertou: " : "Sua resposta: ") + '</strong>' + (r === null ? "em branco" : LETRAS[r] + ") " + esc(q.alternativas[r])) +
          (ok ? "" : '<br><strong>Correta: </strong>' + LETRAS[q.correta] + ') ' + esc(q.alternativas[q.correta])) + '</p><p class="coment">' + esc(q.comentario) + '</p></div>';
      }).join("");
      app.innerHTML =
        '<div class="resultado"><p class="eyebrow">' + esc(tipo) + '</p>' +
        '<h1>Você acertou ' + a + ' de ' + qs.length + ' (' + Math.round(p * 100) + '%)</h1>' +
        '<p class="lead">' + (p >= CONF.minimo ? "Acima do mínimo da prova. Continue treinando para chegar com folga." : "Abaixo dos " + Math.round(CONF.minimo * 100) + "% da prova. Revise os comentários e treine os temas com a barra vermelha.") + '</p>' +
        '<div class="temas-res">' + temasHtml + '</div>' +
        '<div class="acoes"><button class="btn" id="ir-inicio">Voltar ao início</button></div>' +
        '<h2>Gabarito comentado</h2><div class="revisao">' + revHtml + '</div>' +
        '<div class="acoes"><button class="btn btn-sec" id="ir-inicio2">Voltar ao início</button></div></div>';
      document.getElementById("ir-inicio").onclick = menu;
      document.getElementById("ir-inicio2").onclick = menu;
      topo();
    }
    mostrar(0);
  }

  /* ---------- Início ---------- */
  var erroLink = lerHash();
  sessao = sessao || ler(CHAVE);
  if (sessao && sessao.access_token) carregar(); else login(erroLink);
})();
