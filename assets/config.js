/* ============================================================
   Investir Claro — CONFIGURAÇÃO (o único arquivo que você precisa editar)
   ============================================================ */
window.APROVA_CONFIG = {
  // Links de checkout da Hotmart (Produtos > seu produto > Links)
  checkout: {
    "cpa": "https://pay.hotmart.com/L108503808F",
    "cpro-r": "https://pay.hotmart.com/S108601356Q",
    "planilha": "https://pay.hotmart.com/D108477807B",
    "dividas": "https://pay.hotmart.com/I108551417Y"
  },

  // Data em que o acesso pago é liberado (pré-venda). Deixe "" quando o produto já estiver pronto.
  liberacao: "15 de janeiro de 2027",

  // Captura de leads no Supabase (tabela "leads"; SQL no README.md).
  // Use a chave "anon" pública. Deixe vazio para não salvar leads.
  supabaseUrl: "https://potnmbimyemwjwmsfdet.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvdG5tYmlteWVtd2p3bXNmZGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1ODE3MTMsImV4cCI6MjExMDE1NzcxM30.jCOZeBYpqcMVx62umWtidTzxYF1jkgbSJOn2YJqLU0M",

  // Google Ads: ID da tag (AW-XXXXXXXXX) e rótulos das conversões
  googleAdsId: "AW-18484684141",
  conversoes: {
    lead: "AW-18484684141/G9xlCN6H4LwdEO3Kl-5E",          // ex.: "AW-123456789/AbCdEfGh" — disparada ao enviar o e-mail no simulado
    cliqueCheckout: "AW-18484684141/7ktbCJvw2LgdEO3Kl-5E" // disparada ao clicar em comprar
  },

  emailContato: "demetriovianasilva@gmail.com"
};

/* Carrega a tag do Google Ads apenas se configurada */
(function () {
  var id = window.APROVA_CONFIG.googleAdsId;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  if (!id) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", id);
})();

window.aprovaConverter = function (tipo) {
  var c = window.APROVA_CONFIG.conversoes[tipo];
  if (c && window.gtag) window.gtag("event", "conversion", { send_to: c });
};

/* Liga botões de compra (data-checkout="cpa" | "cpro-r") e textos de liberação */
/* Origem da visita: guarda UTMs e gclid da página de entrada (30 dias), para o lead e a venda não perderem a origem ao trocar de página */
(function () {
  var CH = "ic_origem", campos = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
  var p = new URLSearchParams(location.search), novo = {};
  campos.forEach(function (k) { if (p.get(k)) novo[k] = p.get(k).slice(0, 200); });
  try {
    if (Object.keys(novo).length) { novo.t = Date.now(); localStorage.setItem(CH, JSON.stringify(novo)); }
  } catch (e) {}
  window.icOrigem = function () {
    try {
      var o = JSON.parse(localStorage.getItem(CH) || "null");
      if (o && Date.now() - o.t < 30 * 864e5) { var r = {}; campos.forEach(function (k) { if (o[k]) r[k] = o[k]; }); return r; }
    } catch (e) {}
    return {};
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  var cfg = window.APROVA_CONFIG;
  document.querySelectorAll("[data-checkout]").forEach(function (a) {
    var url = cfg.checkout[a.getAttribute("data-checkout")];
    /* Enquanto o link da Hotmart não for configurado, o botão leva ao simulado grátis em vez de um link quebrado */
    if (!url || url.indexOf("SEU_CODIGO") >= 0) {
      var fb = a.getAttribute("data-fallback");
      a.textContent = fb ? "Vendas abrem em breve" : "Vendas abrem em breve: faça o simulado grátis";
      a.href = fb || "simulado.html";
      a.removeAttribute("data-checkout");
      return;
    }
    /* src na Hotmart mostra a origem da venda no relatório (gads = veio de anúncio do Google) */
    var o = window.icOrigem(), src = o.gclid ? "gads" : (o.utm_source || "");
    if (src) url += (url.indexOf("?") >= 0 ? "&" : "?") + "src=" + encodeURIComponent(src.replace(/[^\w-]/g, "").slice(0, 30));
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.addEventListener("click", function () { window.aprovaConverter("cliqueCheckout"); });
  });
  document.querySelectorAll("[data-liberacao]").forEach(function (el) {
    if (cfg.liberacao) el.textContent = cfg.liberacao;
    else { var box = el.closest("[data-prevenda]"); if (box) box.hidden = true; }
  });
  window.icPreencherEmail = function () { document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = cfg.emailContato; }); };
  window.icPreencherEmail();

  /* Newsletter (data-news): salva na mesma tabela de leads com prova = "newsletter" */
  document.querySelectorAll("form[data-news]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = f.querySelector("input[type=email]").value.trim();
      var ok = f.querySelector("[data-ok]"), erro = f.querySelector("[data-erro]");
      erro.hidden = true;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { erro.textContent = "Confira o e-mail: ele precisa estar no formato nome@dominio.com."; erro.hidden = false; return; }
      if (!f.querySelector("input[type=checkbox]").checked) { erro.textContent = "Marque a caixa de consentimento para continuar."; erro.hidden = false; return; }
      if (cfg.supabaseUrl && cfg.supabaseAnonKey) {
        try {
          fetch(cfg.supabaseUrl.replace(/\/$/, "") + "/rest/v1/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json", apikey: cfg.supabaseAnonKey, Authorization: "Bearer " + cfg.supabaseAnonKey, Prefer: "return=minimal" },
            body: JSON.stringify({ nome: "-", email: email, prova: "newsletter", consentimento: true }),
            keepalive: true
          }).catch(function () {});
        } catch (x) {}
      }
      window.aprovaConverter("lead");
      f.reset();
      ok.hidden = false;
    });
  });
});
