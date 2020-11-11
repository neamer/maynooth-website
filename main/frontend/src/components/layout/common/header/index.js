import React, { useState } from "react";
import Sidebar from "./Sidebar";

import Nav from "./Nav";
import SidebarShadow from "./SidebarShadow";

function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const [triggerFadeOut, setTriggerFadeOut] = useState(false);

  const handleSidebar = (show) => {
    if (show) {
      setSidebar(true);
      document.body.style.overflow = "hidden";
    } else {
      setTriggerFadeOut(true);
      setTimeout(() => {
        setSidebar(false);
        document.body.style.overflow = "unset";
        setTriggerFadeOut(false);
      }, 500);
    }
  };

  return (
    <>
      <Nav
        sidebar={sidebar}
        openBasket={props.onClick}
        onClick={handleSidebar}
      />
      {sidebar ? (
        <>
          {" "}
          <Sidebar
            triggerFadeOut={triggerFadeOut}
            onClick={props.onClick}
          />{" "}
          <SidebarShadow
            onClick={handleSidebar}
            triggerFadeOut={triggerFadeOut}
          />{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
