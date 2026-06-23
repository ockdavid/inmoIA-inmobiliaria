/* =========================================================================
   InmoIA — Calculadora de capacidad de compra (regla del 35%).
   Orientativa. Sin dependencias, sin código inline (compatible con la CSP).
   Inputs: ingresos netos, deudas, ahorro, tipo de interés, plazo.
   Salidas: cuota máxima, hipoteca máxima y precio máximo de vivienda.
   ========================================================================= */
(function () {
  "use strict";

  var GASTOS = 0.10; // gastos de compra estimados (~10% del precio)
  var LTV = 0.80;    // financiación máxima habitual del banco (80% del precio)
  var ESFUERZO = 0.35; // regla del 35% sobre ingresos netos

  var eur = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  var pct = new Intl.NumberFormat("es-ES", { style: "percent", maximumFractionDigits: 0 });

  function el(id) { return document.getElementById(id); }
  function num(id) {
    var n = parseFloat(el(id) && el(id).value);
    return isFinite(n) && n > 0 ? n : 0;
  }

  function calc() {
    if (!el("calc-price")) return;

    var income = num("calc-income");
    var debts = num("calc-debts");
    var savings = num("calc-savings");
    var rate = num("calc-rate");
    var term = num("calc-term") || 30;

    // Cuota máxima recomendada: 35% de ingresos menos deudas ya existentes.
    var payment = Math.max(0, income * ESFUERZO - debts);

    // Capital máximo de hipoteca (amortización francesa).
    var i = rate / 100 / 12;
    var n = term * 12;
    var loan = i > 0 ? payment * (1 - Math.pow(1 + i, -n)) / i : payment * n;

    // Precio máximo de vivienda.
    var price;
    if (savings > 0) {
      // Limitado por (a) financiación + ahorro y (b) ahorro suficiente para entrada + gastos.
      var pByFinance = (savings + loan) / (1 + GASTOS);
      var pBySavings = savings / (1 - LTV + GASTOS); // entrada (20%) + gastos
      price = Math.min(pByFinance, pBySavings);
      loan = Math.min(loan, LTV * price); // el banco no presta más del 80%
    } else {
      price = loan / LTV;
    }

    el("calc-payment").textContent = eur.format(payment);
    el("calc-loan").textContent = eur.format(loan);
    el("calc-price").textContent = eur.format(price);

    var effortVal = el("calc-effort-val");
    if (effortVal) effortVal.textContent = income > 0 ? pct.format(payment / income) : "—";

    var warn = el("calc-warn");
    if (warn) warn.hidden = payment > 0;
  }

  function init() {
    if (!el("calc-hipoteca")) return;
    ["calc-income", "calc-debts", "calc-savings", "calc-rate", "calc-term"].forEach(function (id) {
      var input = el(id);
      if (input) input.addEventListener("input", calc);
    });
    calc();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
