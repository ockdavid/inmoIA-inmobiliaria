/* =========================================================================
   InmoIA — Calculadora de capacidad de compra (regla del 35%).
   Orientativa. Sin dependencias, sin código inline (compatible con la CSP).
   Inputs: nómina/ingresos netos, % de financiación, tipo fijo y plazo.
   Salidas: cuota máxima, hipoteca máxima y precio máximo de vivienda.
   ========================================================================= */
(function () {
  "use strict";

  var ESFUERZO = 0.35; // regla del 35% sobre la nómina/ingresos netos
  var LTV_DEF = 0.80;  // financiación por defecto si no se indica

  var eur = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  function el(id) { return document.getElementById(id); }
  function num(id) {
    var n = parseFloat(el(id) && el(id).value);
    return isFinite(n) && n > 0 ? n : 0;
  }

  function calc() {
    if (!el("calc-price")) return;

    var income = num("calc-income");
    var rate = num("calc-rate");
    var term = num("calc-term") || 30;

    // Porcentaje de financiación del banco (LTV). Selector 70/80/90/100.
    var ltvPct = num("calc-financing");
    var LTV = ltvPct > 0 ? Math.min(ltvPct, 100) / 100 : LTV_DEF;

    // Cuota máxima recomendada: 35% de la nómina (ratio de endeudamiento).
    var payment = income * ESFUERZO;

    // Capital máximo de hipoteca (amortización francesa, interés fijo).
    var i = rate / 100 / 12;
    var n = term * 12;
    var loan = i > 0 ? payment * (1 - Math.pow(1 + i, -n)) / i : payment * n;

    // Precio máximo de vivienda: la hipoteca cubre el % financiado del precio.
    var price = LTV > 0 ? loan / LTV : loan;

    el("calc-payment").textContent = eur.format(payment);
    el("calc-loan").textContent = eur.format(loan);
    el("calc-price").textContent = eur.format(price);
  }

  function init() {
    if (!el("calc-hipoteca")) return;
    ["calc-income", "calc-financing", "calc-rate", "calc-term"].forEach(function (id) {
      var field = el(id);
      if (!field) return;
      field.addEventListener("input", calc);
      field.addEventListener("change", calc);
    });
    calc();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
