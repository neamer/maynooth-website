import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const [position, setPosition] = useState(0);

  let elements = [
    {
      caption: "The perfect sofa for your home",
      action: "SHOP SOFAS",
      src: "static/frontend/slide1.png",
    },
    {
      caption: "Slide 2",
      action: "BUTTON",
      src: "{% static './frontend/slide1.png' %}",
    },
    {
      caption: "Slide 2",
      action: "BUTTON",
      src: "{% static './frontend/slide1.png' %}",
    },
  ];

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
            style={{
              transform: `translate(${position}%)`,
              backgroundImage: `url(${item.src})`,
            }}
          >
            <div className="slider-content-wrapper">
              <h1 className="slider-caption">{item.caption}</h1>
              <button className="slider-action">{item.action}</button>
            </div>
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
