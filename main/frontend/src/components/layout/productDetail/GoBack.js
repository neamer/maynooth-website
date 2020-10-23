import React from "react";

import "./GoBack.css";
import ArrowIcon from "../common/img/arrowLong.svg";

function GoBack() {
  return (
    <div className="go-back-wrapper ">
      <span className="go-back">
        <ArrowIcon className="go-back-arrow" />
        GO BACK
      </span>
    </div>
  );
}

export default GoBack;
