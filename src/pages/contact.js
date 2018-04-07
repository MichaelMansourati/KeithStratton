import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import '../styles/index.css'

export default ({ data }) => (
  <div className="content-container">
    <Img sizes={data.file.childImageSharp.sizes} />
    <h2>Contact</h2>
    <a id="contact-link" href="mailto: mail@keithstratton.com" >mail@keithstratton.com</a>
  </div>
)

export const query = graphql`
  query ContactImageQuery {
    file(relativePath: { eq: "CameraBW.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`