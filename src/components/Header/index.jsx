import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"

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
      <div id="top"></div>
      <div className="container">
        <h1>Matheus!</h1>

        <nav>
          <ul>
            <li>
              <Link
                to="about-container"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="my-projects"
                Meus
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                {" "}
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Contato
              </Link>
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
