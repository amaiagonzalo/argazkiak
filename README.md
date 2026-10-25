# Argazkiak

Web de mis proyectos de fotografía, hecha con [Hugo](https://gohugo.io/) y Markdown. En euskera (idioma principal), castellano e inglés.

## Ver la web en local

```
hugo server
```

Abre http://localhost:1313. Los cambios se ven al momento.

## Añadir un proyecto

Cada proyecto es una carpeta en `content/proiektuak/` con sus fotos y un texto por idioma:

```
content/proiektuak/itsasoa/
├── index.eu.md    ← texto en euskera
├── index.es.md    ← texto en castellano
├── index.en.md    ← texto en inglés
├── 01.jpg         ← las fotos, en el orden de su nombre
├── 02.jpg
└── ...
```

1. Crea el texto en euskera con la plantilla:
   ```
   hugo new content proiektuak/izena/index.eu.md
   ```
2. Copia `index.eu.md` como `index.es.md` e `index.en.md` y tradúcelos. Si falta un idioma, el proyecto no aparece en ese idioma.
3. Copia las fotos en la carpeta, con nombres que marquen el orden (`01.jpg`, `02.jpg`…).

El nombre de la carpeta es la dirección del proyecto: `/proiektuak/izena/`, `/es/proyectos/izena/` y `/en/projects/izena/`.

En el front matter de cada `index.*.md`:

| Campo | Para qué |
| --- | --- |
| `title` | Nombre del proyecto en ese idioma |
| `date` | Fecha (ordena los proyectos, el más reciente primero) |
| `location` | Lugar, opcional |
| `publisher` | Editorial, opcional (sale junto a «Fotolibro» y el año) |
| `buy` | Enlace para comprar el libro, opcional (añade un botón) |
| `cover` | Foto de portada; si no se indica, la primera |
| `resources` | Pies de foto opcionales, en ese idioma |

## Las fotos

- Expórtalas a unos 2.500 px por el lado largo. Hugo genera solo los tamaños más pequeños para la web.
- **Quítales la ubicación GPS al exportar.** La web no publica los originales, pero el repositorio de GitHub es público y cualquiera puede descargarlos de ahí.

## Publicar

Cada vez que subes cambios a la rama `main` de GitHub, la web se publica sola en GitHub Pages (`.github/workflows/hugo.yml`).

```
git add -A
git commit -m "Nuevo proyecto: izena"
git push
```

## Estructura

- `hugo.toml`: título, idiomas y menús.
- `layouts/`: las plantillas HTML (`home.html`, `section.html`, `page.html` y `_partials/`).
- `assets/css/main.css`: el diseño. `assets/js/main.js`: el visor de fotos a pantalla completa y la aparición suave al hacer scroll.
- `static/fonts/`: la tipografía Cormorant Garamond (licencia SIL Open Font License).
- `i18n/`: los textos fijos de la web en cada idioma.
