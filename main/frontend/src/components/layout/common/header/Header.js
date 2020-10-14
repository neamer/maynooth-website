import React, { useState } from "react";
import Sidebar from "./header/Sidebar";

import Nav from "./header/Nav";
import SidebarShadow from "./header/SidebarShadow";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [triggerFadeOut, setTriggerFadeOut] = useState(false);

  const handleSidebar = (show) => {
    if (show) {
      setSidebar(true);
    } else {
      setTriggerFadeOut(true);
      setTimeout(() => {
        setSidebar(false);
        setTriggerFadeOut(false);
      }, 500);
    }
  };

  return (
    <>
      <Nav sidebar={sidebar} onClick={handleSidebar} />
      {sidebar ? (
        <>
          {" "}
          <Sidebar triggerFadeOut={triggerFadeOut} />{" "}
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
