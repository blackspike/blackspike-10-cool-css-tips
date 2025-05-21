import { z, defineCollection } from 'astro:content'
export const collections = {
  slides: defineCollection({
    schema: z.object({
      title: z.string(),
      image: z.string().optional(),
      description: z.string().optional(),
      order: z.number(),
    }),
  }),
}
