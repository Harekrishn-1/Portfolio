import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    n: '01',
    title: 'CodeSprint',
    tag: 'MERN · Docker · AWS',
    desc: 'A coding-judge platform with a self-hosted execution engine and a spaced-repetition Revision Contest built from a user\'s solved history. JWT auth with Redis blocklist, admin bulk-import, AI doubt assistant.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'Docker', 'AWS EC2', 'Nginx', 'Judge0'],
    live: 'https://codesprint.harekrishn.me',
    code: 'https://github.com/Harekrishn-1/CodesprintProject',
    highlights: [
      'Self-hosted Judge0 execution engine',
      'Revision contest via MongoDB aggregation',
      'Live production on 1 GB EC2 instance',
    ],
  },
  {
    n: '02',
    title: 'Goals Tracker',
    tag: 'MERN · Redis',
    desc: 'Daily goal planner with categories, time slots, monthly view, and a guest mode that migrates data to a real account on signup. Admin dashboard with user activity stats.',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS'],
    live: 'https://goalstracker.harekrishn.me',
    code: 'https://github.com/Harekrishn-1/GoalsTracker',
    highlights: [
      'Guest → user data migration',
      'Category, time-slot & progress tracking',
      'Admin dashboard with activity stats',
    ],
  },
]

function Projects() {
  useGSAP(() => {
    gsap.from('.proj-title', {
      y: 40, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: '.proj-title', start: 'top 85%' },
    })
    gsap.from('.proj-heading', {
      y: 40, opacity: 0, duration: 0.8, delay: 0.1,
      scrollTrigger: { trigger: '.proj-heading', start: 'top 85%' },
    })
    gsap.utils.toArray('.proj-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60, opacity: 0, duration: 0.8, delay: i * 0.1,
        scrollTrigger: { trigger: card, start: 'top 85%' },
      })
    })
  })

  // Mouse-follow tilt effect
  const handleMove = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-4px)`
  }
  const handleLeave = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <div className="proj-title section-title">02 // Projects</div>
        <h2 className="proj-heading section-heading">
          Built end to end. <em>Both live.</em>
        </h2>

        <div className="proj-list">
          {projects.map((p) => (
            <article
              key={p.n}
              className="proj-card"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <div className="proj-card-top">
                <span className="proj-num">{p.n}</span>
                <span className="proj-live">
                  <span className="live-dot"></span>
                  LIVE
                </span>
              </div>

              <h3 className="proj-name">{p.title}</h3>
              <div className="proj-tag">{p.tag}</div>
              <p className="proj-desc">{p.desc}</p>

              <ul className="proj-highlights">
                {p.highlights.map((h, i) => (
                  <li key={i}><span className="tick">▸</span> {h}</li>
                ))}
              </ul>

              <div className="proj-stack">
                {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>

              <div className="proj-links">
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="pl-primary">
                  <FiExternalLink /> Visit live
                </a>
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="pl-ghost">
                  <FiGithub /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
