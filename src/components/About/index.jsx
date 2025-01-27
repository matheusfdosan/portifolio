import React from "react"
import "./styles.css"

function About() {
  return (
    <div id="about">
      <div className="container">
        <h2>Sobre mim</h2>
        <div className="line"></div>
        <p>
          Sou Matheus Faustino, técnico em Informática com foco em Programação
          pelo CEAP (Centro Educacional Assistencial Profissionalizante) e 5
          anos de experiência com desenvolvimento web. Gosto desenvolver
          tecnologias que possam fazer a diferença.
        </p>
        <p>
          Durante a minha trajetória, desenvolvi habilidades com HTML, CSS,
          JavaScript, React.js, Bancos de dados (MongoDB, MySQL e PostgreSQL),
          Java e Python. Um dos destaques do meu percurso foi minha participação
          na FeCEAP, com o projeto{" "}
          <span onClick={() => window.open("https://melhorcidade.vercel.app/")}>
            MelhorCidade
          </span>
          , que recebeu excelente avaliação dos técnicos responsáveis.
          Atualmente, estou expandindo meu conhecimento para outras áreas como
          desenvolvimento Mobile com Java e React Native, enquanto aprofundo
          minhas habilidade em Back-end.
        </p>
      </div>
    </div>
  )
}

export default About
