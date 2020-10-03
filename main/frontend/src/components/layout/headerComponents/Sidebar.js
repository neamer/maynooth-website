import React, { useEffect, useState } from "react";

import ShoppingBasketIcon from "./basket-white.svg";
import "./Sidebar.css";

function HeaderMenuResponsive(props) {
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
        <li className="sidebar-list-item">LIVING ROOM</li>
        <li className="sidebar-list-item">BEDROOM</li>
        <li className="sidebar-list-item">KITCHEN & DINING</li>
      </ul>
      <div className="basket-button">
        <span className="basket-button-txt">SHOPPING BASKET</span>{" "}
        <ShoppingBasketIcon className="basket-icon-inline" />
      </div>
    </div>
  );
}

export default HeaderMenuResponsive;
