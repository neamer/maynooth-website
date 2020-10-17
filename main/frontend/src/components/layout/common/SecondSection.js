import React from 'react'

import './SecondSection.css'

function SecondSection(props) {
  return (
    <div className={ props.GoUnder ? "second-section second-section-under" : "second-section" }>
      {props.children}
    </div>
  )
}

export default SecondSection
