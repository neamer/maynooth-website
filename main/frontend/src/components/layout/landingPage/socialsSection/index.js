import React from 'react'

import Credentials from './Credentials'
import InstaFeed from './InstaFeed'

import './index.css'

function SocialsSection() {
  return (
    <div className="socials-section" style={{backgroundImage : 'url(static/frontend/background-3.svg)'}}>
      <Credentials />
      <InstaFeed />
    </div>
  )
}

export default SocialsSection
