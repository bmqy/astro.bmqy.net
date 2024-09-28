import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { site } from '@/config.json'
import { getSortedPosts } from '@/utils/content'

export async function GET(context: APIContext) {
  const sortedPosts = await getSortedPosts()

  return rss({
    title: site.title,
    description: `${site.description}feedId:62750960937144320+userId:55185767702298624`,
    site: context.site!,
    items: sortedPosts.map((post) => ({
      link: `/${post.data.abbrlink}.html`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
    })),
    customData: `<language>${site.lang}</language>`,
  })
}
