import React, { useContext } from "react"
import { Link } from "react-scroll"
import "./styles.css"

import topArrow from "../../assets/top-arrow.svg"
import topArrowDark from "../../assets/top-arrow-dark.svg"
import { ThemeContext } from "../../utils/ThemeContext"

function BackToTop({ on }) {
  const { theme } = useContext(ThemeContext)

  return (
    <Link
      id="top-arrow"
      className={on ? "animate" : ""}
      spy={true}
      smooth={true}
      offset={100}
      duration={500}
      to="header"
      // onClick={() => {
      //   document.location.href = "/#top"
      // }}
    >
      <img src={theme === "light" ? topArrow : topArrowDark} alt="top-arrow" />
    </Link>
  )
}

export default BackToTop
