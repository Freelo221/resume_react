import React from 'react';
import './skills.css';
import {skillData} from '../../data/skillsData';


export default function Skills() {

  const skillEntries = skillData.skills.map((entry, i) => {
    return <Skillbar key={i} {...entry} />
  })


  return (
    <div className="skills">
      <div className="smallWidthContainer">
        {(skillData.headline) && <h2>{skillData.headline}</h2>}
        <hr />

        <div className="skills--wrapperMain">
          <div className="skills--wrapperMain-leftCol">
            {skillEntries}
          </div>
          <div id="skillText"></div>
        </div>
      </div>
    </div>
  );
}


function Skillbar(props) {
  const SkillBarItems = []
  for (let i = 0; i < 10; i++) {
    if (props.level > i) {
      SkillBarItems.push(<SkillVisual key={i} level={props.level} fill={true} />)

    }
    else {
      SkillBarItems.push(<SkillVisual key={i} fill={false} />)

    }
  }

  return (

    <div className="ProgressRow">
      <div className="item-text">{props.skill}</div>

      {SkillBarItems}

      <div className="item"></div>
    </div>

  )
}


function SkillVisual(props) {

  let fill = (props.fill ? "fill" : "")
  let colorKey = ""
  if (props.level <= 4) colorKey = "low"
  if (props.level > 4) colorKey = "med"
  if (props.level > 7) colorKey = "high"

  let classList = `item ${fill} ${colorKey}`

  return (
    <div className={classList}></div>

  )
}