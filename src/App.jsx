import { useState } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExpertiseSection from './components/ExpertiseSection'
import ProcessSection from './components/ProcessSection'
import PrinciplesSection from './components/PrinciplesSection'
import StackSection from './components/StackSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import useMagneticButtons from './hooks/useMagneticButtons'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  useMagneticButtons()

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="relative z-[3]">
        <Hero />
        <Marquee />
        <StatsSection />
        <AboutSection />
        <ProjectsSection onOpen={setActiveProject} />
        <ExpertiseSection />
        <ProcessSection />
        <PrinciplesSection />
        <StackSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <div className="relative z-[3]"><Footer /></div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
