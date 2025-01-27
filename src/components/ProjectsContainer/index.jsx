import React, { useEffect, useState } from "react"
import "./styles.css"
import Follower from "../Follower"

import anchorArrow from "../../assets/anchor-arrow.svg"

function ProjectsContainer() {
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
    <div id="my-projects">
      <div id="projects-container">
        <div className="container">
          <h2>Meus Principais Projetos</h2>
          <div className="line"></div>
          <div id="projects">
            <div id="project-1" className="project">
              <div className="left-side">
                <h3>MelhorCidade</h3>
                <span>Setembro de 2024</span>
                <p>
                  Todos nós já enfrentamos problemas em nosso bairro ou na
                  cidade de São Paulo, como acúmulo de lixo, trânsito intenso,
                  buracos nas ruas, entre outros, que impactam negativamente
                  nosso dia a dia e até nossa saúde. Apesar de existirem
                  soluções, muitas pessoas não sabem como agir ou não tomam
                  iniciativas para resolver essas questões.
                  <br /> <br />É nesse contexto que surge o Melhor Cidade, um
                  projeto que propõe a criação de uma comunidade onde os
                  cidadãos possam relatar problemas urbanos e encontrar meios
                  oficiais para solucioná-los, promovendo uma cidade mais
                  consciente e participativa.
                </p>
                <a
                  target="_blank"
                  href="https://melhorcidade.vercel.app/"
                  onMouseEnter={() => handleMouseEnter("Acesse")}
                  onMouseLeave={handleMouseLeave}
                >
                  MelhorCidade
                  <img src={anchorArrow} alt="arrow" />
                </a>
              </div>
              <div
                className="right-side"
                onMouseEnter={() => handleMouseEnter("Veja")}
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  window.open(
                    "https://github.com/matheusfdosan/MelhorCidade_FrontEnd"
                  )
                }
              ></div>
            </div>

            <div id="project-2" className="project">
              <div
                className="left-side"
                onMouseEnter={() => handleMouseEnter("Veja")}
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  window.open("https://github.com/matheusfdosan/coffee-teeth")
                }
              ></div>
              <div className="right-side">
                <h3>Coffe Teeth</h3>
                <span>Fevereiro de 2023</span>
                <p>
                  O Coffee Teeth é um blog de uma cafeteria fictícia criado por
                  mim, que apresenta produtos e receitas inspirados nos melhores
                  cafés gourmet do mundo. Desenvolvido com HTML, CSS e
                  JavaScript, o site oferece uma experiência de usuário
                  intuitiva e responsiva, com design clean e minimalista. O
                  projeto inclui páginas dedicadas a produtos como cafés
                  especiais e sobremesas, além de uma seção de receitas
                  exclusivas.
                  <br /> <br />
                  No repositório, é possível encontrar uma estrutura organizada
                  e bem documentada, com funcionalidades como um formulário de
                  contato e integração com redes sociais. O Coffee Teeth reflete
                  minha paixão por desenvolvimento web e design criativo,
                  demonstrando como a tecnologia pode criar experiências
                  digitais envolventes, mesmo em um contexto fictício.
                </p>
                <a
                  target="_blank"
                  href="https://matheusfdosan.github.io/coffee-teeth/"
                  onMouseEnter={() => handleMouseEnter("Acesse")}
                  onMouseLeave={handleMouseLeave}
                >
                  Coffee Teeth
                  <img src={anchorArrow} alt="arrow" />
                </a>
              </div>
            </div>

            <div id="project-3" className="project">
              <div className="left-side">
                <h3>UrbanVault</h3>
                <span>Janeiro de 2025</span>
                <p>
                  O UrbanVault é um projeto que vai além de uma simples aula de
                  Jest, integrando testes com Jest e React Testing Library para
                  garantir a qualidade do código, enquanto utiliza Axios para
                  fazer requisições de dados a uma API. O foco principal é
                  demonstrar boas práticas de desenvolvimento, como a
                  implementação de testes unitários e de integração, aliados à
                  criação de uma interface dinâmica e responsiva com React. O
                  projeto é um exemplo prático de como combinar ferramentas
                  modernas para construir aplicações robustas e testáveis.{" "}
                  <br />
                  <br />
                  No repositório, você encontrará uma estrutura organizada, com
                  componentes React bem definidos e testes que cobrem
                  funcionalidades essenciais, como a busca e exibição de dados
                  da API. O UrbanVault é uma demonstração do meu comprometimento
                  com a qualidade do código e a entrega de soluções que unem
                  funcionalidade, usabilidade e boas práticas de
                  desenvolvimento.
                </p>
                <a
                  target="_blank"
                  href="https://urbanvault.netlify.app/"
                  onMouseEnter={() => handleMouseEnter("Acesse")}
                  onMouseLeave={handleMouseLeave}
                >
                  UrbanVault
                  <img src={anchorArrow} alt="arrow" />
                </a>
              </div>
              <div
                className="right-side"
                onMouseEnter={() => handleMouseEnter("Veja")}
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  window.open(
                    "https://github.com/matheusfdosan/project-with-react-and-jest"
                  )
                }
              ></div>
            </div>
          </div>
        </div>
        {isDesktop && viewMouseEffect && <Follower message={mouseEffectMsg} />}
      </div>
    </div>
  )
}

export default ProjectsContainer
