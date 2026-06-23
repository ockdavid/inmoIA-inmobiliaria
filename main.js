/* =========================================================================
   InmoIA — main.js  (IIFE, sin módulos: funciona en file://, FTP y CDN)
   ========================================================================= */
(function () {
  "use strict";

  /* ⚠️ CAMBIA ESTE NÚMERO por el WhatsApp real del negocio (formato internacional,
     sin "+" ni espacios). Ejemplo España: 34612345678 */
  var CONFIG = {
    phone: "34695128762",
    waBase: "Hola InmoIA 👋 Quiero una valoración gratuita de mi vivienda."
  };

  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }
  function waURL(text) {
    return "https://wa.me/" + CONFIG.phone + "?text=" + encodeURIComponent(text || CONFIG.waBase);
  }

  /* ---- Header: transparente sobre el hero, sólido al bajar ---- */
  function initHeader() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    var hero = document.querySelector(".hero");
    var trigger = function () {
      return hero ? hero.offsetHeight - header.offsetHeight - 40 : 200;
    };
    var apply = function () {
      if (window.scrollY < trigger()) header.classList.add("at-hero");
      else header.classList.remove("at-hero");
    };
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply, { passive: true });
  }

  /* ---- Menú móvil ---- */
  function initNav() {
    var header = document.querySelector("[data-header]");
    var toggle = document.querySelector("[data-nav-toggle]");
    if (!header || !toggle) return;
    var close = function () { header.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Abrir menú"); };
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    header.querySelectorAll("[data-nav] a").forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("resize", function () { if (window.innerWidth > 880) close(); });
  }

  /* ---- Smooth scroll con offset de cabecera ---- */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 78,
        behavior: reduce ? "auto" : "smooth"
      });
    });
  }

  /* ---- Reveal al hacer scroll ---- */
  function initReveals() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -4% 0px" });
    items.forEach(function (el) { io.observe(el); });
    /* Red de seguridad: a los 6s revela lo visible que siga oculto */
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    }, 6000);
  }

  /* ---- Carrusel de fondo del hero (fundido cada 6 s) ---- */
  function initHeroSlideshow() {
    var slides = document.querySelectorAll(".hero-bg");
    if (slides.length < 2) return;              /* en v3/v4 hay 1 sola → no hace nada */
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove("is-active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("is-active");
    }, 6000);
  }

  /* ---- Enlaces de WhatsApp ---- */
  function initWhatsApp() {
    document.querySelectorAll("[data-wa-link]").forEach(function (a) {
      if (!a.hasAttribute("data-lead-wa")) a.href = waURL(a.getAttribute("data-wa-text") || null);
      a.setAttribute("target", "_blank");
    });
  }

  /* ---- Formulario de valoración → email (Web3Forms) + respaldo WhatsApp ---- */
  function initLeadForm() {
    var form = document.querySelector("[data-lead-form]");
    if (!form) return;
    var success = form.querySelector("[data-form-success]");
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var key = (data.get("access_key") || "").toString();
      var configured = key && key.indexOf("PON-AQUI") === -1;

      var done = function () {
        if (success) success.hidden = false;
        form.reset();
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Pedir valoración gratis"; }
      };
      var fallbackWhatsApp = function () {
        var msg = CONFIG.waBase +
          "\nNombre: " + (data.get("nombre") || "") +
          "\nTeléfono: " + (data.get("telefono") || "") +
          "\nEmail: " + (data.get("email") || "") +
          "\nZona: " + (data.get("zona") || "");
        window.open(waURL(msg), "_blank");
        done();
      };

      if (!configured) { fallbackWhatsApp(); return; }   /* sin clave aún → WhatsApp */

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Enviando…"; }
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(function (json) {
          if (json && json.success) done();
          else fallbackWhatsApp();   /* si el servicio rechaza, no perdemos el lead */
        })
        .catch(function () { fallbackWhatsApp(); });
    });
  }

  /* ---- Enlaces legales placeholder ---- */
  function initLegal() {
    document.querySelectorAll("[data-legal]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Página legal pendiente de publicar. Recuerda añadir tu Aviso legal y Política de privacidad (obligatorio por RGPD) antes de lanzar.");
      });
    });
  }

  /* ---- Año del footer ---- */
  function initYear() {
    var y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  }

  function boot() {
    safe(initHeader, "initHeader");
    safe(initNav, "initNav");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initReveals, "initReveals");
    safe(initHeroSlideshow, "initHeroSlideshow");
    safe(initWhatsApp, "initWhatsApp");
    safe(initLeadForm, "initLeadForm");
    safe(initLegal, "initLegal");
    safe(initYear, "initYear");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
