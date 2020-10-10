import React from 'react'

import './SecondSection.css'

function SecondSection(props) {
  return (
    <div className="second-section">
      {props.children}
    </div>
  )
}

export default SecondSection
