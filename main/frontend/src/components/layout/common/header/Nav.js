import React, { useState, useEffect } from "react";

import "./Nav.css";
import Logo from "./img/Logo-Maynooth-Option1.svg";
import Menu from "./Menu";

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

  // force the ToggleMenuOpenIcon without waiting for the fade out to finish
  const [forceClose, setForceClose] = useState(false);

  const handleClose = () => {
    setForceClose(true);
    props.onClick(false);

    setTimeout(() => {
      setForceClose(false);
    }, 500);
  };

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
          props.sidebar && !forceClose ? (
            <ToggleMenuCloseIcon onClick={handleClose} />
          ) : (
            <ToggleMenuOpenIcon onClick={() => props.onClick(true)} />
          )
        ) : (
          ""
        )}

        {showMenu ? <Menu /> : ""}
      </div>
    </div>
  );
}

export default Nav;
