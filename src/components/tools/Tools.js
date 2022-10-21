import React from 'react'
import {toolData} from '../../data/toolData'
import "./tools.css"



export default function Tools(props) {

  const toolEntries = toolData.tools.map((entry, i) => {
    return <ToolEntry key={i} data={entry} />
  })

  return (
    <div className="tools">
      <div className="smallWidthContainer">
        {(toolData.headline) && <h2>{toolData.headline}</h2>}
        <hr />
        <div className="tools--wrapperMain">
          {toolEntries}
          {/* <div data="Google Chrome Dev-Tools" className="tools--wrapperMain-item tools--icon-chrome"><p></p></div>
          <div data="Firefox Dev-Tools" className="tools--wrapperMain-item tools--icon-firefox"><p></p></div>
          <div data="Vs-Code" className="tools--wrapperMain-item tools--icon-vscode"><p></p></div>
          <div data="Github" className="tools--wrapperMain-item tools--icon-github"><p></p></div>
          <div data="OneNote - Notizen und Skizzen" className="tools--wrapperMain-item tools--icon-onenote"><p></p></div>
          <div data="Zettel und Stift" className="tools--wrapperMain-item tools--icon-note"><p></p></div> */}
        </div>
      </div>
    </div>
  )
}


function ToolEntry(props) {
  return (
    <div
      style={{backgroundImage: `url("/assets/image/tools/${props.data.imagePath}")`}}
      className="tools--wrapperMain-item tools--icon-chrome">
    </div>
  )
}
