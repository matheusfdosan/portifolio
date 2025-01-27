import React, { useContext, useLayoutEffect } from "react"
import "./styles.css"

import topArrow from "../../assets/top-arrow.svg"
import topArrowDark from "../../assets/top-arrow-dark.svg"
import { ThemeContext } from "../../utils/ThemeContext"

import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

function BackToTop({ on }) {
  const { theme } = useContext(ThemeContext)

  const handleClickBack = () => {
    if (window.innerWidth >= 780) {
      gsap.to(window, { duration: 1, scrollTo: "#header" })
    } else {
      document.location.href = "/#header"
    }
  }
  return (
    <div
      id="top-arrow"
      className={on ? "animate" : ""}
      onClick={handleClickBack}
    >
      <img src={theme === "light" ? topArrow : topArrowDark} alt="top-arrow" />
    </div>
  )
}

export default BackToTop
