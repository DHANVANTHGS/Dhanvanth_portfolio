import React from 'react'
import pythonIcon from '../assets/material-icon-theme_python.png'
import './Projects.css'

// Brain (Machine Learning) SVG Icon
const BrainIcon = () => (
  <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
)

// Flask SVG Icon
const FlaskIcon = () => (
  <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.31L4.75 19.9a2 2 0 0 0 1.77 2.86h11.08a2 2 0 0 0 1.77-2.86L14 9.31V2Z"/>
    <path d="M8.5 2h7"/>
    <path d="M6 16h12"/>
  </svg>
)

// Radar (Packet Sniffing) SVG Icon
const RadarIcon = () => (
  <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

// GitHub SVG Icon
const GitHubIcon = () => (
  <svg className="gh-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__heading">Projects</h2>
        
        <div className="projects__grid">
          
          {/* Card 1: MediCare AI */}
          <div className="project-card project-card--light">
            <a href={import.meta.env.VITE_PROJECT_MEDICARE_GITHUB_URL || "https://github.com"} target="_blank" rel="noopener noreferrer" className="project-card__gh-link" aria-label="GitHub Repository">
              <GitHubIcon />
            </a>
            <h3 className="project-card__title">MediCare AI</h3>
            <p className="project-card__desc">
              AI-based patient triage platform that analyzes symptoms and vitals, classifies risk levels, prioritizes hospital queues, performs OCR-based prescription analysis, and uses LLM-powered symptom extraction.
            </p>
            <div className="project-card__tags">
              <span className="tag tag--icon-only">
                <img src={pythonIcon} alt="Python" className="tag-img" />
              </span>
              <span className="tag tag--node">
                <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="tag-img" />
                <span className="tag-text">Node.js</span>
              </span>
              <span className="tag">
                <BrainIcon />
                <span className="tag-text tag-text--small">Machine Learning</span>
              </span>
              <span className="tag">OCR</span>
              <span className="tag">LLM</span>
              <span className="tag">WebSockets</span>
            </div>
          </div>

          {/* Card 2: Adaptive DDoS Detection */}
          <div className="project-card project-card--dark">
            <a href={import.meta.env.VITE_PROJECT_DDOS_GITHUB_URL || "https://github.com"} target="_blank" rel="noopener noreferrer" className="project-card__gh-link" aria-label="GitHub Repository">
              <GitHubIcon />
            </a>
            <h3 className="project-card__title">Adaptive DDoS Detection</h3>
            <p className="project-card__desc">
              Machine-learning powered cybersecurity platform that monitors live traffic, detects evolving DDoS attacks, performs packet analysis, and generates automated alerts in real-time with network visualization.
            </p>
            <div className="project-card__tags">
              <span className="tag tag--icon-only">
                <img src={pythonIcon} alt="Python" className="tag-img" />
              </span>
              <span className="tag">
                <BrainIcon />
                <span className="tag-text tag-text--small">Machine Learning</span>
              </span>
              <span className="tag">
                <FlaskIcon />
                <span className="tag-text">Flask</span>
              </span>
              <span className="tag">
                <RadarIcon />
                <span className="tag-text">Packet Sniffing</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
