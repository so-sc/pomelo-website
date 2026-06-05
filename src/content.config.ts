import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
