# Argazkiak: web de fotografía de Amaia Gonzalo

Web con Hugo (0.168 extended, instalado con winget) y Markdown. Tema propio en `layouts/`, sin temas externos.

## Contexto

- Amaia es fotógrafa y tiene dos fotolibros publicados:
  - **Desde el punto de vista de las estrellas** (`content/proiektuak/izarrak/`): poesía visual; presentado el 4 de diciembre de 2024 en Montehermoso (Vitoria-Gasteiz). Única fuente encontrada en internet: un anuncio de Gasteiz Hoy.
  - **Cartografía de una despedida** (`content/proiektuak/kartografia/`): no hay información en internet.
- Los títulos de los libros se mantienen en castellano en los tres idiomas.
- No inventar datos de los libros (textos, editorial, enlace de compra, fechas): preguntárselos a ella.

## Pendiente

- Textos de presentación de cada libro (la traducción al euskera de los textos actuales está sin revisar).
- Fotos reales: portada e interiores. Ahora hay imágenes generadas `provisional-*.jpg` (cielo estrellado y curvas de nivel) que hay que sustituir.
- Editorial (`publisher`) y enlace de compra (`buy`) de cada libro.
- Año real de *Cartografía de una despedida*: ahora pone `2025-01-01`, inventado.
- Textos de la portada (`content/_index.*.md`) y de «Sobre mí» (`content/about/`): son de ejemplo.
- Publicar en GitHub Pages (`.github/workflows/hugo.yml` listo). Requiere crear un repositorio **público** en la cuenta `amaiagonzalo`: confirmarlo con ella antes. Dirección prevista: https://amaiagonzalo.github.io/argazkiak/

## Decisiones

- Idiomas: euskera (principal, en la raíz), castellano (`/es/`) e inglés (`/en/`). Direcciones traducidas con `permalinks` por idioma en `hugo.toml`.
- Diseño oscuro y editorial: Cormorant Garamond alojada en `static/fonts/` (licencia OFL), portada a pantalla completa con el último libro, galería con ritmo de libro (horizontales anchas, verticales estrechas alternando lado), visor a pantalla completa en `assets/js/main.js`.
- Privacidad: `publishResources = false` en `hugo.toml` para no publicar las fotos originales (con EXIF/GPS); solo se publican las versiones WebP redimensionadas. El repositorio será público, así que las fotos deben subirse ya sin GPS.

## Comandos

- Ver en local: `hugo server` → http://localhost:1313
- Nuevo proyecto: `hugo new content proiektuak/izena/index.eu.md` y copiar a `.es.md` / `.en.md`.
- Comprobar el diseño: capturas con Edge headless (`--force-prefers-reduced-motion` para que la animación de la portada no deje la imagen sin pintar en la captura).
