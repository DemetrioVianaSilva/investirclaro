/* Investir Claro — calculadora de juros compostos (aportes no fim de cada mês) */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 });
  var BRL0 = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  function num(v) {
    v = String(v || "").trim().replace(/\s|R\$/g, "");
    if (v.indexOf(",") >= 0) v = v.replace(/\./g, "").replace(",", ".");
    var n = parseFloat(v);
    return isFinite(n) ? n : NaN;
  }
  function curto(v) {
    var a = Math.abs(v);
    if (a >= 1e6) return "R$ " + (v / 1e6).toLocaleString("pt-BR", { maximumFractionDigits: 1 }) + " mi";
    if (a >= 1e3) return "R$ " + Math.round(v / 1e3).toLocaleString("pt-BR") + " mil";
    return "R$ " + Math.round(v);
  }
  function passoBonito(max) {
    var bruto = max / 4, p = Math.pow(10, Math.floor(Math.log10(bruto || 1)));
    var m = bruto / p;
    return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p;
  }

  function calcular() {
    var erro = $("c-erro");
    var ini = num($("c-inicial").value), men = num($("c-mensal").value), taxa = num($("c-taxa").value), prazo = num($("c-prazo").value);
    var msg = "";
    if (!(ini >= 0)) msg = "Valor inicial: digite um número igual ou maior que zero.";
    else if (!(men >= 0)) msg = "Aporte mensal: digite um número igual ou maior que zero.";
    else if (!(taxa >= 0 && taxa <= 100)) msg = "Taxa: use um valor entre 0 e 100%.";
    else if (!(prazo > 0)) msg = "Prazo: digite um número maior que zero.";
    var meses = $("c-prazo-tipo").value === "ano" ? Math.round(prazo * 12) : Math.round(prazo);
    if (!msg && meses > 1200) msg = "Prazo: o máximo é 100 anos (1.200 meses).";
    if (!msg && meses < 1) msg = "Prazo: o mínimo é 1 mês.";
    if (msg) {
      erro.textContent = msg; erro.hidden = false;
      ["r-final", "r-investido", "r-juros"].forEach(function (id) { $(id).textContent = "—"; });
      $("r-tabela").querySelector("tbody").innerHTML = ""; $("r-grafico").innerHTML = "";
      return;
    }
    erro.hidden = true;

    var i = $("c-taxa-tipo").value === "ano" ? Math.pow(1 + taxa / 100, 1 / 12) - 1 : taxa / 100;
    var saldo = ini, investido = ini, pontos = [{ m: 0, s: saldo, inv: investido }], linhas = [];
    for (var m = 1; m <= meses; m++) {
      saldo = saldo * (1 + i) + men;
      investido += men;
      pontos.push({ m: m, s: saldo, inv: investido });
      if (m % 12 === 0 || m === meses) linhas.push({ ano: m % 12 === 0 ? m / 12 : (m / 12).toLocaleString("pt-BR", { maximumFractionDigits: 1 }), inv: investido, juros: saldo - investido, s: saldo });
    }
    $("r-final").textContent = BRL.format(saldo);
    $("r-investido").textContent = BRL.format(investido);
    $("r-juros").textContent = BRL.format(saldo - investido);

    $("r-tabela").querySelector("tbody").innerHTML = linhas.map(function (l) {
      return "<tr><td>" + l.ano + "</td><td class=\"num\">" + BRL0.format(l.inv) + "</td><td class=\"num\">" + BRL0.format(l.juros) + "</td><td class=\"num\">" + BRL0.format(l.s) + "</td></tr>";
    }).join("");

    desenhar(pontos, meses);
  }

  function desenhar(p, meses) {
    var W = 600, H = 280, E = 58, D = 14, T = 12, B = 30;
    var max = Math.max.apply(null, p.map(function (x) { return x.s; })) || 1;
    var passo = passoBonito(max), topo = Math.ceil(max / passo) * passo;
    var X = function (m) { return E + (W - E - D) * m / meses; };
    var Y = function (v) { return H - B - (H - B - T) * v / topo; };
    var amostra = p.filter(function (_, k) { return k % Math.max(1, Math.floor(meses / 120)) === 0 || k === p.length - 1; });
    var linhaS = amostra.map(function (x) { return X(x.m).toFixed(1) + "," + Y(x.s).toFixed(1); }).join(" ");
    var linhaI = amostra.map(function (x) { return X(x.m).toFixed(1) + "," + Y(x.inv).toFixed(1); }).join(" ");
    var area = linhaS + " " + X(meses).toFixed(1) + "," + (H - B) + " " + E + "," + (H - B);
    var g = "";
    for (var v = 0; v <= topo + 1e-6; v += passo) {
      g += "<line x1=\"" + E + "\" x2=\"" + (W - D) + "\" y1=\"" + Y(v).toFixed(1) + "\" y2=\"" + Y(v).toFixed(1) + "\" stroke=\"var(--line)\"/>" +
        "<text x=\"" + (E - 8) + "\" y=\"" + (Y(v) + 4).toFixed(1) + "\" text-anchor=\"end\" font-size=\"11\" fill=\"var(--muted)\" font-family=\"JetBrains Mono, monospace\">" + curto(v) + "</text>";
    }
    var anos = meses / 12, pa = anos <= 5 ? 1 : anos <= 10 ? 2 : anos <= 25 ? 5 : anos <= 50 ? 10 : 20;
    if (meses < 12) {
      [0, meses].forEach(function (m) { g += "<text x=\"" + X(m).toFixed(1) + "\" y=\"" + (H - 10) + "\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\" font-family=\"JetBrains Mono, monospace\">" + m + "m</text>"; });
    } else {
      for (var a = 0; a <= anos + 1e-6; a += pa) g += "<text x=\"" + X(a * 12).toFixed(1) + "\" y=\"" + (H - 10) + "\" text-anchor=\"middle\" font-size=\"11\" fill=\"var(--muted)\" font-family=\"JetBrains Mono, monospace\">" + a + "a</text>";
    }
    var fim = p[p.length - 1];
    $("r-grafico").innerHTML = "<svg class=\"grafico\" viewBox=\"0 0 " + W + " " + H + "\" role=\"img\" aria-label=\"Gráfico do saldo: " + BRL0.format(fim.s) + " ao final, sendo " + BRL0.format(fim.inv) + " investidos.\">" + g +
      "<polygon points=\"" + area + "\" fill=\"var(--accent)\" opacity=\"0.13\"/>" +
      "<polyline points=\"" + linhaI + "\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-dasharray=\"5 5\"/>" +
      "<polyline points=\"" + linhaS + "\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"3\" stroke-linejoin=\"round\"/>" +
      "<circle cx=\"" + X(meses).toFixed(1) + "\" cy=\"" + Y(fim.s).toFixed(1) + "\" r=\"5\" fill=\"var(--accent)\" stroke=\"var(--surface)\" stroke-width=\"2\"/></svg>";
  }

  /* Máscara de dinheiro: o usuário digita só números e vê 100.000,00 formatado */
  function mascaraDinheiro(el) {
    function aplicar() {
      var dig = el.value.replace(/\D/g, "").replace(/^0+(?=\d)/, "").slice(0, 11);
      var n = parseInt(dig || "0", 10) / 100;
      el.value = n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      try { el.setSelectionRange(el.value.length, el.value.length); } catch (e) {}
    }
    el.setAttribute("inputmode", "numeric");
    el.addEventListener("input", aplicar);
    /* Ao tocar no campo, o valor fica selecionado: digitar substitui em vez de somar ao que estava lá */
    el.addEventListener("focus", function () { setTimeout(function () { try { el.select(); } catch (e) {} }, 0); });
    aplicar();
  }
  mascaraDinheiro($("c-inicial"));
  mascaraDinheiro($("c-mensal"));
  $("c-taxa").addEventListener("input", function () {
    var v = this.value.replace(/\./g, ",").replace(/[^\d,]/g, "");
    var i = v.indexOf(",");
    if (i >= 0) v = v.slice(0, i + 1) + v.slice(i + 1).replace(/,/g, "").slice(0, 4);
    this.value = v;
  });
  $("c-prazo").addEventListener("input", function () { this.value = this.value.replace(/\D/g, "").slice(0, 4); });

  var form = $("calc-form");
  form.addEventListener("input", calcular);
  form.addEventListener("change", calcular);
  form.addEventListener("submit", function (e) { e.preventDefault(); calcular(); });
  calcular();
})();
