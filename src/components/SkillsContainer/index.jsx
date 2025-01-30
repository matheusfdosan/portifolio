import React from "react"
import "./styles.css"
import skillJson from "../../utils/allSkills"
import Skill from "../Skill"

function SkillsContainer() {
  return (
    <div id="skills-container">
      <div className="container">
        <h2>Minhas Habilidades</h2>
        <div className="line"></div>
        <div id="skills-set">
          {skillJson.map((skill, index) => {
            return (
              <Skill
                key={index}
                skillId={index}
                skillName={skill.skill}
                skillColor={skill.color}
                skillPath={skill.icon}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer
