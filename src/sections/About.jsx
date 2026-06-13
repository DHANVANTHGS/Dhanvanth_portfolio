import { useRef, useEffect } from 'react'
import aboutImg from '../assets/image2.png'
import './About.css'

const skills = [
  {
    label: 'Cyber Security',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: 'card--blue',
  },
  {
    label: 'Backend Developer',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: 'card--purple',
  },
  {
    label: 'Networking',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
        <line x1="12" y1="8" x2="5" y2="16" /><line x1="12" y1="8" x2="19" y2="16" />
      </svg>
    ),
    color: 'card--green',
  },
  {
    label: 'AI Engineering',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: 'card--teal',
  },
  {
    label: 'DevOps',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6" />
        <path d="M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
      </svg>
    ),
    color: 'card--cyan',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  // Intersection observer for staggered reveal
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const items = section.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    items.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__inner">

        {/* ── Left: Text Content ── */}
        <div className="about__left">

          <h2 className="about__heading reveal">Who am I?</h2>

          <p className="about__bio reveal delay-1">
            I'm <strong>Dhanvanth G S</strong>, a Computer Science (Cybersecurity) undergraduate at{' '}
            <strong>Chennai Institute of Technology</strong> passionate about Cybersecurity, Networking,
            Network Security, Backend Development, AI, and DevOps.
          </p>
          <p className="about__bio reveal delay-2">
            Through Freelancing, hackathons, CTF competitions, and hands-on projects, I enjoy solving
            real-world challenges and building secure, scalable, and impactful technology solutions.
          </p>

          <h3 className="about__works-title reveal delay-2">Works On :</h3>

          <div className="about__cards reveal delay-3">
            {skills.map((skill) => (
              <div key={skill.label} className={`about__card ${skill.color}`}>
                <span className="about__card-icon">{skill.icon}</span>
                <span className="about__card-label">{skill.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── Right: Image ── */}
        <div className="about__img-wrap reveal delay-1">
          <img src={aboutImg} alt="Dhanvanth G S — thoughtful" className="about__img" />
        </div>

      </div>
    </section>
  )
}
