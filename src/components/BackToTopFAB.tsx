import { hero } from '@/config.json'
import { useAtomValue } from 'jotai'
import { pageScrollLocationAtom } from '@/store/scrollInfo'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

export function BackToTopFAB() {
  const scrollY = useAtomValue(pageScrollLocationAtom)
  const isShow = scrollY > 100

  return (
    <div className="fixed right-4 bottom-6 z-10">
      {isShow && <ContactButton />}
      <AnimatePresence>{isShow && <BackToTop />}</AnimatePresence>
    </div>
  )
}

function BackToTop() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.button
      className="size-10 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur"
      type="button"
      aria-label="Back to top"
      onClick={handleBackToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <i className="iconfont icon-rocket"></i>
    </motion.button>
  )
}


function ContactButton() {
  const socials = hero.socials
  return (
    <div className="flex flex-col gap-4 mb-4">
        {socials.map((item)=>(
          <motion.button
            type="button"
            key={item.name}
            aria-label={`Contact my ${item.name}`}
            title={`联系${item.name}`}
            className="size-10 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur"
            onClick={() => window.open(`${item.url}`)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <i className={clsx('iconfont', item.icon)} style={{color: item.color}}></i>
          </motion.button>
        ))}
    </div>
  )
}
