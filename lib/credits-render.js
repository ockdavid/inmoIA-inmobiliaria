(function () {
  "use strict";
  var list = document.querySelector("[data-credits]");
  if (!list) return;

  /* Escapa texto para evitar inyección de HTML/scripts desde datos externos */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /* Solo permite enlaces http(s); cualquier otra cosa se descarta */
  function safeUrl(u) {
    u = String(u == null ? "" : u);
    return /^https?:\/\//i.test(u) ? esc(u) : "";
  }

  fetch("assets/credits.json")
    .then(function (r) { return r.json(); })
    .then(function (credits) {
      var html = Object.keys(credits).map(function (id) {
        var c = credits[id] || {};
        var cu = safeUrl(c.creator_url);
        var creator = cu
          ? '<a href="' + cu + '" target="_blank" rel="noopener noreferrer">' + esc(c.creator) + "</a>"
          : (esc(c.creator) || "Autor desconocido");
        var lic = safeUrl(c.license_url);
        var orig = safeUrl(c.foreign_landing_url);
        return "<li><strong>" + esc(c.title) + "</strong> · " + creator +
          " (" + esc(c.source) + ") · " +
          (lic ? '<a href="' + lic + '" target="_blank" rel="noopener noreferrer">' + esc(c.license).toUpperCase() + " " + esc(c.license_version || "") + "</a>" : esc(c.license)) +
          (orig ? ' · <a href="' + orig + '" target="_blank" rel="noopener noreferrer">Ver original ↗</a>' : "") +
          "</li>";
      }).join("");
      list.innerHTML = html;
    })
    .catch(function () {
      list.textContent = "Imágenes bajo licencias Creative Commons vía Openverse.";
    });
})();
