import { restful } from '@/config.json'
import { getSortedPosts } from '@/utils/content'

export async function GET({ request }) {
  if (!restful.enable) {
    return new Response('未启用restful api', {
      status: 403,
    })
  }

  const posts = await getSortedPosts()
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
}
