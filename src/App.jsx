import { useEffect, useState } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Illustration from "./components/Illustration"
import About from "./components/About"
import FiveYears from "./components/FiveYears"
import ProjectsContainer from "./components/ProjectsContainer"
import LetsCollaborate from "./components/LetsCollaborate"
import BackToTop from "./components/BackToTop"
import SkillsContainer from "./components/SkillsContainer"

function App() {
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY
      if (scrollY > 600) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Illustration />
      <BackToTop on={backToTop} />
      <About />
      <SkillsContainer />
      <FiveYears />
      <ProjectsContainer />
      <LetsCollaborate />
    </>
  )
}

export default App
