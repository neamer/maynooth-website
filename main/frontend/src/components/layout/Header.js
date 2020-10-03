import React, { useState } from "react";
import HeaderMenuResponsive from "./headerComponents/HeaderMenuResponsive";

import Nav from "./headerComponents/Nav";
import SidebarShadow from "./headerComponents/SidebarShadow";

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
          <HeaderMenuResponsive triggerFadeOut={triggerFadeOut} />{" "}
          <SidebarShadow triggerFadeOut={triggerFadeOut} />{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
