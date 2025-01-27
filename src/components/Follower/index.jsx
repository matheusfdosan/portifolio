import React, { useEffect, useState } from "react"
import "./styles.css"

function Follower({ message }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isFollowerOn, setIsFollowerOn] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsFollowerOn(true)

    return () => {
      setIsFollowerOn(false)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        id="follower"
        className={isFollowerOn ? "animate" : ""}
        style={{
          left: mousePosition.x + 25,
          top: mousePosition.y - 25,
        }}
      >
        {message}
      </div>
    </>
  )
}

export default Follower
