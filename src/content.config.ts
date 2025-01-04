import { z, defineCollection, type CollectionEntry } from 'astro:content'
import { glob } from 'astro/loaders'

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  // loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
    nextPost: z
      .object({
        slug: z.string(),
        title: z.string()
      })
      .optional(),
    previousPost: z
      .object({
        slug: z.string(),
        title: z.string()
      })
      .optional()
  })
})

export const collections = {
  blog: blogCollection
}

export type Post = CollectionEntry<'posts'>
