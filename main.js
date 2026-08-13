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
      if (hero && window.scrollY < trigger()) header.classList.add("at-hero");
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

  /* ---- Rotador de opiniones (Trustpilot) ----
     Hay 5 reseñas reales en el DOM y se muestran solo las que caben en el
     grid (3 / 2 / 1 según viewport). Cada 7 s la ventana avanza una posición,
     así que con el tiempo se ven todas. Se pausa al pasar el ratón o al
     enfocar con teclado, y los puntos permiten navegar a mano. */
  function initTestimonials() {
    var track = document.querySelector("[data-testi-track]");
    if (!track) return;
    var cards = Array.prototype.slice.call(track.querySelectorAll("[data-testi]"));
    var dotsBox = document.querySelector("[data-testi-dots]");
    if (cards.length < 2) return;

    var start = 0, timer = null, paused = false;
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var DELAY = 7000, FADE = 450;

    /* Cuántas caben: lo decide el CSS, así no duplicamos breakpoints aquí */
    function perView() {
      var cols = getComputedStyle(track).gridTemplateColumns.split(" ").filter(Boolean).length;
      return Math.max(1, Math.min(cols || 1, cards.length));
    }

    function render() {
      var n = perView();
      var visible = {};
      for (var k = 0; k < n; k++) visible[(start + k) % cards.length] = true;
      cards.forEach(function (c, i) { c.hidden = !visible[i]; });
      if (dotsBox) {
        Array.prototype.forEach.call(dotsBox.children, function (b, i) {
          var on = i === start;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-current", on ? "true" : "false");
        });
      }
    }

    function goTo(i) {
      if (i === start) return;
      start = ((i % cards.length) + cards.length) % cards.length;
      if (reduce) { render(); return; }
      track.classList.add("is-fading");
      setTimeout(function () {
        render();
        track.classList.remove("is-fading");
      }, FADE);
    }

    function play() {
      stop();
      timer = setInterval(function () { if (!paused) goTo(start + 1); }, DELAY);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    if (dotsBox) {
      cards.forEach(function (_, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Ver opinión " + (i + 1) + " de " + cards.length);
        b.addEventListener("click", function () { goTo(i); play(); });
        dotsBox.appendChild(b);
      });
    }

    /* Pausa mientras se lee o se navega con teclado */
    var wrap = track.closest(".testi-rotator") || track;
    ["mouseenter", "focusin"].forEach(function (ev) {
      wrap.addEventListener(ev, function () { paused = true; });
    });
    ["mouseleave", "focusout"].forEach(function (ev) {
      wrap.addEventListener(ev, function () { paused = false; });
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else play();
    });

    var resizeT;
    window.addEventListener("resize", function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(render, 150);
    }, { passive: true });

    render();
    play();
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
        var extra = (data.get("mensaje") || "").toString().trim();
        var msg = CONFIG.waBase +
          "\nNombre: " + (data.get("nombre") || "") +
          "\nTeléfono: " + (data.get("prefijo") || "") + " " + (data.get("telefono") || "") +
          "\nEmail: " + (data.get("email") || "") +
          "\nZona: " + (data.get("zona") || "") +
          (extra ? "\nMás datos: " + extra : "");
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
    safe(initTestimonials, "initTestimonials");
    safe(initWhatsApp, "initWhatsApp");
    safe(initLeadForm, "initLeadForm");
    safe(initLegal, "initLegal");
    safe(initYear, "initYear");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
