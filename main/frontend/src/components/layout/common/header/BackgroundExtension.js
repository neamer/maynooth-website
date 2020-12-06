import React from "react";

import "./BackgroundExtension.css";

function BackgroundExtension() {
  // removed for now, adds curve on second section extension
  return (
    <div
      className="background-extension"
      style={{
        backgroundImage: 'url("static/frontend/extension-alt.svg")',
      }}
    ></div>
  );
}

export default BackgroundExtension;
