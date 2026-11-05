import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postFields = {
  title: z.string().min(1),
  description: z.string().min(1),
  pubDate: z.coerce.date(),
  author: z.string().default("Lucía Tedesco"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(true),
  license: z.string().default("Por definir"),
  cover: z
    .object({
      src: z.string(),
      alt: z.string().min(1),
    })
    .optional(),
  youtubeId: z.string().optional(),
  related: z.array(z.string()).default([]),
};

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    ...postFields,
    kind: z.enum(["cronica", "radar", "relato"]),
  }),
});

const classes = defineCollection({
  loader: glob({ base: "./src/content/classes", pattern: "**/*.md" }),
  schema: z.object({
    ...postFields,
    thinker: z.string().min(1),
    centralIdea: z.string().min(1),
    whyToday: z.string().min(1),
    classExcerpt: z.string().min(1),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date().optional(),
    kind: z.enum(["negocios", "digital", "audiovisual"]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    client: z.string().optional(),
    challenge: z.string().optional(),
    approach: z.string().optional(),
    results: z.string().optional(),
    cover: z
      .object({
        src: z.string(),
        alt: z.string().min(1),
      })
      .optional(),
  }),
});

export const collections = { posts, classes, projects };
