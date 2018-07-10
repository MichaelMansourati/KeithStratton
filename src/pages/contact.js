import React from 'react'
import Img from 'gatsby-image'

import '../styles/index.css'

export default ({ data }) => (
  <div className="content-container">
    <Img sizes={data.file.childImageSharp.sizes} />
    <div className="text-area">
      <h2>Contact</h2>
      <a id="contact-link" href="mailto: mail@keithstratton.com">
        mail@keithstratton.com
      </a>
    </div>
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
