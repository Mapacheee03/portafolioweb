import { useEffect, useState } from 'react'
import Home from './pages/Home'

type View = 'home' | 'projects' | 'about' | 'contact'

function App() {
  const [, setActive] = useState<View>('home')

  const onNavigate = (v: View) => {
    const el = document.getElementById(v)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const ids: View[] = ['home', 'projects', 'about', 'contact']
    const scroller = document.querySelector('.scroller')
    if (!scroller) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null
        for (const e of entries) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e
        }
        if (best && best.isIntersecting) {
          const id = best.target.id as View
          if (ids.includes(id)) setActive(id)
        }
      },
      { root: scroller, threshold: [0.45, 0.6] },
    )

    const elms = ids.map((id) => scroller.querySelector(`#${id}`)).filter(Boolean) as Element[]
    elms.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Home onNavigate={onNavigate} />
    </div>
  )
}

export default App
