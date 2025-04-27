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
                  window.open(
                    "https://github.com/matheusfdosan/super-smash-pizza-totem"
                  )
                }
              ></div>
              <div className="right-side">
                <h3>Super Smash Pizza</h3>
                <span>Março de 2025</span>
                <p>
                  O Sistema de Compra de Lanches para Totens de Fast Food é uma
                  solução tecnológica voltada para otimizar e modernizar o
                  processo de pedidos em lanchonetes e restaurantes. Com um
                  design intuitivo e acessível, o sistema permite que os
                  clientes escolham os produtos, definam quantidades, visualizem
                  detalhes e finalizem o pagamento diretamente pelo totem ou
                  tablet.
                  <br />
                  <br />
                  Entre os diferenciais do projeto, destacam-se a realização de
                  pedidos por comando de voz e a audiodescrição dos produtos,
                  tornando a experiência mais inclusiva. A interface foi
                  projetada especialmente para dispositivos de autoatendimento,
                  garantindo uma experiência fluida e eficiente.
                </p>
                <a
                  target="_blank"
                  href="https://super-smash-pizza-totem.vercel.app/"
                  onMouseEnter={() => handleMouseEnter("Acesse")}
                  onMouseLeave={handleMouseLeave}
                >
                  Super Smash Pizzas
                  <img src={anchorArrow} alt="arrow" />
                </a>
              </div>
            </div>

            <div id="project-3" className="project">
              <div className="left-side">
                <h3>VM Softwares - POS</h3>
                <span></span>
                <p>
                  O VM Softwares - POS é um sistema de ponto de venda moderno,
                  composto por um frontend em React.js com Vite, oferecendo uma
                  interface fácil de usar para gerenciar produtos, clientes e
                  vendas. O frontend consome uma API RESTful, permite
                  adicionar/remover produtos, controlar estados com useState,
                  gerar PDFs de notas fiscais usando jsPDF e configurar a
                  conexão com o backend por variáveis .env.
                  <br />
                  <br />O backend é desenvolvido com Node.js e Fastify, usando
                  PostgreSQL como banco de dados para uma gestão eficiente de
                  informações. Ele possibilita o cadastro, edição e exclusão de
                  produtos, controle automático de estoque, registro de pedidos
                  e pagamentos, além da geração de relatórios financeiros.
                  Juntos, frontend e backend oferecem uma solução robusta para
                  administrar negócios de forma prática e integrada.
                </p>
                <a
                  target="_blank"
                  href="https://vms-pos.onrender.com/"
                  onMouseEnter={() => handleMouseEnter("Acesse")}
                  onMouseLeave={handleMouseLeave}
                >
                  VMS - POS
                  <img src={anchorArrow} alt="arrow" />
                </a>
              </div>
              <div
                className="right-side"
                onMouseEnter={() => handleMouseEnter("Veja")}
                onMouseLeave={handleMouseLeave}
                onClick={() =>
                  window.open("https://github.com/matheusfdosan/vms_pos")
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
