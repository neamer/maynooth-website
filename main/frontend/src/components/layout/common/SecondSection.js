import React from "react";

import "./SecondSection.css";

function SecondSection(props) {
  return (
    <div
      style={props.style}
      className={
        props.GoUnder ? "second-section second-section-under" : "second-section"
      }
      id={props.id}
    >
      {props.children}
    </div>
  );
}

export default SecondSection;
