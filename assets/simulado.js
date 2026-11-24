/* Investir Claro — motor do simulado gratuito
   Fluxo: introdução → 20 questões → nota geral → e-mail (lead) → diagnóstico por tema + gabarito comentado */
(function () {
  var S = window.APROVA_SIMULADO;
  var CFG = window.APROVA_CONFIG || {};
  var app = document.getElementById("simulado");
  var LETRAS = ["A", "B", "C", "D"];
  function misturar(lista) {
    for (var i = lista.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = lista[i]; lista[i] = lista[j]; lista[j] = t; }
    return lista;
  }
  /* Sorteia as questões da tentativa: respeita os pesos por tema (S.sorteio) quando o banco gratuito
     tem mais questões que o simulado, e mistura a ordem a cada tentativa */
  var BANCO = S.questoes.slice();
  function sortear() {
    var pool = BANCO.slice();
    if (S.sorteio) {
      var escolhidas = [];
      Object.keys(S.sorteio).forEach(function (tema) {
        var doTema = misturar(pool.filter(function (q) { return q.tema === tema; }));
        escolhidas = escolhidas.concat(doTema.slice(0, S.sorteio[tema]));
      });
      pool = escolhidas;
    }
    S.questoes = misturar(pool).map(function (q) {
      return { tema: q.tema, enunciado: q.enunciado, alternativas: q.alternativas.slice(), correta: q.correta, comentario: q.comentario };
    });
  }
  sortear();
  /* Embaralha a ordem das alternativas a cada tentativa, para o gabarito não seguir padrão */
  function embaralhar() {
    S.questoes.forEach(function (q) {
      var ordem = q.alternativas.map(function (_, k) { return k; });
      for (var i = ordem.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = ordem[i]; ordem[i] = ordem[j]; ordem[j] = t; }
      var certaTexto = q.alternativas[q.correta];
      q.alternativas = ordem.map(function (k) { return q.alternativas[k]; });
      q.correta = q.alternativas.indexOf(certaTexto);
    });
  }
  embaralhar();
  var respostas = new Array(S.questoes.length).fill(null);
  var atual = 0;
  var inicio = null;
  var timer = null;

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function utms() {
    var p = new URLSearchParams(location.search), o = window.icOrigem ? window.icOrigem() : {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach(function (k) { if (p.get(k)) o[k] = p.get(k); });
    return o;
  }
  function tempoFmt(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }
  function acertos() {
    return respostas.reduce(function (n, r, i) { return n + (r === S.questoes[i].correta ? 1 : 0); }, 0);
  }
  function topo() { window.scrollTo({ top: Math.max(0, app.offsetTop - 90), behavior: "smooth" }); }

  /* ---------- Introdução ---------- */
  function intro() {
    var total = S.questoes.length;
    app.innerHTML =
      '<div class="intro-card">' +
      '<p class="eyebrow">Simulado gratuito · ' + esc(S.prova) + '</p>' +
      '<h1>Descubra se você passaria na <span class="marca">' + esc(S.prova) + '</span> hoje</h1>' +
      '<p class="lead">' + total + ' questões originais, distribuídas pelos mesmos pesos do programa oficial vigente desde janeiro de 2026. No final, você vê sua nota e um diagnóstico por tema.</p>' +
      '<div class="regras">' +
      '<div><strong>' + total + '</strong><span>questões</span></div>' +
      '<div><strong>' + S.tempoMin + ' min</strong><span>tempo sugerido</span></div>' +
      '<div><strong>' + Math.round(S.minimo * 100) + '%</strong><span>mínimo da prova real</span></div>' +
      '</div>' +
      '<div class="acoes"><button class="btn btn-grande" id="comecar">Começar o simulado</button></div>' +
      '</div>';
    document.getElementById("comecar").onclick = function () {
      inicio = Date.now();
      timer = setInterval(function () {
        var el = document.getElementById("relogio");
        if (el) el.textContent = tempoFmt(Date.now() - inicio);
      }, 1000);
      questao(0);
    };
  }

  /* ---------- Questão ---------- */
  function questao(i) {
    atual = i;
    var q = S.questoes[i], total = S.questoes.length;
    var alts = q.alternativas.map(function (a, k) {
      return '<button class="alt" data-k="' + k + '" aria-pressed="' + (respostas[i] === k) + '">' +
        '<span class="bolha">' + LETRAS[k] + '</span><span>' + esc(a) + '</span></button>';
    }).join("");
    var ultima = i === total - 1;
    app.innerHTML =
      '<div class="sim-cab"><span class="eyebrow">Questão ' + (i + 1) + ' de ' + total + '</span>' +
      '<span class="relogio" id="relogio">' + tempoFmt(Date.now() - inicio) + '</span></div>' +
      '<div class="progresso" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + (i + 1) + '"><i style="width:' + ((i + 1) / total * 100) + '%"></i></div>' +
      '<p class="tema-tag">' + esc(S.temas[q.tema]) + '</p>' +
      '<p class="enunciado">' + esc(q.enunciado) + '</p>' +
      '<div class="alts" role="group" aria-label="Alternativas">' + alts + '</div>' +
      '<div class="sim-nav">' +
      '<button class="btn btn-sec" id="voltar"' + (i === 0 ? " disabled" : "") + '>Anterior</button>' +
      '<button class="btn" id="avancar"' + (respostas[i] === null ? " disabled" : "") + '>' + (ultima ? "Ver minha nota" : "Próxima") + '</button>' +
      '</div>';
    app.querySelectorAll(".alt").forEach(function (b) {
      b.onclick = function () {
        respostas[i] = Number(b.getAttribute("data-k"));
        app.querySelectorAll(".alt").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        document.getElementById("avancar").disabled = false;
      };
    });
    document.getElementById("voltar").onclick = function () { questao(i - 1); };
    document.getElementById("avancar").onclick = function () { ultima ? nota() : questao(i + 1); };
    topo();
  }

  /* ---------- Nota + captura ---------- */
  function nota() {
    clearInterval(timer);
    var a = acertos(), total = S.questoes.length, pct = a / total;
    var passou = pct >= S.minimo;
    app.innerHTML =
      '<div class="gate">' +
      '<p class="eyebrow">Seu resultado · ' + esc(S.prova) + '</p>' +
      '<div class="placar">' + a + '/' + total + ' <small>' + Math.round(pct * 100) + '% de acertos<br>em ' + tempoFmt(Date.now() - inicio) + '</small></div>' +
      '<span class="selo ' + (passou ? "ok" : "nao") + '">' + (passou ? "Acima do mínimo de aprovação" : "Abaixo do mínimo de aprovação (" + Math.round(S.minimo * 100) + "%)") + '</span>' +
      '<p class="lead">Informe seu e-mail para liberar o diagnóstico por tema e o gabarito comentado das ' + total + ' questões. Ele aparece na hora, nesta página.</p>' +
      '<form class="form" id="form-lead" novalidate>' +
      '<div class="campo"><label for="nome">Primeiro nome</label><input id="nome" name="nome" autocomplete="given-name" required></div>' +
      '<div class="campo"><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" required></div>' +
      '<label class="consent"><input type="checkbox" id="consent" required> <span>Aceito receber conteúdos e ofertas do Investir Claro por e-mail. Posso cancelar quando quiser. <a href="' + (document.documentElement.getAttribute("data-raiz") || "/") + 'privacidade.html">Política de privacidade</a>.</span></label>' +
      '<p class="erro-msg" id="erro" hidden></p>' +
      '<div class="acoes"><button class="btn btn-grande" type="submit">Ver diagnóstico completo</button></div>' +
      '</form></div>';
    document.getElementById("form-lead").addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = document.getElementById("nome").value.trim();
      var email = document.getElementById("email").value.trim();
      var erro = document.getElementById("erro");
      if (!nome) { erro.textContent = "Digite seu primeiro nome."; erro.hidden = false; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { erro.textContent = "Confira o e-mail: ele precisa estar no formato nome@dominio.com."; erro.hidden = false; return; }
      if (!document.getElementById("consent").checked) { erro.textContent = "Marque a caixa de consentimento para continuar."; erro.hidden = false; return; }
      salvarLead(nome, email, a, total);
      window.aprovaConverter && window.aprovaConverter("lead");
      resultado(nome);
    });
    topo();
  }

  function salvarLead(nome, email, a, total) {
    if (!CFG.supabaseUrl || !CFG.supabaseAnonKey) return;
    var dados = Object.assign({
      nome: nome, email: email, prova: S.slug, acertos: a, total: total,
      por_tema: porTema(), consentimento: true
    }, utms());
    try {
      fetch(CFG.supabaseUrl.replace(/\/$/, "") + "/rest/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: CFG.supabaseAnonKey,
          Authorization: "Bearer " + CFG.supabaseAnonKey,
          Prefer: "return=minimal"
        },
        body: JSON.stringify(dados),
        keepalive: true
      }).catch(function () {});
    } catch (e) { /* o resultado aparece mesmo se o envio falhar */ }
  }

  function porTema() {
    var t = {};
    S.questoes.forEach(function (q, i) {
      t[q.tema] = t[q.tema] || { certas: 0, total: 0 };
      t[q.tema].total++;
      if (respostas[i] === q.correta) t[q.tema].certas++;
    });
    return t;
  }

  /* ---------- Diagnóstico completo ---------- */
  function resultado(nome) {
    var a = acertos(), total = S.questoes.length;
    var t = porTema();
    var fraco = null, pior = 2;
    Object.keys(t).forEach(function (k) { var p = t[k].certas / t[k].total; if (p < pior) { pior = p; fraco = k; } });

    var temasHtml = Object.keys(S.temas).map(function (k) {
      var x = t[k] || { certas: 0, total: 0 }, p = x.total ? x.certas / x.total : 0;
      return '<div class="tema-res"><strong>' + esc(S.temas[k]) + '</strong><span>' + x.certas + '/' + x.total + '</span>' +
        '<div class="barra"><i class="' + (p < S.minimo ? "fraco" : "") + '" style="width:' + Math.round(p * 100) + '%"></i></div></div>';
    }).join("");

    var revHtml = S.questoes.map(function (q, i) {
      var r = respostas[i], ok = r === q.correta;
      return '<div class="rev ' + (ok ? "certa" : "errada") + '">' +
        '<p class="tema-tag">' + (i + 1) + ' · ' + esc(S.temas[q.tema]) + '</p>' +
        '<p>' + esc(q.enunciado) + '</p>' +
        '<p class="resp"><strong>' + (ok ? "Você acertou: " : "Sua resposta: ") + '</strong>' + (r === null ? "em branco" : LETRAS[r] + ") " + esc(q.alternativas[r])) +
        (ok ? "" : '<br><strong>Correta: </strong>' + LETRAS[q.correta] + ') ' + esc(q.alternativas[q.correta])) + '</p>' +
        '<p class="coment">' + esc(q.comentario) + '</p></div>';
    }).join("");

    app.innerHTML =
      '<div class="resultado">' +
      '<p class="eyebrow">Diagnóstico · ' + esc(S.prova) + '</p>' +
      '<h1>' + esc(nome) + ', você acertou ' + a + ' de ' + total + '</h1>' +
      '<p class="lead">' + (fraco ? 'Seu ponto mais fraco foi <span class="marca">' + esc(S.temas[fraco]) + '</span>. É por aí que vale começar a revisão.' : "") + '</p>' +
      '<div class="temas-res">' + temasHtml + '</div>' +
      '<div class="cta-final">' +
      '<h2>Treine com a prova inteira</h2>' +
      '<p>O preparatório completo da ' + esc(S.prova) + ' tem banco de questões por tema, simulados no formato da prova real e comentário em todas as respostas.</p>' +
      '<div class="acoes"><a class="btn btn-grande" href="./#oferta">Conhecer o preparatório</a></div>' +
      '</div>' +
      '<h2>Gabarito comentado</h2>' +
      '<div class="revisao">' + revHtml + '</div>' +
      '<div class="acoes"><button class="btn btn-sec" id="refazer">Refazer o simulado</button></div>' +
      '</div>';
    document.getElementById("refazer").onclick = function () { sortear(); embaralhar(); respostas = new Array(S.questoes.length).fill(null); atual = 0; intro(); topo(); };
    topo();
  }

  intro();
})();
