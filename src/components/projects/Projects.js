import React from 'react'
import {projectData} from '../../data/projectData'
import "./projects.css"
export default function Projects() {

  const projectEntries = projectData.projects.map((entry, i) => {
    return <ProjectItem key={i} data={entry} />
  })

  return (
    <div className="projects">
      <div className="smallWidthContainer">
        <h2>Projekte</h2>
        <hr />
        <div id="projects--wrapper" className="projects--wrapper">
          {projectEntries}
          {/* <div className="projects--wrapper-item">
            <div className="wrapper--item-overlay">
              <h4 className="overlay--headline">Project Name</h4>
              <p className="overlay--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
            </div>
          </div>
          <div className="projects--wrapper-item">
            <div className="wrapper--item-overlay">
              <h4 className="overlay--headline">headline</h4>
              <p className="overlay--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
            </div>
          </div>
          <div className="projects--wrapper-item">
            <div className="wrapper--item-overlay">
              <h4 className="overlay--headline">headline</h4>
              <p className="overlay--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
            </div>
          </div>
          <div className="projects--wrapper-item">
            <div className="wrapper--item-overlay">
              <h4 className="overlay--headline">headline</h4>
              <p className="overlay--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
            </div>
          </div>
          <div className="projects--wrapper-item">
            <div className="wrapper--item-overlay">
              <h4 className="overlay--headline">headline</h4>
              <p className="overlay--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
            </div>
          </div>
          <div className="projects--wrapper-item">
            <div className="wrapper--item-overlay">
              <h4 className="overlay--headline">headline</h4>
              <p className="overlay--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}




function ProjectItem(props) {
  return (
    <div className="projects--wrapper-item" style={{backgroundImage: `url("/assets/image/${props.data.imagePath}")`}}>
      <div className="wrapper--item-overlay">
        <h4 className="overlay--headline">{props.data.projectName}</h4>
        <p className="overlay--text">{props.data.description}</p>
      </div>
    </div>
  )
}