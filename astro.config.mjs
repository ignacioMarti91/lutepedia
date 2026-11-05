import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ignaciomarti91.github.io",
  base: "/lutepedia",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  build: {
    format: "file",
  },
});
