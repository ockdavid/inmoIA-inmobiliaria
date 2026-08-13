# Opiniones — estado actual y cómo mantenerlas

**Estado:** la sección `#opiniones` está **activa** con las **5 reseñas reales**
de Trustpilot (perfil `inmoia.pro`). Los testimonios ficticios que había antes se
eliminaron de `index.html` y de `i18n.js`.

**Por qué se quitaron los ficticios:** publicar reseñas inventadas, o presentar
testimonios como verificados sin serlo, es una práctica comercial desleal según el
**RDL 24/2021** (Directiva Ómnibus) y la Ley General para la Defensa de los
Consumidores. Sanciones de 10.000 € hasta el 4 % de la facturación anual.

---

## Qué hay publicado ahora

| # | Autor (Trustpilot) | Estrellas | Fecha |
|---|--------------------|-----------|-------|
| 1 | Alejandra Moreno | 5 | ago 2026 |
| 2 | Sebastián Cardona | 5 | ago 2026 |
| 3 | María José Díaz Guao | 5 | ago 2026 |
| 4 | Leonardo Alonso | 5 | ago 2026 |
| 5 | Kami Luna | 5 | ago 2026 |

Datos del perfil a día de hoy: **5 reseñas, todas de 5 estrellas, TrustScore 4,1**.
El TrustScore no es 5,0 porque Trustpilot lo pondera por volumen y antigüedad: con
pocas reseñas la nota tiende hacia la media del sector. Por eso la barra de resumen
dice literalmente *"nuestras 5 opiniones son de 5 estrellas · TrustScore 4,1"*, que
es lo que el visitante verá si hace clic. **No pongas "5,0 de media"**: no cuadra con
el perfil y se detecta en un clic.

### Ojo con el encaje mensaje/reseña

Las 5 reseñas son de **inquilinos** (habitaciones, pisos de alquiler), pero la web
está enfocada a **captar vendedores**. Por eso el título dice *"Lo que dicen quienes
ya han confiado en nosotros"* y no *"Propietarios que ya han vendido con nosotros"*,
que sería falso. En cuanto tengas 2-3 reseñas de propietarios vendedores, súbelas y
recupera el título orientado a venta: convierten mucho mejor en esta landing.

---

## Cómo funciona el rotador

- **HTML**: `index.html` → `<section id="opiniones">`. Las 5 tarjetas
  (`<figure class="testi" data-testi>`) están todas en el DOM.
- **JS**: `main.js` → `initTestimonials()`. Muestra las que caben en el grid y cada
  **7 s** avanza la ventana una posición, así que se acaban viendo las 5.
  - El número de tarjetas visibles lo decide el CSS, no el JS: se lee con
    `getComputedStyle(track).gridTemplateColumns`. Si cambias los breakpoints del
    grid, el rotador se adapta solo. **No dupliques breakpoints en el JS.**
  - Se pausa con el ratón encima o al enfocar con teclado (`mouseenter` / `focusin`),
    y al ocultar la pestaña.
  - Los puntos de abajo permiten navegar a mano.
  - Con `prefers-reduced-motion` el cambio es instantáneo, sin fundido.
- **CSS**: `styles.css` → bloques `.tp-bar` y `.testi-rotator` / `.testi-dots`.
  Visibles: 3 (escritorio) · 2 (≤980 px) · 1 (≤760 px).
- **i18n**: `i18n.js`, claves `testi1_q`/`testi1_c` … `testi5_*` en `es`, `en` y `zh`,
  más `op_title`, `op_tp_txt` y `op_tp_cta`.

### Añadir una reseña nueva

1. Duplica un `<figure class="testi" data-testi>` en `index.html` con `testi6_q` /
   `testi6_c`.
2. Añade esas claves en `i18n.js` en **los tres idiomas**. En EN/ZH se **traduce**
   el testimonio, no se reinventa.
