import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiMail, HiArrowRight } from 'react-icons/hi'
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si'
import './Contact.css'

function Contact() {
  useGSAP(() => {
    gsap.from('.ct-title', {
      y: 40, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: '.ct-title', start: 'top 85%' },
    })
    gsap.from('.ct-heading', {
      y: 40, opacity: 0, duration: 0.8, delay: 0.1,
      scrollTrigger: { trigger: '.ct-heading', start: 'top 85%' },
    })
    gsap.from('.ct-mail, .ct-socials, .ct-note', {
      y: 30, opacity: 0, duration: 0.6, stagger: 0.12,
      scrollTrigger: { trigger: '.ct-mail', start: 'top 85%' },
    })
  })

  return (
    <section id="contact" className="ct">
      <div className="wrap">
        <div className="ct-title section-title">04 // Contact</div>
        <h2 className="ct-heading section-heading">
          Let's build <em>something</em>.
        </h2>

        <a href="mailto:harekrishnpachauri@gmail.com" className="ct-mail">
          <span>harekrishnpachauri@gmail.com</span>
          <HiArrowRight />
        </a>

        <div className="ct-socials">
          <a href="https://github.com/Harekrishn-1" target="_blank" rel="noopener noreferrer">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/hare-krishn-pachauri-18976a217/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href="https://leetcode.com/u/pachauriharekrishn123/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode /> <span>LeetCode</span>
          </a>
          <a href="https://www.geeksforgeeks.org/user/harekrishnkip3/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks /> <span>GFG</span>
          </a>
          <a href="https://www.hackerrank.com/profile/harekrishnpacha1" target="_blank" rel="noopener noreferrer">
            <SiHackerrank /> <span>HackerRank</span>
          </a>
          <a href="tel:+919389936139">
            <HiMail /> <span>+91 93899 36139</span>
          </a>
        </div>

        <div className="ct-note">
          <p>Currently pursuing MCA at NIT Jamshedpur · Available from 2027</p>
        </div>

        <footer className="ct-footer">
          <span>© 2026 Hare Krishn Pachauri</span>
          <span>Built with React · GSAP · A lot of coffee</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact
