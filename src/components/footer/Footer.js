import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className="contact">
      <div className="smallWidthContainer">
        <h2>Kontakt</h2>
        <hr />

        <div className="contact--wrapper">
          <a target="_blank" href="https://wa.me/+4915730162018"><span className="icon icon--link icon--whatsapp"></span></a>
          <a href="tel:015730162018"><span className="icon icon--link icon--phone"></span></a>
          <a href="mailto:jannis_Philipp@web.de"><span className="icon icon--link icon--mail"></span></a>
        </div>
      </div>
    </div>
  )
}
