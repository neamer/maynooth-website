import React from "react";

import "./Header.css";
import Logo from "./Logo-Maynooth-Option1.svg";

function Header() {
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
          <li className="nav-item">
            <div id="nav-dropdown-btn">SHOP BY ROOM</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
