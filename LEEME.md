# InmoIA — Web (guía rápida)

Landing de captación de propietarios. Sitio **estático** (HTML/CSS/JS), sin
dependencias ni build. Listo para subir a Hostinger o cualquier hosting.

## Verla en tu ordenador
Doble clic en `index.html`. (Para que cargue todo igual que en producción,
mejor con un servidor local: `python -m http.server 8765 --directory .` y abrir
`http://localhost:8765`).

---

## ⚠️ Personaliza esto ANTES de publicar

1. **WhatsApp** — ✅ ya configurado (695 12 87 62) en `main.js`.
2. **Email** — ✅ ya configurado (davidwp37@gmail.com) en el pie.
3. **Access Key del formulario** — pon tu clave de Web3Forms (ver "El formulario").
4. **Aviso legal y Política de privacidad** — ✅ ya creados (`aviso-legal.html` y
   `privacidad.html`, enlazados desde el pie y el formulario). **Solo debes rellenar
   los huecos `[entre corchetes]`** (tu nombre/DNI, domicilio, etc.) y revisarlos.
4. **Testimonios** — los de la sección "Opiniones" son de ejemplo. Sustitúyelos
   por reseñas reales en cuanto cierres ventas (y enlaza tu ficha de Google).
5. **Fotos** — las imágenes son de stock (Creative Commons, ver `creditos.html`).
   Cuando tengas fotos propias de inmuebles, reemplázalas en `assets/img/`
   manteniendo los mismos nombres `.webp`.

## El formulario (recibir los leads en tu email)
Ya está preparado para enviarte cada solicitud a tu correo mediante **Web3Forms**
(gratis, sin servidor). Para activarlo:
1. Entra en **https://web3forms.com**, escribe tu email (davidwp37@gmail.com) y crea
   una **Access Key** gratuita (te llega al correo al instante).
2. En `index.html`, busca `PON-AQUI-TU-ACCESS-KEY-DE-WEB3FORMS` y pega tu clave.
3. Listo: cada formulario te llegará al email con nombre, teléfono, email (opcional)
   y zona del propietario.

Mientras no pongas la clave, el formulario usa **WhatsApp como respaldo** (se abre
con los datos ya escritos). Si el envío por email fallara, también cae a WhatsApp
para no perder ningún lead.

> La Access Key es **pública por diseño** (solo enruta los envíos a tu correo, no da
> acceso a nada). El antispam va por un campo trampa (honeypot); si te llega spam,
> en Web3Forms puedes activar hCaptcha. Recuerda la Política de privacidad (RGPD):
> debe mencionar que los datos se procesan vía Web3Forms para contactar al propietario.

---

## Publicar en Hostinger (arrastrar y soltar)
1. Entra en hPanel → **Administrador de archivos** → carpeta `public_html`.
2. Sube **el contenido** de esta carpeta `web/` (no la carpeta, sino lo que hay
   dentro: `index.html`, `styles.css`, `main.js`, `assets/`, `lib/`, `.htaccess`…).
3. Asegúrate de subir también el archivo **`.htaccess`** (algunos gestores ocultan
   los archivos que empiezan por punto: activa "mostrar archivos ocultos").
4. Activa el **SSL gratuito** del dominio y, en `.htaccess`, descomenta el bloque
   de "Redirección a HTTPS".

## Tras cada cambio (importante)
El `.htaccess` ya evita versiones cacheadas. Aun así, si cambias `styles.css` o
`main.js`, sube el número de versión `?v=20260617` (en `index.html`) a la fecha
del día. Así el navegador siempre coge la versión nueva.

## No publicar
Las carpetas `assets/photos/source/` (originales) y `tools/` (archivos de
generación) no hacen falta en el servidor. Puedes no subirlas.
