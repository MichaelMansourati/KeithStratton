import React from 'react'
import Link from 'gatsby-link'

import CameraBW from '../assets/images/CameraBW.jpg'

import '../styles/index.css'

const Contact = () => (
  <div className="content-container">
    <img src={CameraBW} />
    <h2>Contact</h2>
    <a id="contact-link" href="mailto: mail@keithstratton.com" >mail@keithstratton.com</a>
  </div>
)

export default Contact