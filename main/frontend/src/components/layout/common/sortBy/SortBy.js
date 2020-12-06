import React, { useState } from "react";

import "./SortBy.css";

function SortBy() {
  const [selected, setSelected] = useState("newest");
  const [menuStyle, setMenuStyle] = useState({});

  const openMenu = () => {
    setMenuStyle({ height: "auto" });
  };

  const closeMenu = () => {
    setMenuStyle({ height: "0" });
  };

  return (
    <div>
      <div
        className="sortby-main sortby-main-light"
        onMouseOver={openMenu}
        onMouseLeave={closeMenu}
      >
        {selected}
        <div className="sortby-menu-div" style={menuStyle}>
          <div className="sortby-menu-item sortby-menu-item-selected">
            newest
          </div>
          <div className="sortby-menu-item">oldest</div>
          <div className="sortby-menu-item">best match</div>
        </div>
      </div>
    </div>
  );
}

export default SortBy;
