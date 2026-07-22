import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaMedal, FaCode, FaTrophy, FaAward } from 'react-icons/fa'
import './Achievements.css'

const items = [
  {
    icon: <FaMedal />,
    metal: 'gold',
    title: 'Gold Medal — URGA \'25',
    context: 'Inter-NIT Yoga Competition',
    detail: 'National-level yoga competition among NITs.',
  },
  {
    icon: <FaMedal />,
    metal: 'silver',
    title: 'Silver Medal — URGA \'26',
    context: 'Captain, NIT Jamshedpur',
    detail: 'Led the yoga contingent as team captain.',
  },
  {
    icon: <FaMedal />,
    metal: 'silver',
    title: 'Silver Medal — Inter-NIT',
    context: 'NIT Warangal Yoga Tournament',
    detail: 'Represented NIT Jamshedpur at national level.',
  },
  {
    icon: <FaMedal />,
    metal: 'bronze',
    title: 'Bronze Medal — Inter-NIT',
    context: 'NIT Nagpur Yoga Tournament',
    detail: 'Represented NIT Jamshedpur at national level.',
  },
  {
    icon: <FaCode />,
    metal: 'code',
    title: '200+ DSA & SQL Problems',
    context: 'LeetCode · GFG · HackerRank',
    detail: 'Consistent problem-solving across platforms.',
  },
  {
    icon: <FaTrophy />,
    metal: 'code',
    title: 'Two Products Live in Production',
    context: 'CodeSprint & Goals Tracker',
    detail: 'Deployed and self-operated, not just built.',
  },
]

function Achievements() {
  useGSAP(() => {
    gsap.from('.ach-title', {
      y: 40, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: '.ach-title', start: 'top 85%' },
    })
    gsap.from('.ach-heading', {
      y: 40, opacity: 0, duration: 0.8, delay: 0.1,
      scrollTrigger: { trigger: '.ach-heading', start: 'top 85%' },
    })
    gsap.from('.ach-card', {
      y: 50, opacity: 0, duration: 0.7, stagger: 0.1,
      scrollTrigger: { trigger: '.ach-grid', start: 'top 82%' },
    })
  })

  return (
    <section id="achievements" className="ach">
      <div className="wrap">
        <div className="ach-title section-title">03 // Achievements</div>
        <h2 className="ach-heading section-heading">
          Discipline <em>carries over</em>.
        </h2>

        <p className="ach-lead">
          A four-year yoga practice, national-level medals, and a lot of shipped code —
          the two worlds are not as separate as they look.
        </p>

        <div className="ach-grid">
          {items.map((it, i) => (
            <div className={`ach-card ach-${it.metal}`} key={i}>
              <div className="ach-icon">{it.icon}</div>
              <div className="ach-body">
                <h3>{it.title}</h3>
                <div className="ach-ctx">{it.context}</div>
                <p>{it.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
