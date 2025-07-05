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

  const jsonFeed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE_TITLE,
    home_page_url: context.site,
    feed_url: `${context.site}feed.json`,
    description: SITE_DESCRIPTION,
    language: 'en-us',

    // Feed-level metadata
    authors: [
      {
        name: 'Ismet Handzic',
        email: 'ismet.handzic@gmail.com'
      }
    ],

    items: sortedPosts.map((post) => ({
      id: `${context.site}blog/${post.slug}/`,
      url: `${context.site}blog/${post.slug}/`,
      title: post.data.title,
      content_text: post.data.description, // Plain text description
      summary: post.data.description,
      date_published: post.data.pubDate.toISOString(),

      // Author info
      authors: [
        {
          name: post.data.author || 'Ismet Handzic',
          email: 'ismet.handzic@gmail.com'
        }
      ],

      // Tags
      tags: post.data.tags || [],

      // Optional: Series information if you want to include it
      ...(post.data.series && {
        _series: {
          name: post.data.series.name,
          order: post.data.series.order
        }
      })
    }))
  }

  return new Response(JSON.stringify(jsonFeed, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  })
}
