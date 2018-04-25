import React from 'react'
import Img from 'gatsby-image'

import '../styles/index.css'

export default ({ data }) => (
  <div className="content-container">
    <Img sizes={data.file.childImageSharp.sizes} />
    <div className="text-area">
      <h2>News and Events</h2>
      <div className="event-item">
        <h3>May 8th, 2018</h3>
        <h4>George's Adventure Journey</h4>
        <span>Ensemble AKA + Ear Camera</span>
        <span>La Vitrola</span>
        <span>4602 Boul St-Laurent, Montréal QC</span>
        <span><a href="https://www.facebook.com/events/228528297694223/">facebook</a></span>
      </div>
      <div className="event-item">
        <h3 className="event-date">April 5th, 2018</h3>
        <h4>Premiere of Pop Cycle for percussion quartet</h4>
        <span>McGill Percussion Ensemble concert</span>
        <span>Pollack Hall, McGill University</span>
        <span>
          Strathcona Music Building, 555 Sherbrooke Street West, Montreal, QC
        </span>
      </div>
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