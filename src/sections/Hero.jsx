import { useEffect, useRef } from 'react'
import profileImg from '../assets/image1.png'
import './Hero.css'

const roles = [
  'Cybersecurity Enthusiast',
  'Backend Developer',
  'AI Engineer',
  'Freelancer',
]

const cvUrl = import.meta.env.VITE_CV

export default function Hero() {
  const sectionRef = useRef(null)

  // Scroll to #about section on Explore click
  const handleExplore = () => {
    const about = document.getElementById('about')
    if (about) about.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={sectionRef}>

      {/* ── CV Button ── */}
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cv-btn"
        aria-label="Download CV"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="8 17 12 21 16 17" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
        </svg>
        CV
      </a>

      {/* ── Left: Profile Image ── */}
      <div className="hero__img-wrap">
        <img src={profileImg} alt="Dhanvanth G S" className="hero__img" />
      </div>

      {/* ── Right: Text Content ── */}
      <div className="hero__content">
        <h1 className="hero__name">Dhanvanth G S</h1>

        <div className="hero__roles">
          {roles.map((role) => (
            <span key={role} className="hero__role">{role}</span>
          ))}
        </div>

        <button className="hero__explore" onClick={handleExplore}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Explore
        </button>
      </div>

    </section>
  )
}
