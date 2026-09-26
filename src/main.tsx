import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'

function App() {
  const [current, setCurrent] = useState('')

  const navigateTo = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return

    setCurrent(id)
    window.history.replaceState(null, '', `#${id}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <Home current={current} onNavigate={navigateTo} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
