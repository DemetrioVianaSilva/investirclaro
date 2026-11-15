/* Investir Claro — modo claro/escuro e menu do celular.
   Carregado no <head> para aplicar o tema antes da página aparecer (sem "piscar"). */
(function () {
  var raiz = document.documentElement;
  /* Login da área do aluno: se o link do e-mail cair em outra página, leva para a área com o token */
  if (/(^#|&)(access_token|error_code)=/.test(location.hash) && location.pathname.indexOf("/area/") < 0) {
    location.replace((raiz.getAttribute("data-raiz") || "./") + "area/cpa.html" + location.hash);
    return;
  }
  /* Guarda no navegador; se o armazenamento estiver bloqueado, usa window.name,
     que sobrevive à troca de página na mesma aba. */
  function lerNome(k) { var m = (window.name || "").match(new RegExp("(?:^|;)" + k + "=([^;]*)")); return m ? m[1] : null; }
  function gravarNome(k, v) {
    var partes = (window.name || "").split(";").filter(function (x) { return x && x.indexOf(k + "=") !== 0 && x.indexOf("=") > 0; });
    partes.push(k + "=" + v); window.name = partes.join(";");
  }
  function salvo(k) { var v = null; try { v = localStorage.getItem(k); } catch (e) {} return v || lerNome(k); }
  function guardar(k, v) { try { localStorage.setItem(k, v); } catch (e) {} gravarNome(k, v); }
  var armazenaOk = (function () { try { localStorage.setItem("_t", "1"); localStorage.removeItem("_t"); return true; } catch (e) { return false; } })();
  /* Último recurso: o tema viaja no endereço (#tema-escuro / #tema-claro) */
  var h = (location.hash || "").match(/^#tema-(escuro|claro)$/);
  if (h) gravarNome("tema", h[1] === "escuro" ? "dark" : "light");
  var t = h ? (h[1] === "escuro" ? "dark" : "light") : salvo("tema");
  /* Usa um atributo próprio (data-tema): alguns visualizadores, como a prévia
     do app, reescrevem data-theme a cada página e apagariam a escolha. */
  if (t === "dark" || t === "light") raiz.setAttribute("data-tema", t === "dark" ? "escuro" : "claro");
  var TAMANHOS = ["100%", "112.5%", "125%"];
  var f = parseInt(salvo("fonte") || "0", 10);
  if (f > 0 && f < TAMANHOS.length) raiz.style.fontSize = TAMANHOS[f];

  function atual() {
    var e = raiz.getAttribute("data-tema");
    if (e) return e === "escuro" ? "dark" : "light";
    var d = raiz.getAttribute("data-theme");
    if (d) return d;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  /* Página nova sempre abre no topo (exceto quando o link aponta para uma seção, como #oferta).
     Voltar/avançar continua restaurando a posição normalmente. */
  if (h) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
  var navTipo = (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || {}).type;
  function irAoTopo() { if ((!location.hash || h) && navTipo !== "back_forward") window.scrollTo(0, 0); }
  window.addEventListener("load", irAoTopo);

  document.addEventListener("DOMContentLoaded", function () {
    irAoTopo();
    var btn = document.querySelector("[data-tema-btn]");
    function rotular() {
      if (!btn) return;
      var escuro = atual() === "dark";
      btn.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
      btn.setAttribute("aria-pressed", escuro ? "true" : "false");
    }
    if (btn) {
      rotular();
      btn.addEventListener("click", function () {
        var novo = atual() === "dark" ? "light" : "dark";
        raiz.setAttribute("data-tema", novo === "dark" ? "escuro" : "claro");
        guardar("tema", novo);
        rotular();
        document.dispatchEvent(new CustomEvent("tema-mudou"));
      });
    }

    if (!armazenaOk) {
      document.addEventListener("click", function (ev) {
        var a = ev.target.closest && ev.target.closest("a[href]");
        var e = raiz.getAttribute("data-tema");
        if (!a || !e) return;
        var href = a.getAttribute("href");
        if (!href || /^(https?:|mailto:|tel:|#)/.test(href) || href.indexOf("#") >= 0) return;
        a.setAttribute("href", href + "#tema-" + e);
      }, true);
    }

    var fb = document.querySelector("[data-fonte-btn]");
    function rotularFonte() { if (fb) fb.setAttribute("aria-label", "Tamanho do texto: " + ["normal", "grande", "muito grande"][f] + ". Toque para mudar."); }
    if (fb) {
      rotularFonte();
      fb.addEventListener("click", function () {
        f = (f + 1) % TAMANHOS.length;
        raiz.style.fontSize = f ? TAMANHOS[f] : "";
        guardar("fonte", String(f));
        rotularFonte();
      });
    }

    var mb = document.querySelector("[data-menu-btn]"), menu = document.getElementById("menu");
    if (mb && menu) {
      mb.addEventListener("click", function () {
        var aberto = menu.classList.toggle("aberto");
        mb.setAttribute("aria-expanded", aberto ? "true" : "false");
        mb.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && menu.classList.contains("aberto")) { menu.classList.remove("aberto"); mb.setAttribute("aria-expanded", "false"); mb.focus(); }
      });
    }
  });
})();
