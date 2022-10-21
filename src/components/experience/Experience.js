import React from 'react'
import "./experience.css"
import {experienceData} from '../../data/experienceData'

function Experience(props) {

  const experienceEntrys = experienceData.entries.map((entry, i) => {
    return <ExperienceRow data={entry} />
  })

  return (
    <div className="experience">
      <div className="smallWidthContainer">
        {(experienceData.headline) && <h2>{experienceData.headline}</h2>}
        <hr />

        <div id="experience--container" className="experience--container">

          {experienceEntrys}

        </div>
      </div>
    </div>
  )
}

export default Experience;

function ExperienceRow(props) {
  return (
    <div className={`experience--container-row ${props.data.relevant && 'relevant'}`} >
      <div className="leftCol">

        {(props.data.companyName) && <p className="container-row--company">{props.data.companyName}</p>}
        {(props.data.timespan) && <p className="container-row--timespan">{props.data.timespan}</p>}

      </div>
      <div className="rightCol">

        {(props.data.position) && <p className="container-row--position">{props.data.position}</p>}
        {(props.data.description) && <p className="container-row--description">{props.data.description}</p>}


        {
          (props.data.location || props.data.url) &&
          <p className="container-row--links">
            {
              (props.data.location) &&
              <span className="container-row--links-location">
                <span className="icon icon--location"></span> {props.data.location}
              </span>
            }
            {
              (props.data.url) &&
              <span className="container-row--links-link">
                <a href={props.data.url}>
                  <span className="icon icon--link"></span>{props.data.url}
                </a>
              </span>
            }
          </p>
        }

      </div>
    </div >
  )
}
