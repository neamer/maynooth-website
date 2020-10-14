import React, { useEffect, useState } from "react";

import "./SidebarShadow.css";

function SidebarShadow(props) {
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
    <div
      onClick={() => props.onClick(false)}
      className={
        show
          ? "nav-sidebar-shadow nav-sidebar-shadow-active"
          : "nav-sidebar-shadow"
      }
    ></div>
  );
}

export default SidebarShadow;
