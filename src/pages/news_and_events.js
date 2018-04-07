import React from 'react'
import Img from 'gatsby-image'

import '../styles/index.css'

export default ({ data }) => (
  <div className="content-container">
    <Img sizes={data.file.childImageSharp.sizes} />
    <h2>News and Events</h2>
    <div className="event-item">
      <h2 className="event-date">April 5th, 2018</h2>
      <h3>premiere of Pop Cycle for percussion quartet</h3>
      <span>McGill Percussion Ensemble concert</span>
      <span>Pollack Hall, McGill University</span>
      <span>
        Strathcona Music Building, Sherbrooke Street West, Montreal, QC
      </span>
    </div>
  </div>
)

export const query = graphql`
  query NewsImageQuery {
    file(relativePath: { eq: "Camera.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`