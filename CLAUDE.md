# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal technical blog built with Astro, using a content collections approach for blog posts. The blog is deployed to GitHub Pages at `https://ismet55555.github.io/blog`.

## Commands

### Development
```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```sh
npx eslint .                    # Run ESLint
npx prettier --write .          # Format code with Prettier
npx astro check                 # Type-check Astro files
```

## Architecture

### Content Collections

Blog posts are managed through Astro's content collections system:
- **Location**: `src/content/blog/` - All `.md` and `.mdx` files
- **Schema**: Defined in `src/content.config.ts`
- **Required frontmatter**: `title`, `description`, `pubDate`
- **Optional frontmatter**: `draft`, `tech`, `updatedDate`, `heroImage`, `aiHelp`, `nextPost`, `previousPost`
- **Important**: Changes to `src/content.config.ts` require server reload

### Remark Plugins (Markdown Processing)

The blog uses custom remark plugins that process both `.md` and `.mdx` files:

1. **remarkReadingTime** (`src/plugins/remarkReadingTime.mjs`)
   - Calculates reading time and injects it into frontmatter as `minutesRead`
   - Used in `BlogPost` layout to display reading time

2. **externalAnchorPlugin** (`src/plugins/externalAnchorPlugin.ts`)
   - Automatically adds `target="_blank"` to external links
   - Internal domains: `localhost`, `ismethandzic.com`

3. **remarkToc** - Generates table of contents with max depth 3
4. **remarkEmoji** - Converts emoji shortcodes to Unicode

These plugins are configured in both `astro.config.mjs` (for MDX integration) and `markdown` config (for standard Markdown) to ensure consistent processing.

### Directory Structure

```
src/
├── components/       # Astro and React components
├── content/
│   └── blog/        # Blog post .md/.mdx files
├── layouts/
│   ├── Base.astro       # Base layout with head/meta tags
│   └── BlogPost.astro   # Blog post layout
├── pages/
│   ├── [...slug].astro  # Dynamic blog post pages
│   ├── blog/index.astro # Blog listing page
│   ├── index.astro      # Home page
│   ├── rss.xml.js       # RSS feed
│   └── feed.json.js     # JSON feed
├── plugins/         # Custom remark plugins
├── styles/          # Global CSS
├── config.ts        # Site configuration
└── consts.ts        # Global constants
```

### Routing

- **Blog posts**: `/blog/[slug]` - Generated from `src/pages/[...slug].astro` using `getStaticPaths()`
- **Blog index**: `/blog` - Lists all non-draft posts
- **Home**: `/` - Landing page

### Theming

- **Dark mode**: Controlled via Tailwind's `class` strategy
- **Code blocks**: Use Expressive Code with `github-dark` and `github-light` themes
- **Accent colors**:
  - Tech posts: `#60a938` (green)
  - Non-tech posts: `#e67e22` (orange)
- **Typography**: Uses `@tailwindcss/typography` with custom color overrides in `tailwind.config.ts`

### Path Aliases

The project uses `@/*` path alias (defined in `tsconfig.json`):
```ts
import Component from '@/components/Component.astro'
```

### Styling

- **Framework**: Tailwind CSS
- **Font**: Inconsolata (from Fontsource)
- **Config**: `tailwind.config.ts` includes safelist for dynamic accent classes
- **Custom plugins**: Uses `tailwind-scrollbar` for custom scrollbar styling

### Code Quality

- **ESLint**: Configured with TypeScript, Prettier, and Astro-specific rules
- **Prettier**: Configured with plugins for Astro and Tailwind class sorting
  - No semicolons, single quotes, 80 char width, 2 space tabs
- **TypeScript**: Extends `astro/tsconfigs/strictest`

## Important Notes

- Blog posts support both Markdown (`.md`) and MDX (`.mdx`) formats
- Draft posts (`draft: true`) are excluded from production builds but visible in development
- The `tech` field determines accent color (green for tech, orange for non-tech)
- Navigation between posts is handled via `nextPost`/`previousPost` frontmatter fields
- All external links automatically open in new tabs via the `externalAnchorPlugin`
