/**
 * This configuration file defines the schema for blog posts in our Astro site.
 * It uses Astro's content collections feature to manage and validate blog post frontmatter.
 *
 * Key concepts:
 * - Content Collections: A way to organize and validate content in Astro
 * - Zod: A TypeScript-first schema validation library
 * - Frontmatter: YAML-style metadata at the start of markdown files
 *
 * The schema enforces:
 * - Required fields (title, description, publication date)
 * - Optional fields (draft status, update date, hero image)
 * - Navigation links to next/previous posts
 *
 * Important notes:
 * - Draft posts are handled via a boolean flag with a default of false
 * - Dates are coerced from strings to Date objects automatically
 * - Navigation links (nextPost/previousPost) are optional and include their own draft status
 *
 *   **IMPORTANT**: Changes to this file require reloading server!
 */

import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Configure the content loader to find all .md and .mdx files in src/content/blog
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

  // Define the schema for blog post frontmatter
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Optional fields with defaults
    draft: z.boolean().optional().default(false),

    // Date fields - pubDate is required, updatedDate is optional
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Optional hero image
    heroImage: z.string().optional(),

    // AI Help items
    aiHelp: z.array(z.string()).optional(),

    // Navigation links to other posts
    nextPost: z
      .object({
        slug: z.string(),
        title: z.string(),
        draft: z.boolean().optional().default(false)
      })
      .optional(),
    previousPost: z
      .object({
        slug: z.string(),
        title: z.string(),
        draft: z.boolean().optional().default(false)
      })
      .optional()
  })
})

// Export the collections object for Astro to use
export const collections = { blog }

// Export the Post type for use in TypeScript files
export type Post = CollectionEntry<'posts'>
