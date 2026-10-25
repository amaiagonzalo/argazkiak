# Argazkiak: web de fotografía de Amaia Gonzalo

Web con Hugo (0.168 extended, instalado con winget) y Markdown. Tema propio en `layouts/`, sin temas externos.

## Contexto

- Amaia es fotógrafa y tiene dos fotolibros publicados:
  - **Desde el punto de vista de las estrellas** (`content/proiektuak/izarrak/`): poesía visual; presentado el 4 de diciembre de 2024 en Montehermoso (Vitoria-Gasteiz). Única fuente encontrada en internet: un anuncio de Gasteiz Hoy.
  - **Cartografía de una despedida** (`content/proiektuak/kartografia/`): no hay información en internet.
- Los títulos de los libros se mantienen en castellano en los tres idiomas.
- En euskera, fotolibro es **argazkiliburua** (no «fotoliburua»).
- No inventar datos de los libros (textos, editorial, enlace de compra, fechas): preguntárselos a ella.

## Pendiente

- Textos de presentación de cada libro (la traducción al euskera de los textos actuales está sin revisar).
- Fotos reales: portada e interiores. Ahora hay imágenes generadas `provisional-*.jpg` (cielo estrellado y curvas de nivel) que hay que sustituir.
- Editorial (`publisher`) y enlace de compra (`buy`) de cada libro.
- Año real de *Cartografía de una despedida*: ahora pone `2025-01-01`, inventado.
- Textos de la portada (`content/_index.*.md`) y de «Sobre mí» (`content/about/`): son de ejemplo. La foto de «Sobre mí» (`content/about/amaia.jpg`, parámetros `photo` y `photo_credit`) es real y de Barbanero: mantener el crédito.
- Aviso legal (LSSI art. 10) si la web tiene actividad económica, como vender los libros: necesita su nombre completo, NIF y un correo de contacto. Preguntárselos; no inventarlos.
- Publicar en GitHub Pages (`.github/workflows/hugo.yml` listo). Requiere crear un repositorio **público** en la cuenta `amaiagonzalo`: confirmarlo con ella antes. Dirección prevista: https://amaiagonzalo.github.io/argazkiak/

## Decisiones

- Idiomas: euskera (principal, en la raíz), castellano (`/es/`) e inglés (`/en/`). Direcciones traducidas con `permalinks` por idioma en `hugo.toml`.
- Diseño oscuro y editorial: Cormorant Garamond alojada en `static/fonts/` (licencia OFL), portada a pantalla completa con el último libro, galería con ritmo de libro (horizontales anchas, verticales estrechas alternando lado), visor a pantalla completa en `assets/js/main.js`.
- Estética minimalista de inspiración japonesa (su fotografía lo es): mucho espacio vacío, fondo discreto de papel washi sobre negro y una **textura** (no trama: descartadas *asanoha*, *seigaiha*, crucecitas, columnas y otras tramas; quiere japonés actual y textura, no dibujo repetido). Color de fondo elegido: **sumi** original `#0d0d0c` (descartados sus versiones más claras, musgo, tabaco, petróleo, burdeos, índigo, kinari y sepia). Tercer color `--accent` para la sección activa del menú (subrayado fino): **shu** (朱) `#c8553d`, bermellón de los sellos *hanko*; lo eligió porque es pelirroja (descartados oro, musgo, sakura y ai). También es el color de todos los hover de enlaces, excepto en el pie: el pie va sin nada naranja (probados y descartados línea shu, sello hanko «AG» y fondo anaranjado). Idiomas arriba y pequeños, menú principal debajo. Sin cookies ni almacenamiento ni recursos externos, así que no hace falta banner; hay página «Privacidad y cookies» (`content/pribatutasuna/`, enlazada en el pie; euskera sin revisar). Si algún día se añade analítica, vídeo incrustado o fuentes externas, revisarlo. Textura elegida: **sumi** (tinta diluida en nubes amplias, `static/texturas/sumi.svg` en `body::before`); descartadas washi, hormigón y lino. (El papel base va en `body`: grano en mosaico + manchas estiradas a pantalla para que no se vean costuras), «Sobre mí» asimétrica con retrato vertical y crédito en vertical.
- Privacidad: `publishResources = false` en `hugo.toml` para no publicar las fotos originales (con EXIF/GPS); solo se publican las versiones WebP redimensionadas. El repositorio será público, así que las fotos deben subirse ya sin GPS.

## Comandos

- Ver en local: `hugo server` → http://localhost:1313/argazkiak/ (sin `/argazkiak/` da 404)
- Nuevo proyecto: `hugo new content proiektuak/izena/index.eu.md` y copiar a `.es.md` / `.en.md`.
- Comprobar el diseño: capturas con Edge headless (`--force-prefers-reduced-motion` para que la animación de la portada no deje la imagen sin pintar en la captura).
