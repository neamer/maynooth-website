import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const [position, setPosition] = useState(0);

  let elements = [1, 2, 3, 4];

  const goLeft = () => {
    setPosition(position + 100);
  };

  const goRight = () => {
    setPosition(position - 100);
  };

  return (
    <div className="hero-slider">
      {elements.map((item, index) => {
        return (
          <div
            key={index}
            className="slider-element"
            style={{ transform: `translate(${position}%)` }}
          >
            {item}
          </div>
        );
      })}
      {position !== 0 ? (
        <button className="slider-btn slider-btn-left" onClick={goLeft}>
          Left
        </button>
      ) : (
        ""
      )}

      {position !== (elements.length - 1) * -100 ? (
        <button className="slider-btn slider-btn-right" onClick={goRight}>
          Right
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Slider;
