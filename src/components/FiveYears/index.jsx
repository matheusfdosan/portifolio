import React, { useEffect, useLayoutEffect, useState } from "react"
import "./styles.css"

import Marquee from "react-fast-marquee"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function FiveYears() {
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

  useLayoutEffect(() => {
    let ctx
    if (isDesktop) {
      ctx = gsap.context(() => {
        const fytn = gsap.timeline()
        fytn.to("#five-years-text", {
          scrollTrigger: {
            trigger: "#five-years",
            start: "top 60%",
            end: "bottom 50%",
            scrub: 1,
          },
          y: -40,
          duration: 1,
          opacity: 1,
          ease: "power2.out",
        })
      })
    }

    return () => {
      if (ctx) ctx.revert()
    }
  }, [isDesktop])

  return (
    <div id="five-years">
      <Marquee className="marquee" speed={100} gradient={false}>
        Websites • Front-end • Resposividade • react.js • node.js • gsap •
        PostgreSQL • MySQL• mongodb • java development • javascript • hTML • cSS
        • SCSS • POO • Autenticação • Back-end For front-end •
      </Marquee>

      <div id="five-years-text">Mais de 5 anos de experiência</div>

      <Marquee
        className="marquee"
        speed={100}
        gradient={false}
        direction="right"
      >
        Websites • Front-end • Resposividade • react.js • node.js • gsap •
        PostgreSQL • mySQL• mongodb • java development • javascript • hTML • cSS
        • SCSS • POO • Autenticação • Back-end For front-end •
      </Marquee>
    </div>
  )
}

export default FiveYears