3. Actualiza la cifra de la barra (`op_tp_txt`) en los tres idiomas.
4. Si la reseña **no es de 5 estrellas**, ajusta las estrellas de esa tarjeta:
   ```html
   <div class="stars" aria-label="4 sobre 5">★★★★☆</div>
   ```
   No maquilles la nota. Un 4 entre cincos sube la credibilidad del conjunto.

### Reglas que no se saltan

- El texto es **literal del autor**. Puedes corregir una falta de ortografía o un
  espacio doble; **no** puedes cambiar lo que dice ni recortar la parte negativa.
- La firma es el nombre tal y como el autor lo publicó en Trustpilot.
- Cada tarjeta es verificable: la barra enlaza al perfil público.

---

## Trustpilot: widget oficial (pendiente)

Ahora mismo los textos están **en HTML propio** con atribución y enlace al perfil.
Es rápido, sin cookies ni scripts de terceros, y es lo que mejor encaja con la web.

**Peros a tener en cuenta:** los términos de Trustpilot contemplan mostrar el
contenido de las reseñas mediante sus **widgets oficiales (TrustBox) o su API**. Un
copiado a HTML propio, aunque cite la fuente y enlace al perfil, se mueve en zona
gris. La ruta 100 % limpia —y además autoactualizable— es el TrustBox.

### Pasos para migrar al TrustBox (recomendado a partir de ~10 reseñas)

1. El perfil ya está reclamado ("Claimed profile"). Entra en
   https://business.trustpilot.com y copia el **Business Unit ID** del panel de TrustBox.
2. Inserta el snippet del TrustBox "Carousel" o "Grid" (encajan con el diseño).
3. **Ajustar la CSP** en `.htaccess:38`. Ahora es `script-src 'self'`, así que el
   widget **no cargará**. Hay que añadir:
   ```
   script-src 'self' https://widget.trustpilot.com;
   frame-src https://widget.trustpilot.com;
   img-src 'self' data: https://*.trustpilot.com;
   ```
   No hace falta tocar `X-Frame-Options` / `frame-ancestors` (eso protege que TE
   embeban a ti, no al revés).
4. **RGPD**: el TrustBox carga scripts de terceros y puede poner cookies. Decláralo
   en `privacidad.html` y, si usas banner, mételo en terceros con consentimiento previo.
5. **Rendimiento**: añade ~100-150 KB y una petición externa. Cárgalo con `async` y
   valora lazy-load por `IntersectionObserver` como el resto de la web.

Mientras tanto, **pide más reseñas**: con menos de ~10, un TrustBox que muestre "5
reseñas" resta más credibilidad de la que suma.

### Plantilla para pedir reseña (WhatsApp / email)

> Hola [Nombre],
>
> Ahora que ya estás instalado en [zona/inmueble], quería pedirte un favor.
> Estamos empezando y las opiniones de gente real nos ayudan muchísimo.
>
> ¿Te importaría dejarnos 2-3 líneas en Trustpilot contando cómo fue la
> experiencia? Con total sinceridad, lo bueno y lo mejorable.
>
> Aquí el enlace directo: https://www.trustpilot.com/review/inmoia.pro
>
> Mil gracias,
> David — InmoIA

**Truco:** pídelo en las 48-72 h siguientes al cierre, que es cuando la satisfacción
está más alta. Pasado un mes la tasa de respuesta cae en picado.

---

## Checklist al tocar esta sección

- [ ] El texto coincide palabra por palabra con Trustpilot
- [ ] Las estrellas reflejan la valoración real de cada uno
- [ ] La cifra de `op_tp_txt` coincide con el número real de reseñas
- [ ] Traducciones hechas en `es`, `en` y `zh` (ninguna clave vacía)
- [ ] El enlace del menú `#opiniones` sigue visible
- [ ] Fondos alternos correctos: `#opiniones` con `section--alt`, `#faq` sin él,
      `#financiacion` con él
- [ ] Probado en móvil (grid a 1 columna por debajo de 760 px)
