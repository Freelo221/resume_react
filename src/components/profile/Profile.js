import React from 'react'
import "./profile.css"
import {profileData} from "../../data/profileData.js"

// console.log(profileData)
function Profile(props) {


  const Details = profileData.details.map((detail, i) => {
    return <ProfileDetailRow key={i} data={detail} />
  })



  return (
    <div className="profile">
      <div className="smallWidthContainer">
        {(profileData.headline) && <h2>{profileData.headline}</h2>}
        <hr />
        <div className="profile--infoContainer">
          <div className="profile--infoContainer-image">
            <div className="userImage" style={{backgroundImage: `url("/assets/image/${profileData.imgPath}")`}}></div>

            {Details}

          </div>

          <div className="profile--infoContainer-about">
            {(profileData.subline) && <h3>{profileData.subline}</h3>}
            {(profileData.descrition) && <p id="profile-info">{profileData.descrition}</p>}
          </div>

        </div>
      </div >
    </div >
  )
}

export default Profile;



function ProfileDetailRow(props) {
  return (
    <div>
      <p className="headline">{props.data.headline}</p>
      <p id="profile-location">{props.data.text}</p>
    </div>
  )
}
