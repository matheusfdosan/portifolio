import React, { useEffect, useState } from "react"
import notebook from "../../assets/notebook.jpg"
import Follower from "../Follower"
import "./styles.css"

function Hero() {
  const [viewMouseEffect, setViewMouseEffect] = useState(false)
  const [mouseEffectMsg, setMouseEffectMsg] = useState("")
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 780)
  const [mouseScroll, setMouseScroll] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 780)
    }

    const handleScroll = () => {
      setMouseScroll(true)
      setViewMouseEffect(false)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      setMouseScroll(false)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleMouseEnter = (msg) => {
    if (!mouseEffectMsg) {
      setViewMouseEffect(true)
      setMouseEffectMsg(msg)
    }
  }

  const handleMouseLeave = () => {
    setViewMouseEffect(false)
    setMouseEffectMsg("")
  }

  return (
    <div id="hero">
      <div className="container">
        <p>
          Olá, sou <span>Matheus Faustino</span>,
        </p>
        <h2>Desenvolvedor Web</h2>

        <div id="cards-container">
          <div id="inspirational">
            <h3>A melhor maneira de prever o futuro é inventá-lo.</h3>
            <span>— Alan Kay</span>
            <img src={notebook} alt="me" />
          </div>
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("Veja")}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              window.open("https://github.com/matheusfdosan/justdonotes")
            }}
          ></div>
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("Veja")}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              window.open(
                "https://github.com/matheusfdosan/MelhorCidade_FrontEnd"
              )
            }}
          ></div>
          <div className="email">
            <p>Entre em contato comigo:</p>
            <a
              href="mailto:matheusfdosan@proton.me"
              target="_blank"
              onMouseEnter={() => handleMouseEnter("Entre")}
              onMouseLeave={handleMouseLeave}
            >
              matheusfdosan@proton.me
            </a>
          </div>
        </div>
      </div>
      {isDesktop && viewMouseEffect && <Follower message={mouseEffectMsg} />}
    </div>
  )
}

export default Hero
