import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import '../styles/index.css'

import KeithCagibi from '../assets/images/KeithCagibi.jpg'

export default ({ data }) => (
  <div id="index-container" className="content-container">
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