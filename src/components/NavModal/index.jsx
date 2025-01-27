import React, { useContext } from "react"
import "./styles.css"
import { ThemeContext } from "../../utils/ThemeContext"
import { Link } from "react-scroll"

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
            <Link
              to="about-container"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleCloseModal}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="my-projects"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleCloseModal}
            >
              Meus Projetos
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleCloseModal}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              onClick={toggleTheme}
            >
              Mudar tema <u>{theme.toLocaleUpperCase()}</u>
            </Link>
          </li>
          <div id="mail">
            <Link
              to="mailto:matheusfdosan@proton.me"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Diga olá <br />
              matheusfdosan@proton.me
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavModal
