import React, { useLayoutEffect } from "react"
import "./styles.css"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function Illustration() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.to(["#t1", "#t4"], {
        scrollTrigger: {
          trigger: "#container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        x: -25,
        duration: 2,
      })

      t1.add(
        gsap.to(["#t2", "#t3", "#t5"], {
          scrollTrigger: {
            trigger: "#container",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
          x: 25,
          duration: 9,
        }),
        0
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div id="about-container">
      <div id="illustration">
        <ul id="container">
          <li id="t1">Código que</li>
          <li id="t2" className="serif-items" style={{ paddingLeft: "35rem" }}>
            conecta,
          </li>
          <li id="t3" style={{ paddingLeft: "15rem" }}>
            Com um toque de
          </li>
          <li id="t4" style={{ paddingRight: "15rem" }}>
            Soluções que
          </li>
          <li id="t5" className="serif-items" style={{ paddingLeft: "40rem" }}>
            transformam
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Illustration
