import React, { useState } from "react";

import { Link } from "react-router-dom";

import DropDownArrow from "./img/dropdown.svg";
import ShoppingBasketIcon from "./img/basket-black.svg";
import "./Menu.css";

function Menu() {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = (status) => setDropDown(status);

  return (
    <>
      <ul className="nav-menu">
        <li className="nav-item">
          <div className="nav-icon">
            <ShoppingBasketIcon className="basket-icon" />
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-line">|</span>
        </li>
        <li className="nav-item">
          <Link className="dropdown-link" to="/shopbyroom/livingroom">
            LIVING ROOM
          </Link>
        </li>
        <li className="nav-item">
          <Link className="dropdown-link" to="/shopbyroom/bedroom">
            BEDROOM
          </Link>
        </li>
        <li className="nav-item">
          <Link className="dropdown-link" to="/shopbyroom/kitchen">
            KITCHEN & DINING
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
