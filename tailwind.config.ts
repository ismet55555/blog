import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Ensure these dynamic classes are always included
    'prose-headings:text-techAccent',
    'prose-headings:text-nonTechAccent',
    'text-techAccent',
    'text-nonTechAccent',
    'border-techAccent',
    'border-nonTechAccent',
    'bg-techAccent',
    'bg-nonTechAccent',
    'hover:bg-green-100',
    'hover:bg-orange-100'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inconsolata', ...defaultTheme.fontFamily.sans]
        // sans: ['Source Code Pro', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        lightModeBg: '#DCDCDC',
        darkModeBg: '#282828',
        accentColor: '#60a938',
        techAccent: '#60a938', // Tech accent
        nonTechAccent: '#e67e22', // Non-Tech accent
        lightModeText: 'black',
        darkModeText: 'white'
      },
      screens: {
        w500: { max: '500px' },
        w400: { max: '400px' }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => ({
        lightMode: {
          css: {
            '--tw-prose-kbd': theme('colors.lightModeText'),
            '--tw-prose-quote-borders': theme('colors.lightModeText'),
            '--tw-prose-bullets': theme('colors.lightModeText'),
            '--tw-prose-code': theme('colors.lightModeText')
          }
        },
        darkMode: {
          css: {
            '--tw-prose-kbd': theme('colors.darkModeText'),
            '--tw-prose-quote-borders': theme('colors.darkModeText'),
            '--tw-prose-bullets': theme('colors.darkModeText'),
            '--tw-prose-code': theme('colors.darkModeText')
          }
        }
      })
    }
  },
  darkMode: 'class',
  plugins: [typography, scrollbar]
} satisfies Config
