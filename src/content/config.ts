import { defineCollection, z } from 'astro:content';

// Single questions pool. 100 questions across 10 categories.
// The site loads this JSON and randomly picks 20 questions per session.
const games = defineCollection({
  type: 'data',
  schema: z.object({
    version: z.number(),
    generated_at: z.string(),
    categories: z.array(z.object({
      id: z.string(),
      name: z.string(),
      questions: z.array(z.object({
        id: z.string(),
        a: z.string(),
        a_emoji: z.string(),
        b: z.string(),
        b_emoji: z.string(),
      })),
    })),
  }),
});

export const collections = { games };
