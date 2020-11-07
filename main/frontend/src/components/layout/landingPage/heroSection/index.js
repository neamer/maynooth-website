import React, { useState, useEffect } from "react";
import Search from "../search";
import Slider from "./Slider";

import "./index.css";

function HeroSection() {
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (window.innerWidth <= 750)
      setHeight(parseInt(window.innerHeight * 0.8) + "px");
    else if (window.innerWidth <= 1366)
      setHeight(parseInt(window.innerHeight * 0.5) + "px");
    else setHeight(parseInt(window.innerHeight * 0.6) + "px");
  }, []);

  const RedirectToSearch = (input) => {
    console.log(input);
    if (input !== null) {
      window.location.replace(`/#/search/${input.replace(/-/g, " ")}`);
    }
  };

  window.addEventListener("resize", () => {
    if (document.body.clientWidth <= 750) {
    } else if (window.innerWidth <= 1366)
      setHeight(parseInt(window.innerHeight * 0.5) + "px");
    else setHeight(parseInt(window.innerHeight * 0.6) + "px");
  });

  return (
    <div className="hero-container" style={{ height: height }}>
      <Slider />
      <Search onClick={RedirectToSearch} />
    </div>
  );
}

export default HeroSection;
