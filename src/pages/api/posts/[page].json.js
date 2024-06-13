import { restful } from '@/config.json'
import { getSortedPosts } from '@/utils/content'

const posts = await getSortedPosts()
export async function GET({ params }) {
  if (!restful.enable) {
    return new Response('未启用restful api', {
      status: 403,
    })
  }

  let page = params.page
  if (!page || page <= 0) {
    page = 1
  }
  const beging = (page - 1) * restful.pagesize
  const end = page * restful.pagesize
  const results = posts.slice(beging, end)
  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
}

export function getStaticPaths() {
  const arr = []
  const pageCount = Math.ceil(posts.length / restful.pagesize)
  for (let i = 0; i < pageCount; i++) {
    arr.push({
      params: {
        page: i + 1,
      },
    })
  }
  return arr
}
