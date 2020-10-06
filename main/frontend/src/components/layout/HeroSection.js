import React, { useState, useEffect } from "react";
import Search from "./common/Search";
import Slider from "./heroComponents/Slider";

import "./HeroSection.css";

function HeroSection() {
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (window.innerWidth >= 750)
      setHeight(parseInt(window.innerHeight * 0.65) + "px");
    else setHeight(parseInt(window.innerHeight * 0.85) + "px");
  }, []);

  window.addEventListener("resize", () => {
    if (document.body.clientWidth >= 750)
      setHeight(parseInt(document.body.clientHeight * 0.65) + "px");
  });

  return (
    <div className="hero-container" style={{ height: height }}>
      <Slider />
      <Search />
    </div>
  );
}

export default HeroSection;
