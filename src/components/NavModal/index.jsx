import React, { useContext } from "react"
import "./styles.css"
import { ThemeContext } from "../../utils/ThemeContext"

function NavModal({ clickSomewhere }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleCloseModal = () => {
    clickSomewhere()
  }

  return (
    <div id="modal-overlay">
      <div id="modal-container">
        <ul>
          <li>
            <a
              href="#about-container"
              onClick={handleCloseModal}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#skills-container"
              onClick={handleCloseModal}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#my-projects"
              onClick={handleCloseModal}
            >
              Meus Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleCloseModal}
            >
              Contato
            </a>
          </li>
          <li>
            <a
              onClick={toggleTheme}
            >
              Mudar tema <u>{theme.toLocaleUpperCase()}</u>
            </a>
          </li>
          <div id="mail">
            <a
              href="#mailto:matheusfdosan@proton.me"
            >
              Diga olá <br />
              matheusfdosan@proton.me
            </a>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavModal
