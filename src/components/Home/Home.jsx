import { useEffect, useState } from 'react'
import TypingEffect from 'react-typing-effect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import './Home.css'

const codeLines = [
  { text: "$ whoami", type: 'cmd' },
  { text: "hare-krishn: full-stack developer", type: 'out' },
  { text: "$ cat /projects/status", type: 'cmd' },
  { text: "codesprint.harekrishn.me    [ONLINE]", type: 'ok' },
  { text: "goalstracker.harekrishn.me  [ONLINE]", type: 'ok' },
  { text: "$ ls skills/", type: 'cmd' },
  { text: "react  node  mongo  docker  aws  linux", type: 'out' },
  { text: "$ available_for_internship", type: 'cmd' },
  { text: "→ true", type: 'ret' },
]

function TerminalBlock() {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    let i = 0
    const tick = () => {
      i = (i + 1) % (codeLines.length + 6) // pause a bit at the end before looping
      setShown(Math.min(i, codeLines.length))
      if (i >= codeLines.length + 5) i = 0
    }
    const id = setInterval(tick, 700)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="term">
      <div className="term-bar">
        <span className="dot r"></span>
        <span className="dot y"></span>
        <span className="dot g"></span>
        <span className="term-title">~ /hare-krishn</span>
      </div>
      <div className="term-body">
        {codeLines.slice(0, shown).map((l, i) => (
          <div key={i} className={`term-line ${l.type}`}>
            <span>{l.text}</span>
          </div>
        ))}
        <span className="cursor">▍</span>
      </div>
    </div>
  )
}

function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from('.hero-kicker', { y: 20, opacity: 0, duration: 0.6 })
      .from('.hero-l1', { y: 40, opacity: 0, duration: 0.7 }, '-=0.3')
      .from('.hero-l2', { y: 40, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-l3', { y: 40, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-tag', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-cta > *', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')
      .from('.hero-socials > a', { y: 20, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.3')
      .from('.term', { x: 60, opacity: 0, duration: 0.8 }, '-=0.9')
  })

  return (
    <section id="home" className="home">
      <div className="home-wrap">
        <div className="home-left">
          <div className="hero-kicker">
            <span className="pulse-dot"></span>
            <span>Available for internships · 2027 batch</span>
          </div>

          <h1 className="hero-h1">
            <span className="hero-l1">HELLO, I'M</span>
            <span className="hero-l2">HARE KRISHN</span>
            <span className="hero-l3">
              <TypingEffect
                text={['FULL-STACK DEVELOPER', 'OPEN TO WORK', 'PROBLEM SOLVER']}
                speed={90}
                eraseSpeed={45}
                eraseDelay={1400}
                typingDelay={400}
                cursor="_"
              />
            </span>
          </h1>

          <p className="hero-tag">
            I build full-stack systems <span className="hl">and keep them running in production</span> —
            self-hosted execution engines, live databases, real incidents, real fixes.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See my work</a>
            <a
              href="https://drive.google.com/file/d/1TcgVJn2nyLWJAzzZ79yDAK7ckPM9M2q0/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Resume ↗
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Harekrishn-1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hare-krishn-pachauri-18976a217/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="mailto:harekrishnpachauri@gmail.com" aria-label="Email"><HiMail /></a>
          </div>
        </div>

        <div className="home-right">
          <TerminalBlock />
        </div>
      </div>
    </section>
  )
}

export default Home
