import React, { useEffect, useState } from "react"

import "./styles.css"
import ToggleTheme from "../ToggleTheme"
import NavModal from "../NavModal"

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

  return (
    <div id="header">
      <div className="container">
        <h1>Matheus!</h1>

        <nav>
          <ul>
            <li>
              <a href="#about-container">Sobre</a>
            </li>
            <li>
              <a href="#my-projects">Meus Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
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
