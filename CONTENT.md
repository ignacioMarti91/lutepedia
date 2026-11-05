# Cómo agregar contenido

El sitio se genera con Astro. Las páginas publicadas son HTML estático; las notas se escriben en Markdown y no requieren una base de datos.

## Crear una crónica, un Radar o un relato

1. Copiá `src/content/posts/plantilla-cronica.md` o `plantilla-relato.md` y guardalo con un nombre corto en `src/content/posts/`.
2. Completá el frontmatter (el bloque entre `---`): título, bajada, tipo, fecha real de publicación, etiquetas, autoría y licencia acordada.
3. Escribí el cuerpo en Markdown. Para imágenes, guardá un archivo autorizado en `public/images/` y agrega `cover` con una descripción alternativa.
4. Mientras se revisa, dejá `draft: true`. Para publicarla, cambiá a `draft: false`.

Los tipos permitidos son `cronica`, `radar` y `relato`. Las notas aparecen automáticamente en su listado, portada si están destacadas, etiquetas y página individual.

## Crear una ficha de clase

Copiá `src/content/classes/plantilla-ficha.md` con un nombre corto. Completá también `thinker`, `centralIdea`, `whyToday` y `classExcerpt`; son campos obligatorios para que todas las fichas tengan la estructura definida en el brief.

## Agregar un caso de producción

Copiá `src/content/projects/plantilla-caso.md` con un nombre corto. El tipo debe ser `negocios`, `digital` o `audiovisual`. Dejá `draft: true` hasta verificar permisos del cliente y los resultados que se publicarán.

## Revisar y publicar

- Ejecutá `npm run check` para validar los campos y las plantillas.
- Ejecutá `npm run dev` para previsualizar y `npm run build` para generar el sitio en `dist/`.
- Los borradores no se publican. El workflow de GitHub Pages compila y publica el contenido al hacer push a `main`.

El `pubDate` de las plantillas es solo un ejemplo: reemplazalo por la fecha real antes de publicar.
