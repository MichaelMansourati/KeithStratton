import React from 'react'
import Img from 'gatsby-image'

import '../styles/index.css'

export default ({ data }) => (
  <div className="content-container">
    <Img sizes={data.file.childImageSharp.sizes} alt="Keith at Le Cagibi" />
  </div>
)

export const query = graphql`
  query IndexImageQuery {
    file(relativePath: { eq: "KeithCagibi.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`