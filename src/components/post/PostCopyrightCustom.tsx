import { site } from '@/config.json'
function getPostUrl(slug: string) {
  return new URL(slug, site.url).href
}

export function PostCopyrightCustom({
  title,
  slug,
}: {
  title: string
  slug: string
}) {
  const url = getPostUrl(slug)

  return (
    <section className="bmqy_copyright mb-4 flex justify-center text-sm text-blue-500 p-4 rounded-lg bg-red-300/10 border border-red-300">
      <p>注：原创文章，转载请注明出自 <a href={ url } title={ title }> ⟪{ `${site.title} - ${title}` }⟫</a> ，Thank you！</p>
    </section>
  )
}
