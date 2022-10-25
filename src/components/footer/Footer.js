import React from 'react'
import {userData} from '../../data/userData'
import "./footer.css"

export default function Footer() {

  const data = userData;
  console.log(userData.mailAdress)
  const whatsappNumber = '49' + userData.mobileNumber.substring(1);
  return (
    <div className="contact">
      <div className="smallWidthContainer">
        <h2>Kontakt</h2>
        <hr />

        <div className="contact--wrapper">
          {/* <a target="_blank" href="https://wa.me/+4915730162018"><span className="icon icon--link icon--whatsapp"></span></a> */}
          <a target="_blank" href={`https://wa.me/+${whatsappNumber}`}><span className="icon icon--link icon--whatsapp"></span></a>
          <a href={`tel: ${userData.mobileNumber}`}><span className="icon icon--link icon--phone"></span></a>
          <a href={`mailto: ${userData.mailAdress}`}><span className="icon icon--link icon--mail"></span></a>
        </div>
      </div>
    </div>
  )
}
