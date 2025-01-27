import React, { useEffect, useState } from "react"
import "./styles.css"

import ToggleTheme from "../ToggleTheme"
import NavModal from "../NavModal"

import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

function Header() {
  const [modal, setModal] = useState(false)

  const handleClickBurguer = () => {
    setModal(!modal)
  }

  useEffect(() => {
    if (modal) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflowY = "scroll"
    }
  }, [modal])

  const handleClickLink = (e) => {
    const hash = e.target.name

    if (window.innerWidth >= 780) {
      gsap.to(window, { duration: 1, scrollTo: hash })
    } else {
      document.location.href = `/${hash}`
    }
  }

  return (
    <div id="header">
      <div id="top"></div>
      <div className="container">
        <h1>Matheus!</h1>

        <nav>
          <ul>
            <li>
              <a onClick={handleClickLink} name="#about-container">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={handleClickLink} name="#my-projects">
                Projetos
              </a>
            </li>
            <li>
              <a onClick={handleClickLink} name="#contact">
                Contato
              </a>
            </li>
            <ToggleTheme />
            <div
              id="burguer"
              onClick={handleClickBurguer}
              className={modal ? "active" : ""}
            >
              <div className="burguer-line"></div>
              <div className="burguer-line"></div>
              <div className="burguer-line"></div>
            </div>
          </ul>
        </nav>
        {modal && <NavModal clickSomewhere={handleClickBurguer} />}
      </div>
    </div>
  )
}

export default Header
