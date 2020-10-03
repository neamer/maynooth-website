import React, { useState, useEffect } from "react";

import "./Nav.css";
import Logo from "./Logo-Maynooth-Option1.svg";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderMenuResponsive from "./HeaderMenuResponsive";

// CHANGE TO HAMBURGER MENU ICON

function ToggleMenuOpenIcon(props) {
  return (
    <div className="nav-toggle-open-icon" onClick={() => props.onClick(true)}>
      <div className="nav-toggle-line"></div>
      <div className="nav-toggle-line"></div>
      <div className="nav-toggle-line"></div>
    </div>
  );
}

function ToggleMenuCloseIcon(props) {
  return (
    <div className="nav-toggle-close-icon" onClick={() => props.onClick(false)}>
      <div className="nav-toggle-close-line"></div>
      <div className="nav-toggle-close-line"></div>
    </div>
  );
}

function Nav(props) {
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 750) {
      setShowMenu(true);
      setShowButton(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 750) {
      setShowButton(false);
      setShowMenu(true);
    } else {
      setShowButton(true);
      setShowMenu(false);
    }
  });

  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#">
          <Logo className="nav-logo" />
        </a>

        {showButton ? (
          props.sidebar ? (
            <ToggleMenuCloseIcon onClick={() => props.onClick(false)} />
          ) : (
            <ToggleMenuOpenIcon onClick={() => props.onClick(true)} />
          )
        ) : (
          ""
        )}

        {showMenu ? <HeaderDesktopMenu /> : ""}
      </div>
    </div>
  );
}

export default Nav;
