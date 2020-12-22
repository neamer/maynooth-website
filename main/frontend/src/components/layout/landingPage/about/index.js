import React from "react";

import "./index.css";

import LineStart from "./about-us-start.svg";
import LineMid from "./about-us-connector.svg";
import LineEnd from "./about-us-end.svg";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="content-wrapper about-wrapper">
      <h2 className="about-heading">About Maynooth</h2>
      <div>
        <LineStart className="about-line" />
        <AboutCard />
        <LineMid className="about-line" />
        <AboutCard />
        <LineMid className="about-line" />
        <AboutCard />
        <LineMid className="about-line" />
        <AboutCard />
        <LineEnd className="about-line" />
      </div>
    </div>
  );
}

/* 

IDEAS
----
  at the end of the about us section, add a "today"
  section showcasing maynooths achievmenets today
  (number of employees, stores, satisfied customers)
*/

export default About;
