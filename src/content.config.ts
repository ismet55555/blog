import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional().default(false),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    nextPost: z
      .object({
        slug: z.string(),
        title: z.string(),
        draft?: boolean
      })
      .optional(),
    previousPost: z
      .object({
        slug: z.string(),
        title: z.string(),
        draft?: boolean
      })
      })
      .optional()
  })
})

export const collections = { blog }

export type Post = CollectionEntry<'posts'>
