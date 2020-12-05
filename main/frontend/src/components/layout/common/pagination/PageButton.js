import React from "react";

import "./PageButton.css";

function PageButton(props) {
  return (
    <div
      className={
        props.Light
          ? props.active
            ? "page-btn-light page-btn-light-active"
            : "page-btn-light"
          : props.active
          ? "page-btn page-btn-active"
          : "page-btn"
      }
      onClick={() => props.onClick(props.page)}
    >
      {props.page}
    </div>
  );
}

export default PageButton;
