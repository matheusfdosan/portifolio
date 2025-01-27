import { useEffect, useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Illustration from "./components/Illustration"
import About from "./components/About"
import FiveYears from "./components/FiveYears"
import ProjectsContainer from "./components/ProjectsContainer"
import LetsCollaborate from "./components/LetsCollaborate"
import BackToTop from "./components/BackToTop"

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
      <FiveYears />
      <ProjectsContainer />
      <LetsCollaborate />
    </>
  )
}

export default App
