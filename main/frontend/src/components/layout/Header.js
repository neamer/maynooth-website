import React, { useState, useEffect } from "react";

import "./Header.css";
import Logo from "./Logo-Maynooth-Option1.svg";
import DropDownArrow from "./dropdown.svg";

// CHANGE TO HAMBURGER MENU ICON

function ToggleMenuIcon(props) {
  return <div className={props.className}></div>;
}

function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleButton = (status) => setShowButton(status);
  const handleDropDown = (status) => setDropDown(status);

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

        <ToggleMenuIcon
          className={showButton ? "nav-icon" : "nav-icon display-none"}
        />

        <ul className={showMenu ? "nav-menu" : "display-none"}>
          <li className="nav-item">
            <div className="nav-icon"></div>
          </li>
          <li className="nav-item">
            <div className="nav-icon"></div>
          </li>
          <li
            className="nav-item nav-dropdown"
            onMouseLeave={() => handleDropDown(false)}
          >
            <div
              id="nav-dropdown-btn"
              onMouseOver={() => handleDropDown(true)}
              onClick={() => handleDropDown(!dropDown)}
            >
              SHOP BY ROOM
            </div>
            <DropDownArrow
              className={
                dropDown
                  ? "dropdown-arrow dropdown-arrow-active"
                  : "dropdown-arrow"
              }
            />
            <ul
              className={
                dropDown
                  ? "nav-dropdown-container"
                  : "nav-dropdown-container display-none"
              }
            >
              <li className="nav-dropdown-item">LIVING ROOM</li>
              <li className="nav-dropdown-item">BEDROOM</li>
              <li className="nav-dropdown-item">KITCHEN & DINING</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
