import React, { useContext, useEffect, useState } from "react"
import "./styles.css"

import topArrow from "../../assets/top-arrow.svg"
import topArrowDark from "../../assets/top-arrow-dark.svg"
import { ThemeContext } from "../../utils/ThemeContext"

function BackToTop({ on }) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      id="top-arrow"
      className={on ? "animate" : ""}
      onClick={() => {
        document.location.href = "/#header"
      }}
    >
      <img src={theme === "light" ? topArrow : topArrowDark} alt="top-arrow" />
    </div>
  )
}

export default BackToTop
