import React from 'react'

import Camera from '../assets/images/Camera.jpg'

import '../styles/index.css'

const News_and_events = () => (
  <div className="content-container">
    <img src={Camera} />
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

export default News_and_events