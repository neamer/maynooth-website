import React from "react";

import { Link } from "react-router-dom";

import ShoppingBasketIcon from "./img/basket-black.svg";
import "./Menu.css";

function Menu(props) {
  return (
    <>
      <ul className="nav-menu">
        <li className="nav-item">
          <div className="nav-icon" onClick={() => props.openBasket(true)}>
            <ShoppingBasketIcon className="basket-icon" />
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-line">|</span>
        </li>
        <li className="nav-item">
          <Link className="dropdown-link" to="/shopbyroom/living-room">
            LIVING ROOM
          </Link>
        </li>
        <li className="nav-item">
          <Link className="dropdown-link" to="/shopbyroom/bedroom">
            BEDROOM
          </Link>
        </li>
        <li className="nav-item">
          <Link className="dropdown-link" to="/shopbyroom/kitchen-and-dining">
            KITCHEN & DINING
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
