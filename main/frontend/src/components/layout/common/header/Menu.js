import React, { useState } from "react";

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
    </>
  );
}

export default Menu;
