import React from 'react'
import "./education.css"
import {educationData} from "../../data/educationData"

// console.log(educationData)
export default function Education(props) {

  const educationEntrys = educationData.entries.map((entry, i) => {
    return <EducationRow key={i} data={entry} />
  })

  return (
    <div className="education">
      <div className="smallWidthContainer">
        {(educationData.headline) && <h2>{educationData.headline}</h2>}
        <hr />
        <div id="education--container" className="education--container relevant">

          {educationEntrys}

        </div>
      </div>
    </div>
  )
}




function EducationRow(props) {
  return (
    <div className="education--container-row relevant">
      <div className="leftCol">
        {(props.data.schoolType) && <p className="container-row--company">{props.data.schoolType}</p>}
        {(props.data.timespan) && <p className="container-row--timespan">{props.data.timespan}</p>}
      </div>
      <div className="rightCol">
        {(props.data.institution) && <p className="container-row--position">{props.data.institution}</p>}
        {(props.data.description) && <p className="container-row--description">{props.data.description}</p>}
      </div>
    </div>
  )
}