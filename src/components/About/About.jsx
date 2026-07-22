import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux } from 'react-icons/fa'
import { SiMongodb, SiRedis, SiExpress, SiNginx, SiJavascript, SiCplusplus } from 'react-icons/si'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    title: 'Frontend',
    items: [
      { icon: <FaReact />, label: 'React' },
      { icon: <SiJavascript />, label: 'JavaScript' },
      { icon: <SiExpress />, label: 'Redux' },
    ],
    accent: 'React, Redux Toolkit, Tailwind CSS',
  },
  {
    title: 'Backend',
    items: [
      { icon: <FaNodeJs />, label: 'Node.js' },
      { icon: <SiExpress />, label: 'Express' },
      { icon: <SiCplusplus />, label: 'C++' },
    ],
    accent: 'Node.js, Express, JWT, REST APIs',
  },
  {
    title: 'Data',
    items: [
      { icon: <SiMongodb />, label: 'MongoDB' },
      { icon: <SiRedis />, label: 'Redis' },
    ],
    accent: 'MongoDB (aggregation, indexing), Redis',
  },
  {
    title: 'Ship & Run',
    items: [
      { icon: <FaDocker />, label: 'Docker' },
      { icon: <FaAws />, label: 'AWS' },
      { icon: <FaLinux />, label: 'Linux' },
      { icon: <SiNginx />, label: 'Nginx' },
      { icon: <FaGitAlt />, label: 'Git' },
    ],
    accent: 'Docker, AWS EC2, Nginx, PM2, Linux',
  },
]

function About() {
  useGSAP(() => {
    gsap.from('.about-title', {
      y: 40, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: '.about-title', start: 'top 85%' },
    })
    gsap.from('.about-heading', {
      y: 40, opacity: 0, duration: 0.8, delay: 0.1,
      scrollTrigger: { trigger: '.about-heading', start: 'top 85%' },
    })
    gsap.from('.about-bio > *', {
      y: 30, opacity: 0, duration: 0.6, stagger: 0.15,
      scrollTrigger: { trigger: '.about-bio', start: 'top 80%' },
    })
    gsap.from('.skill-card', {
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1,
      scrollTrigger: { trigger: '.skill-grid', start: 'top 80%' },
    })
  })

  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="about-title section-title">01 // About</div>
        <h2 className="about-heading section-heading">
          I'm a builder who <em>also runs</em> the thing.
        </h2>

        <div className="about-layout">
          <div className="about-bio">
            <p>
              Master of Computer Applications student at <strong>NIT Jamshedpur</strong>,
              CGPA 8.23, graduating 2027.
            </p>
            <p>
              I've shipped two full-stack products to production and I own the ops —
              self-hosted Docker on EC2, Nginx reverse proxies, PM2, live disk resizes,
              secret rotations, 502/504 debugging.
            </p>
            <p>
              I care about <span className="hl">shipping well</span> and being the
              person who reads the log at 2 AM and finds the actual cause, not the
              first symptom.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-num">2</div>
                <div className="stat-lbl">Live products</div>
              </div>
              <div className="stat">
                <div className="stat-num">200+</div>
                <div className="stat-lbl">DSA solved</div>
              </div>
              <div className="stat">
                <div className="stat-num">8.23</div>
                <div className="stat-lbl">MCA CGPA</div>
              </div>
            </div>
          </div>

          <div className="skill-grid">
            {categories.map((cat) => (
              <div className="skill-card" key={cat.title}>
                <div className="skill-header">
                  <span className="skill-num">
                    {'0' + (categories.indexOf(cat) + 1)}
                  </span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-icons">
                  {cat.items.map((it, i) => (
                    <span key={i} className="skill-icon" title={it.label}>
                      {it.icon}
                    </span>
                  ))}
                </div>
                <p className="skill-desc">{cat.accent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
