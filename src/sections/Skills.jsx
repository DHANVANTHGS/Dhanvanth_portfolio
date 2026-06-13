import { useEffect, useRef } from 'react'
import skillsImg   from '../assets/image3.png'
import skillsText  from '../assets/skills-text.png'
import platformImg from '../assets/rectangle6.png'
import './Skills.css'

/* ── Icon imports ── */
import pythonIcon    from '../assets/material-icon-theme_python.png'
import tsIcon        from '../assets/fluent_document-ts-16-filled.png'
import jsIcon        from '../assets/picon_js.png'
import gitIcon       from '../assets/logos_git.png'
import mongoIcon     from '../assets/logos_mongodb.png'
import cppIcon       from '../assets/vscode-icons_file-type-cpp3.png'
import wazuhIcon     from '../assets/ChatGPT Image Jun 7, 2026, 07_43_55 PM 1.png'
import networkIcon   from '../assets/carbon_network-4.png'
import hydraIcon     from '../assets/game-icons_hydra.png'
import nmapIcon      from '../assets/file-icons_nmap.png'
import ghidraIcon    from '../assets/devicon_ghidra.png'
import linuxIcon     from '../assets/devicon_linux.png'

/* ── Skill data matching screenshot layout ──
   noLabel: true  → icon already contains the wordmark, skip the <span>
   big: true       → uses larger icon size class
── */
const leftSkills = [
  { name: 'Python',      icon: pythonIcon,  offset: 30 },
  { name: 'Node.js',     icon: 'https://cdn.simpleicons.org/nodedotjs/339933', offset: -10 },
  { name: 'TypeScript',  icon: tsIcon,      offset: -60 },
  { name: 'C++',         icon: cppIcon,     offset: -110 },
  { name: 'JavaScript',  icon: jsIcon,      offset: -60 },
  { name: 'git',         icon: gitIcon,     offset: -10, noLabel: true },  // icon has wordmark
  { name: 'MongoDB',     icon: mongoIcon,   offset: 20, noLabel: true },  // icon has wordmark
]

const rightSkills = [
  { name: 'Wazuh',       icon: wazuhIcon,   offset: -10, noLabel: true, extraClass: 'skill-item--wazuh skill-item--wordmark' }, // inverted icon shows wordmark
  { name: 'Networking',  icon: networkIcon, offset: 20 },
  { name: 'Hydra',       icon: hydraIcon,   offset: 60 },
  { name: 'Nmap',        icon: nmapIcon,    offset: 110 },
  { name: 'Wireshark',   icon: 'https://cdn.simpleicons.org/wireshark/1679A1', offset: 60 },
  { name: 'Ghidra',      icon: ghidraIcon,  offset: 20 },
  { name: 'Linux',       icon: linuxIcon,   offset: -10 },
]

function SkillItem({ name, icon, big = false, noLabel = false, extraClass = '', delay = 0, offset = 0 }) {
  const cls = ['skill-item', big ? 'skill-item--big' : '', noLabel ? 'skill-item--wordmark' : '', extraClass]
    .filter(Boolean).join(' ')
  return (
    <div className={cls} style={{ animationDelay: `${delay}ms`, '--curve-offset': `${offset}px` }}>
      <img src={icon} alt={name} className="skill-item__icon" />
      {!noLabel && <span className="skill-item__label">{name}</span>}
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="skills" ref={sectionRef}>

      {/* SKI LLS.png — behind person */}
      <img src={skillsText} alt="SKILLS" className="skills__bg-img" aria-hidden="true" />

      {/* Left column */}
      <div className="skills__col skills__col--left">
        {leftSkills.map((s, i) => (
          <SkillItem key={s.name} {...s} delay={i * 80} />
        ))}
      </div>

      {/* Center — person + platform */}
      <div className="skills__center">
        <img src={platformImg} alt="Platform" className="skills__platform" />
        <img src={skillsImg}   alt="Skills"   className="skills__img" />
      </div>

      {/* Right column */}
      <div className="skills__col skills__col--right">
        {rightSkills.map((s, i) => (
          <SkillItem key={s.name} {...s} delay={i * 80} />
        ))}
      </div>

    </section>
  )
}
