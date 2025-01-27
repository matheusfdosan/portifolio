import React, { useContext } from "react"
import "./styles.css"
import { ThemeContext } from "../../utils/ThemeContext"

import instagramIcon from "../../assets/instagram.svg"
import instagramIconDark from "../../assets/instagram-dark.svg"

import linkedinIcon from "../../assets/linkedin.svg"
import linkedinIconDark from "../../assets/linkedin-dark.svg"

import emailIcon from "../../assets/email.svg"
import emailIconDark from "../../assets/email-dark.svg"

import repositoriesIcon from "../../assets/repositories.svg"
import repositoriesIconDark from "../../assets/repositories-dark.svg"

import githubIcon from "../../assets/github.svg"
import githubIconDark from "../../assets/github-dark.svg"

function LetsCollaborate() {
  const { theme } = useContext(ThemeContext)

  return (
    <div id="contact">
      <div id="collab">
        <div className="container">
          <div className="line"></div>
          <h2>Entre em contato comigo</h2>
          <div id="links">
            <ul>
              <li>
                <a href="mailto:matheusfdosan@proton.me" target="_blank">
                  <img
                    src={theme === "dark" ? emailIconDark : emailIcon}
                    alt="email-icon"
                  />
                  matheusfdosan@proton.me
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/matheusfaus/"
                  target="_blank"
                >
                  <img
                    src={theme === "dark" ? linkedinIconDark : linkedinIcon}
                    alt="linkedin-icon"
                  />
                  Matheus Faustino
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/matheusfdosan/"
                  target="_blank"
                >
                  <img
                    src={theme === "dark" ? instagramIconDark : instagramIcon}
                    alt="intagram-icon"
                  />
                  matheusfdosan
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.github.com/matheusfdosan/" target="_blank">
                  <img
                    src={theme === "dark" ? githubIconDark : githubIcon}
                    alt="github-icon"
                  />
                  matheusfdosan
                </a>
              </li>
              <li>
                <a
                  href="https://matheusfdosan.github.io/myRepos/"
                  target="_blank"
                >
                  <img
                    src={
                      theme === "dark" ? repositoriesIconDark : repositoriesIcon
                    }
                    alt="repositories-icon"
                  />
                  Todos os Respositórios
                </a>
              </li>
            </ul>
          </div>
          <p id="copy">&copy; MATHEUS FAUSTINO 2025</p>
        </div>
      </div>
    </div>
  )
}

export default LetsCollaborate
