import React, { useState, useEffect } from "react";
import Slider from "./heroComponents/Slider";

import "./HeroSection.css";

function HeroSection() {
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (window.innerHeight >= 750)
      setHeight(parseInt(window.innerHeight * 0.65) + "px");
    else setHeight(parseInt(window.innerHeight * 0.85) + "px");
  }, []);

  return (
    <div className="hero-container" style={{ height: height }}>
      <Slider />
    </div>
  );
}

export default HeroSection;
