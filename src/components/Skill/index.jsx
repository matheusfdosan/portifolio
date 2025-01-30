import React from "react"
import "./styles.css"

function Skill({ skillId, skillName, skillPath }) {
  return (
    <div id={"skill-" + skillId} className="skill-item" title={skillName}>
      <img
        src={skillPath}
        alt={`${skillName}-icon`}
        style={{
          filter: `${skillId === 8 ? "brightness(0.5)" : "none"}`,  
        }}
        title={skillName}
      />
      <p>{skillName}</p>
    </div>
  )
}

export default Skill
