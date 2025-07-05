import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
  // Filter out draft posts
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  )

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,

    // Add feed-level metadata
    managingEditor: 'ismet.handzic@gmail.com (Ismet Handzic)',
    webMaster: 'ismet.handzic@gmail.com (Ismet Handzic)',
    language: 'en-us',
    ttl: 60, // Cache for 60 minutes

    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      guid: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: `ismet.handzic@gmail.com (${post.data.author || 'Ismet Handzic'})`
    })),

    // Enhanced XML namespaces
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      content: 'http://purl.org/rss/1.0/modules/content/',
      dc: 'http://purl.org/dc/elements/1.1/',
      sy: 'http://purl.org/rss/1.0/modules/syndication/'
    },

    // Self-referencing atom:link and syndication info
    customData: `
      <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />
      <sy:updatePeriod>daily</sy:updatePeriod>
      <sy:updateFrequency>1</sy:updateFrequency>
    `.trim()
  })
}
