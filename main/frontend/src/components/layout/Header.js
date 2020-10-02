import React, { useState } from "react";

import "./Header.css";
import Logo from "./Logo-Maynooth-Option1.svg";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = (status) => setDropDown(status);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#">
          <Logo className="nav-logo" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <div className="nav-icon"></div>
          </li>
          <li className="nav-item">
            <div className="nav-icon"></div>
          </li>
          <li className="nav-item nav-dropdown">
            <div
              id="nav-dropdown-btn"
              onMouseLeave={() => handleDropDown(false)}
              onMouseOver={() => handleDropDown(true)}
            >
              SHOP BY ROOM
            </div>
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
