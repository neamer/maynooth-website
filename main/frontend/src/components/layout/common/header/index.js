import React, { useState } from "react";
import Sidebar from "./Sidebar";

import Nav from "./Nav";
import SidebarShadow from "./SidebarShadow";

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
