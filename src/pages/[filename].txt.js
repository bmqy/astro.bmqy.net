import { webMasterTxt } from '@/config.json'
export const GET = (params) => {
  const filename = params.params.filename
  const fileContent = webMasterTxt[filename]
  return new Response(fileContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

export function getStaticPaths() {
  const arr = []
  for(const key in webMasterTxt){
    arr.push({
      params: {
        filename: key,
      },
    })
  }
  return arr
}
