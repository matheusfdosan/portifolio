import React, { useContext } from "react"
import "./styles.css"

import moonIcon from "../../assets/moon-icon.svg"
import sunIconDark from "../../assets/sun-icon-dark.svg"
import { ThemeContext } from "../../utils/ThemeContext"

function ToggleTheme() {
  
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <div id="theme-switcher">
        <button onClick={toggleTheme}>
          <img
            src={theme === "dark" ? sunIconDark : moonIcon}
            alt="theme-icons"
          />
        </button>
      </div>
    </>
  )
}

export default ToggleTheme
