import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import './Nav.css'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      <a href="#home" className="nav-brand">
        <span className="brace">{'{'}</span>
        <span>hkp</span>
        <span className="brace">{'}'}</span>
      </a>

      <ul className="nav-links">
        {items.map(({ id, label }) => (
          <li key={id}>
            <Link to={id} smooth={true} duration={500} offset={-72} spy={true} activeClass="active">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="menu">
        {open ? <HiX /> : <HiMenu />}
      </button>

      {open && (
        <div className="nav-mobile" onClick={() => setOpen(false)}>
          {items.map(({ id, label }) => (
            <Link key={id} to={id} smooth={true} duration={500} offset={-72}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
