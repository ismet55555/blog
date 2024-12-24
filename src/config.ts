import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Ismet Handzic',
  title: 'Tech Blog',
  description: 'A tech blog of random technical posts',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light'
  }
} satisfies Config
