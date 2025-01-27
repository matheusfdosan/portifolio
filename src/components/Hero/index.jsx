import React, { useEffect, useState } from "react"
import "./styles.css"
import Follower from "../Follower"
import notebook from "../../assets/notebook.jpg"

function Hero() {
  const [viewMouseEffect, setViewMouseEffect] = useState(false)
  const [mouseEffectMsg, setMouseEffectMsg] = useState("")
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 780)

  useEffect(() => {

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 780)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleMouseEnter = (msg) => {
    setViewMouseEffect(true)
    setMouseEffectMsg(msg)
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
