import React, { useState } from "react";

import "./SortBy.css";

function SortBy(props) {
  const [selected, setSelected] = useState("Newest");
  const [menuStyle, setMenuStyle] = useState({});

  const openMenu = () => {
    setMenuStyle({ height: "180px" });
  };

  const closeMenu = () => {
    setMenuStyle({ height: "0px" });
  };

  return (
    <div>
      <div
        className={
          props.Light ? "sortby-main sortby-main-light" : "sortby-main"
        }
        onMouseOver={openMenu}
        onMouseLeave={closeMenu}
      >
        {selected}
        <div className="sortby-menu-div" style={menuStyle}>
          <div
            className={
              props.Light
                ? "sortby-menu-item sortby-menu-item-light"
                : "sortby-menu-item"
            }
            onClick={() => {
              setSelected("Newest");
              closeMenu();
              props.onClick(1, "NEWEST");
            }}
          >
            Newest
          </div>
          <div
            className={
              props.Light
                ? "sortby-menu-item sortby-menu-item-light"
                : "sortby-menu-item"
            }
            onClick={() => {
              setSelected("Oldest");
              closeMenu();
              props.onClick(1, "OLDEST");
            }}
          >
            Oldest
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
