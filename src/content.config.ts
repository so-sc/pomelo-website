import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    sectionOrder: z.number(),
    order: z.number(),
  }),
});

export const collections = {
  'docs': docsCollection,
};
