import './App.css'
import Hero   from './sections/Hero'
import About  from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="app">

      {/* Background layer — light-left → deep-purple-right */}
      <div className="bg-layer" aria-hidden="true" />

      {/* ===== SECTIONS ===== */}
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* more sections will be added here */}

    </div>
  )
}

export default App
