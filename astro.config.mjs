/**
 * Astro Configuration File
 *
 * This file configures the build and development settings for the Astro-based blog.
 * It integrates various plugins and tools to enhance the blog's functionality.
 *
 * Key Features:
 * 1. Styling and UI:
 *    - Tailwind CSS for utility-first styling
 *    - Expressive Code for beautiful code blocks with themes
 *    - Icon support for vector icons
 *
 * 2. Content Processing:
 *    - MDX support for enhanced Markdown with components
 *    - Table of Contents generation (remarkToc)
 *    - Reading time estimation (remarkReadingTime)
 *    - External link handling (externalAnchorPlugin)
 *
 * 3. Performance and SEO:
 *    - Partytown for third-party script optimization
 *    - Sitemap generation for better SEO
 *
 * 4. Development:
 *    - TypeScript checking enabled
 *    - React integration for component development
 *
 * Deployment Configuration:
 * - Site URL: https://ismet55555.github.io
 * - Base Path: /blog
 *
 * Note: The configuration uses separate remark plugins for both MDX and regular
 * Markdown files to ensure consistent processing across all content types.
 */

// @ts-check
import astroExpressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import remarkEmoji from 'remark-emoji'
import remarkToc from 'remark-toc'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { externalAnchorPlugin } from './src/plugins/externalAnchorPlugin.ts'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { remarkReadingTime } from './src/plugins/remarkReadingTime.mjs'

// Configuration object for remark Table of Contents
const tocConfig = {
  heading: 'Table of Contents',
  tight: true,
  maxDepth: 3
}

export default defineConfig({
  integrations: [
    // Styling and UI integrations
    tailwind(),

    // Expressive Code Blocks
    astroExpressiveCode({
      themes: ['github-dark', 'github-light'],
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      defaultProps: {
        // Line Numbers: https://expressive-code.com/plugins/line-numbers/
        showLineNumbers: false,
        overridesByLang: {
          // To enable line numbers for specific languages:
          // 'rust,cpp': { showLineNumbers: true }
        },
        // Collapse: https://expressive-code.com/plugins/collapsible-sections/
        collapseStyle: 'github',
        closedTextColor: 'var(--accent-color)'
      },
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black'
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080',
        collapsibleSections: {
          closedTextColor: '#519639' // Bright blue
        }
      }
    }),

    // MDX configuration with remark plugins
    mdx({
      remarkPlugins: [
        [remarkToc, tocConfig],
        externalAnchorPlugin,
        remarkReadingTime,
        remarkEmoji
      ],
      rehypePlugins: [rehypeAccessibleEmojis]
    }),

    // Additional functionality integrations
    react(),
    icon(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],

  // Standard Markdown processing configuration
  markdown: {
    remarkPlugins: [
      [remarkToc, tocConfig],
      remarkReadingTime,
      externalAnchorPlugin,
      remarkEmoji
    ],
    rehypePlugins: [rehypeAccessibleEmojis]
  },

  // Deployment configuration
  site: 'https://ismet55555.github.io',
  base: '/blog'
})
