import React, { useState } from "react";
import HeaderMenuResponsive from "./headerComponents/HeaderMenuResponsive";

import Nav from "./headerComponents/Nav";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Nav sidebar={sidebar} onClick={setSidebar} />
      {sidebar ? <HeaderMenuResponsive /> : ""}
    </>
  );
}

export default Header;
