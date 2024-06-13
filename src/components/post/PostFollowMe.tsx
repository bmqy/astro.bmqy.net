import { followMe } from '@/config.json'
export function PostFollowMe() {
  return (
    <section className="bmqy_follow_me py-4 mb-4 border-y-2 border-dotted">
      <div className="pb-4 text-gray-300 flex justify-center">欢迎关注我的其它发布渠道</div>
      <div className="flex flex-wrap gap-4 justify-center">
        {followMe.map((item) => (
          <img
            className="object-cover"
            width={120}
            height={120}
            key={item.name}
            src={item.icon}
            alt={item.name}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </section>
  )
}
