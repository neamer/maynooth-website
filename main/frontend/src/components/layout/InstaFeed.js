import React from 'react'

import Arrow from './common/arrowLong.svg';
import './InstaFeed.css'

function InstaFeed() {
  return (
    <div className="content-wrapper feed-wrapper">
      <h3 className="credentials-heading">Your dose of inspiration</h3>
      <div className="feed-grid">
        <div className="feed-pic"></div>
        <div className="feed-pic"></div>
        <div className="feed-pic"></div>
        <div className="feed-pic"></div>
        { window.innerWidth > 750 ? (<div className="feed-pic"></div>) : " " }
        { window.innerWidth > 750 ? (<div className="feed-pic"></div>) : " " }
      </div>
      <h5 className="feed-action">Follow us on instagram for more <Arrow className="arrow-long" /></h5>
    </div>
  )
}

export default InstaFeed
