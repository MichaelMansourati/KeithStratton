import React from 'react'
import Link from 'gatsby-link'
import corpus from '../assets/corpus.js'
import AudioPlayer from '../components/AudioPlayer.js'

import '../styles/index.css'


const worksArr = corpus.works


function WorksList(props) {
  const worksArr = props.worksArr;
  const listWorks = worksArr.map((work) =>
    <li key={work.title.toString()}  className="works-list-item">
      {work.shouldPrintYear &&
      <h2 className="works-list-year">{work.year}</h2>
      }
      <h3>{work.title}</h3>
      {work.recording.length > 0 &&
        <span>{work.recording}</span>
      }
      {work.context.length > 0 &&
        <span>{work.context}</span>
      }
      <span>{work.ensemble}</span>
      {work.programNotes.length > 0 &&
        <span>{work.programNotes}</span>
      }
      <span>{work.duration}'</span>
      {work.audio &&
      <span>
        <AudioPlayer audio={work.audio} />
        <br />
      </span>
      }
    </li>
  );
  return (
    <ul id="works-list">{listWorks}</ul>
  );
}

const List_of_works = () => (
  <div>
    <h2>List of Works</h2>
    <WorksList worksArr={worksArr} />
  </div>
)

export default List_of_works