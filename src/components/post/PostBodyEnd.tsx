import { webAD } from '@/config.json'
export function BaiduAd() {
  return (
    <>
      <div className={webAD.postBodyEnd.baidu.container}></div>
      <script dangerouslySetInnerHTML={{
        __html: `(window.slotbydup = window.slotbydup || []).push({
              id: "${webAD.postBodyEnd.baidu.id}",
              container: "${webAD.postBodyEnd.baidu.container}",
              async: true
          });`
      }}></script>
    </>
  )
}

export function GoogleAd() {
  return (
    <>
      <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${webAD.postBodyEnd.google.client}`} crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
          style={{display:'block'}}
          data-ad-client={webAD.postBodyEnd.google.client}
          data-ad-slot={webAD.postBodyEnd.google.slot}
          data-ad-format="auto"
          data-full-width-responsive="true" />
      <script dangerouslySetInnerHTML={{
        __html: `(adsbygoogle = window.adsbygoogle || []).push({});`
      }}></script>
    </>
  )
}
