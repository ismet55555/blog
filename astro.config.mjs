import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import remarkToc from 'remark-toc'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/plugins/remarkReadingTime.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black'
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080'
      }
    }),
    mdx(),
    react(),
    icon(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: 'Table of Contents',
          tight: true,
          maxDepth: 3
        }
      ],
      remarkReadingTime
    ]
  },

  // site: 'https://astro-minimal.netlify.app/'
  site: 'https://ismet55555.github.io',
  base: '/techblog'
})
