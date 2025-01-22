// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
    type: 'content', 
    schema: z.object({
      title: z.string(),
      date: z.string(),
    }),
});

export const collections = {
  'news': newsCollection,
};