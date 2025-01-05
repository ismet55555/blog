import { visit } from 'unist-util-visit'

// Original Code: https://tomoviktor.com/posts/astro-external-anchor/

// The domain parts we want to consider "internal"
const INTERNAL_DOMAINS = ['localhost', 'ismethandzic.com']

export function externalAnchorPlugin() {
  return function (tree, file) {
    visit(tree, 'link', (node) => {
      // If the URL doesn't start with http(s), it's a relative internal link
      if (!node.url.startsWith('http')) {
        return
      }

      try {
        // Parse the URL to get its components
        const url = new URL(node.url)

        // Check if this URL's hostname matches any of our internal domains
        const isInternal = INTERNAL_DOMAINS.some(
          (domain) =>
            url.hostname === domain || url.hostname.endsWith('.' + domain)
        )

        // If it's not internal, add target="_blank"
        if (!isInternal) {
          node.data ??= {}
          node.data.hProperties ??= {}
          node.data.hProperties.target = '_blank'
        }
      } catch (error) {
        // If URL parsing fails, skip this node
        console.warn(`Failed to parse URL: ${node.url}`, error)
      }
    })
  }
}
