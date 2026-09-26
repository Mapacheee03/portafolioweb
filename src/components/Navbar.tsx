import './Navbar.css'
import { PROFILE } from '../data/profile'

interface NavbarProps {
  current: string
  onNavigate: (id: string) => void
}

export default function Navbar({ current, onNavigate }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">{PROFILE.name.split(' ')[0]}</div>

        <nav>
          <ul className="nav-inline">
            {PROFILE.navigation.map((item) => {
              const id = item.href.replace('#', '')
              const active = current === id

              return (
                <li key={item.href}>
                  <button
                    className={`nav-btn ${active ? 'active' : ''}`}
                    onClick={() => onNavigate(id)}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
