# Lutepedia

Sitio estático hecho con Astro. Las páginas se generan como HTML para GitHub Pages; el contenido editorial vive en `src/content/` en archivos Markdown validados por esquema.

## Desarrollo local

Requiere Node.js 24.

```sh
npm ci
npm run dev
```

Antes de publicar:

```sh
npm run check
npm run build
```

La salida estática se genera en `dist/`. Consulta [CONTENT.md](./CONTENT.md) para agregar crónicas, relatos, fichas de clase y casos de producción.

## GitHub Pages

El workflow de GitHub Actions valida y construye el sitio y publica `dist/`. El proyecto se sirve bajo `/lutepedia`; al conectar un dominio propio, ajusta `site` y `base` en `astro.config.mjs` y el enlace del sitemap.
