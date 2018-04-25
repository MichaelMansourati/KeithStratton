import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import favicon from "../assets/icons/favicon.ico"

import '../styles/index.css'
import '../styles/nav.css'
import '../styles/title-container.css'

export default ({ children }) =>
  <div id="main-container">
    <div id="inner-main-container">
    <Helmet>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <div id="title-container">
      <h1 id="title">Keith Stratton</h1>
      <h3 id="subtitle">
        <div className="subtitle-row">
          <div className="subtitle-item" >composer. </div>
          <div className="subtitle-item" >arranger. </div>
        </div>
        <div className="subtitle-row">
          <div className="subtitle-item" >performer. </div>
          <div className="subtitle-item" >educator.</div>
        </div>
      </h3>
    </div>
    <div id="nav-content-container">
      <nav>
        <ul id="nav-list">
          <div className="row-break">
            <li className="nav-item"><Link to="/">home</Link></li>
            <li className="nav-item"><Link to="/biography/">biography</Link></li>
            <li className="nav-item"><Link to="/list_of_works/">list of works</Link></li>
          </div>
          <div className="row-break">
            <li className="nav-item"><Link to="/news_and_events/">news and events</Link></li>
            <li className="nav-item"><Link to="/contact/">contact</Link></li>
          </div>
        </ul>
        <ul id="nav-list-mobile">
          <div className="row-break">
            <li className="nav-item"><Link to="/">home</Link></li>
            <li className="nav-item"><Link to="/biography/">biography</Link></li>
          </div>
          <div className="row-break">
            <li className="nav-item"><Link to="/news_and_events/">news and events</Link></li>
          </div>
          <div className="row-break">
            <li className="nav-item"><Link to="/list_of_works/">list of works</Link></li>
            <li className="nav-item"><Link to="/contact/">contact</Link></li>
          </div>
        </ul>
      </nav>
      {children()}
      <div id="right-content-margin"></div>
    </div>
    </div>
    <div id="footer"><span id="footer-text">All photos by Francis Leduc-Bélanger. Design by Michael Mansourati. All rights reserved, © Keith Stratton 2018</span></div>
  </div>
