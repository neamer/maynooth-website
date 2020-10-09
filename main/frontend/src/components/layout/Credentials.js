import React from 'react'

import './Credentials.css';

function Credentials() {
  return (
    <div className="content-wrapper">
      <div className="credentials-wrapper">
        <h3 className="credentials-heading">Customer Credentials</h3>
        <div className="credentials-slider">
          <div className="credentials-card">
          <div className="credentials-profile">
              <div className="credentials-picture"></div>
              <div>
                <div className="credentials-name">John Doe</div>
                <div className="credentials-title">Made up person, loves Maynooth</div>
              </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut nemo ducimus, distinctio facere nihil debitis odit incidunt provident deleniti, quam accusantium expedita! Tempore ipsa ad nesciunt at natus! Sunt voluptatum, consectetur dignissimos saepe facilis
          </div>
          <div className="credentials-card">
            <div className="credentials-profile">
              <div className="credentials-picture"></div>
              <div>
                <div className="credentials-name">Jon Jones</div>
                <div className="credentials-title">UFC Champion, furniture enthusiast</div>
              </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut nemo ducimus, distinctio facere nihil debitis odit incidunt provident deleniti, quam accusantium expedita! Tempore ipsa ad nesciunt at natus! Sunt voluptatum, consectetur dignissimos saepe facilis
          </div>
          <div className="credentials-card">
          <div className="credentials-profile">
              <div className="credentials-picture"></div>
              <div>
                <div className="credentials-name">Jane Doe</div>
                <div className="credentials-title">Reccomends Maynooth to her friends</div>
              </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut nemo ducimus, distinctio facere nihil debitis odit incidunt provident deleniti, quam accusantium expedita! Tempore ipsa ad nesciunt at natus! Sunt voluptatum, consectetur dignissimos saepe facilis
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credentials
