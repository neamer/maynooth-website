import React from "react";

import { Link } from "react-scroll";

import "./PageButton.css";

function PageButton(props) {
  return (
    <Link to="scroll-anchor" smooth={true} duration={500}>
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
    </Link>
  );
}

export default PageButton;
