import { restful } from '@/config.json'
import { getSortedPosts } from '@/utils/content'

const posts = await getSortedPosts()
export async function GET({ params }) {
  if (!restful.enable) {
    return new Response('未启用restful api', {
      status: 403,
    })
  }

  const slug = params.slug
  const results = []

  posts.map((item) => {
    if (item.slug === slug) {
      results.push(item)
    }
  })
  return new Response(JSON.stringify(results[0]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
}

export function getStaticPaths() {
  const arr = []
  posts.map((item) => {
    arr.push({
      params: {
        slug: item.slug,
      },
    })
  })
  return arr
}
