# Argazkiak: web de fotografía de Amaia Gonzalo

Web con Hugo (0.168 extended, instalado con winget) y Markdown. Tema propio en `layouts/`, sin temas externos.

## Contexto

- Amaia es fotógrafa y tiene dos fotolibros publicados:
  - **Desde el punto de vista de las estrellas** (`content/argazkiliburuak/izarrak/`): poesía visual; presentado el 4 de diciembre de 2024 en Montehermoso (Vitoria-Gasteiz). Única fuente encontrada en internet: un anuncio de Gasteiz Hoy.
  - **Cartografía de una despedida** (`content/argazkiliburuak/kartografia/`): no hay información en internet.
- Los títulos de los libros se mantienen en castellano en los tres idiomas.
- En euskera, fotolibro es **argazkiliburua** (no «fotoliburua»).
- No inventar datos de los libros (textos, editorial, enlace de compra, fechas): preguntárselos a ella.

## Pendiente

- Textos de presentación de cada libro: el de *Cartografía* lo redactó Claude a partir de lo que ella contó (muerte de una relación, resurrección, elegirse a una misma, seguir la guía interna y volar soltando lo que sobra); euskera e inglés sin revisar.
- Fotos: los dos libros tienen ya fotos reales (copias a 3000 px sin metadatos hechas con LightCraft). En *Cartografía* la portada (`portada-06.jpg`, ramas con musgo) la eligió ella. Las fotos llevan el número con el que ella las nombró en su carpeta (1–9) y la galería sigue ese orden.
- Editorial (`publisher`) de cada libro. Los dos libros están agotados (`soldout: true`: sello «Agortuta» bajo el título y sin botón de compra); *Desde el punto de vista de las estrellas* se puede consultar en las bibliotecas de la lista `where`.
- Año real de *Cartografía de una despedida*: ahora pone `2025-01-01`, inventado.
- Textos de la portada (`content/_index.*.md`) y de «Sobre mí» (`content/about/`): son de ejemplo. La foto de «Sobre mí» (`content/about/amaia.jpg`, parámetros `photo` y `photo_credit`) es real y de Javier Martín (Barbanero, enlazado a su Instagram; `photo_credit` admite Markdown): mantener el crédito.
- Aviso legal (LSSI art. 10) si la web tiene actividad económica, como vender los libros: necesita su nombre completo, NIF y un correo de contacto. Preguntárselos; no inventarlos.
- Publicar en GitHub Pages (`.github/workflows/hugo.yml` listo). Requiere crear un repositorio **público** en la cuenta `amaiagonzalo`: confirmarlo con ella antes. Dirección prevista: https://amaiagonzalo.github.io/argazkiak/

## Decisiones

- Página **Zirriborroak / Cuaderno / Notebook** (`content/zirriborroak/`, `layout: notebook` → `layouts/notebook.html`): fotos sueltas que todavía no son proyecto, de su carpeta `Documents/argazkiak/zirriborroak`. Ella las agrupa por el prefijo del nombre (`1-…`, `2-…`); cada grupo es un bloque de fotos a la misma altura. Las fotos de esa carpeta sin prefijo no se usan. Para actualizar: volver a exportar toda la carpeta (LightCraft, 3000 px, sin metadatos) y sustituir las fotos del bundle.
- Anuarios **oculto por ahora** (`build: render: never` y menú comentado en `hugo.toml`).
- Secciones: **Argazkiliburuak / Fotolibros / Photobooks** (`content/argazkiliburuak/`) y **Urtekariak / Anuarios / Yearbooks** (`content/urtekariak/`, vacía: muestra «Próximamente»; falta saber qué anuarios son y su contenido). Antes la sección se llamaba «Proyectos».
- Idiomas: euskera (principal, en la raíz), castellano (`/es/`) e inglés (`/en/`). Direcciones traducidas con `permalinks` por idioma en `hugo.toml`.
- Diseño oscuro y editorial: Cormorant Garamond alojada en `static/fonts/` (licencia OFL), portada a pantalla completa con el primer libro según `weight` (ahora *Desde el punto de vista de las estrellas*; las listas siguen el mismo orden), galería con ritmo de libro (horizontales anchas, verticales estrechas alternando lado), visor a pantalla completa en `assets/js/main.js`.
- Estética minimalista de inspiración japonesa (su fotografía lo es): mucho espacio vacío, fondo discreto de papel washi sobre negro y una **textura** (no trama: descartadas *asanoha*, *seigaiha*, crucecitas, columnas y otras tramas; quiere japonés actual y textura, no dibujo repetido). Color de fondo elegido: **sumi** original `#0d0d0c` (descartados sus versiones más claras, musgo, tabaco, petróleo, burdeos, índigo, kinari y sepia). Tercer color `--accent` para la sección activa del menú (subrayado fino): **shu** (朱) `#c8553d`, bermellón de los sellos *hanko*; lo eligió porque es pelirroja (descartados oro, musgo, sakura y ai). También es el color de todos los hover de enlaces, excepto en el pie: el pie va sin nada naranja (probados y descartados línea shu, sello hanko «AG» y fondo anaranjado). Idiomas arriba y pequeños, menú principal debajo. Sin cookies ni almacenamiento ni recursos externos, así que no hace falta banner; hay página «Privacidad y cookies» (`content/pribatutasuna/`, enlazada en el pie; euskera sin revisar). Si algún día se añade analítica, vídeo incrustado o fuentes externas, revisarlo. Textura elegida: **sumi** (tinta diluida en nubes amplias, `static/texturas/sumi.svg` en `body::before`); descartadas washi, hormigón y lino. (El papel base va en `body`: grano en mosaico + manchas estiradas a pantalla para que no se vean costuras), «Sobre mí» asimétrica con retrato vertical y crédito en vertical.
- Ajustes por foto en `resources` del front matter: `size: small` (más pequeña), `center: true` (centrada y algo más pequeña), `row: start` … `row: end` (varias fotos en la misma fila, alineadas por abajo; `row: middle` en la primera para centrarlas en vertical, `row: triptych` para un tríptico, juntas y del mismo tamaño). En *Cartografía*: 1 y 2 en fila (2 pequeña), 3 centrada, 4–5–6 en tríptico y 7 y 8 en fila (7 pequeña, alineadas por abajo). La 6 es la principal y además va en la galería (`06.jpg`, copia de `portada-06.jpg`).
- Papel cebolla: el texto final de *Cartografía* va sobre la última foto (pompas, `09.jpg`) como en el libro, con `vellum` en el front matter; se levanta con una casilla oculta (sin JavaScript). En pantallas anchas la foto va en la mitad derecha y la hoja gira a la izquierda como un pliego; en estrechas se desvanece. El texto se deja en castellano en los tres idiomas, en tres bloques («y volar» desplazado a la derecha, como si hubiera volado) y con la tipografía del libro, MingLiU_HKSCS-ExtB: es de Windows y no se puede alojar, así que fuera de Windows sale la serifa de la web.
- Privacidad: `publishResources = false` en `hugo.toml` para no publicar las fotos originales (con EXIF/GPS); solo se publican las versiones WebP redimensionadas. El repositorio será público, así que las fotos deben subirse ya sin GPS.

## Comandos

- Ver en local: `hugo server` → http://localhost:1313/argazkiak/ (sin `/argazkiak/` da 404)
- Nuevo proyecto: `hugo new content argazkiliburuak/izena/index.eu.md` (o `urtekariak/…` para un anuario) y copiar a `.es.md` / `.en.md`.
- Comprobar el diseño: capturas con Edge headless (`--force-prefers-reduced-motion` para que la animación de la portada no deje la imagen sin pintar en la captura).
