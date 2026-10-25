---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
location: ""
# Foto de portada (si no se indica, se usa la primera por orden de nombre):
cover: ""
# Pies de foto opcionales:
# resources:
#   - src: 01.jpg
#     title: "Pie de foto"
---
Texto del proyecto en Markdown.
