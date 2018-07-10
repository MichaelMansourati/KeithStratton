import React from 'react'
import corpus from '../assets/corpus.js'
import AudioPlayer from '../components/AudioPlayer.js'
import Img from 'gatsby-image'

import '../styles/list_of_works.css'

const worksArr = corpus.works

function WorksList(props) {
  console.log(props);
  const worksArr = props.worksArr
  console.log(worksArr);
  const listWorks = worksArr.map(work => (
    <li key={work.title.toString()} className="works-list-item">
      {work.shouldPrintYear && <h3 className="works-list-year">{work.year}</h3>}
      <h4>{work.title}</h4>
      {work.context.length > 0 && <span>{work.context}</span>}
      <span>{work.ensemble}</span>
      {work.programNotes.length > 0 && <span>{work.programNotes}</span>}
      <span>{work.duration}'</span>
      {work.audio && (
        <span>
          <AudioPlayer audio={work.audio} />
          <br />
        </span>
      )}
    </li>
  ))
  return <ul id="works-list">{listWorks}</ul>
}

export default ({ data }) => (
  <div className="content-container">
    <Img sizes={data.file.childImageSharp.sizes} />
    <div className="text-area">
      <h2>List of Works</h2>
      <WorksList worksArr={worksArr} />
    </div>
  </div>
)

export const query = graphql`
  query WorksImageQuery {
    file(relativePath: { eq: "KeithCagibiBW.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`
