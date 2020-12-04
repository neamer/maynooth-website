import React from "react";

import "./BackgroundExtension.css";

function BackgroundExtension() {
  return (
    <div
      className="background-extension"
      style={{
        backgroundImage: 'url("static/frontend/background-extension.svg")',
      }}
    ></div>
  );
}

export default BackgroundExtension;
