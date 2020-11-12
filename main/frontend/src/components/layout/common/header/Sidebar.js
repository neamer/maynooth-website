import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ShoppingBasketIcon from "./img/basket-white.svg";
import "./Sidebar.css";

function Sidebar(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.triggerFadeOut) {
      setShow(false);
    } else {
      setTimeout(() => {
        setShow(true);
      }, 2);
    }
  }, [props.triggerFadeOut]);

  return (
    <div className={show ? "nav-sidebar nav-sidebar-active" : "nav-sidebar"}>
      <h4 className="sidebar-section">SHOP BY ROOM</h4>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link className="dropdown-link" to="/shopbyroom/livingroom">
            LIVING ROOM
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="dropdown-link" to="/shopbyroom/bedroom">
            BEDROOM
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="dropdown-link" to="/shopbyroom/kitchendining">
            KITCHEN & DINING
          </Link>
        </li>
      </ul>
      <div className="basket-button" onClick={() => props.onClick(true)}>
        <span className="basket-button-txt">SHOPPING BASKET</span>{" "}
        <ShoppingBasketIcon className="basket-icon-inline" />
      </div>
    </div>
  );
}

export default Sidebar;
