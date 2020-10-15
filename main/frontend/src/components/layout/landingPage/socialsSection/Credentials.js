import React, { useEffect, useState } from 'react'

import ArrowIcon from '../../common/img/arrowDark.svg'

import './Credentials.css';

function Credentials() {
  const [position, setPosition] = useState(0);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (document.body.clientWidth <= 750) {
      setResponsive(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (document.body.clientWidth <= 750) {
      setResponsive(true);
    }
  });

  const goLeft = () => {
    setPosition((currPosition) => currPosition - 1);
  };

  const goRight = () => {
    setPosition((currPosition) => currPosition + 1);
  };

  return (
    <div className="content-wrapper">
      <div className="credentials-wrapper">
        <h3 className="credentials-heading">Customer Credentials</h3>
        <div className="credentials-slider">
          <div className="credentials-card" style={ responsive ? {transform: `translate(${
                    position * -300
                  }px)`} : {}}>
          <div className="credentials-profile">
              <div className="credentials-picture"></div>
              <div>
                <div className="credentials-name">John Doe</div>
                <div className="credentials-title">Made up person, loves Maynooth</div>
              </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut nemo ducimus, distinctio facere nihil debitis odit incidunt provident deleniti, quam accusantium expedita! Tempore ipsa ad nesciunt at natus! Sunt voluptatum, consectetur dignissimos saepe facilis
          </div>
          <div className="credentials-card" style={ responsive ? {transform: `translate(${
                    position * -300
                  }px)`} : {}}>
            <div className="credentials-profile">
              <div className="credentials-picture"></div>
              <div>
                <div className="credentials-name">Jon Jones</div>
                <div className="credentials-title">UFC Champion, furniture enthusiast</div>
              </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut nemo ducimus, distinctio facere nihil debitis odit incidunt provident deleniti, quam accusantium expedita! Tempore ipsa ad nesciunt at natus! Sunt voluptatum, consectetur dignissimos saepe facilis
          </div>
          <div className="credentials-card" style={ responsive ? {transform: `translate(${
                    position * -300
                  }px)`} : {}}>
          <div className="credentials-profile">
              <div className="credentials-picture"></div>
              <div>
                <div className="credentials-name">Jane Doe</div>
                <div className="credentials-title">Reccomends Maynooth to her friends</div>
              </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut nemo ducimus, distinctio facere nihil debitis odit incidunt provident deleniti, quam accusantium expedita! Tempore ipsa ad nesciunt at natus! Sunt voluptatum, consectetur dignissimos saepe facilis
          </div>

          {position !== 0 && responsive ? (
            <button
              className="showcase-btn showcase-btn-left"
              onClick={goLeft}
            >
              <ArrowIcon className="arrow arrow-left" />
            </button>
          ) : (
            ""
          )}

          {position !== 2 && responsive ? (
            <button
              className="showcase-btn showcase-btn-right"
              onClick={goRight}
            >
              <ArrowIcon className="arrow" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Credentials
