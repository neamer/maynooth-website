import React from "react";

import "./index.css";
import Logo from './logoOption2.svg'

function Footer() {
  return (
    <>
      <div className="footer-upper">
        <div className="footer-upper-grid">
          <div className="footer-adress">
            Street number 123
            <br />
            Town, province
            <br />
            Country
          </div>
          <div className="footer-logo-div">
            <Logo className="footer-logo" />
          </div>
          <div className="footer-list-div">
            <ul className="footer-list">
              <li className="footer-list-item">LIVING ROOM</li>
              <li className="footer-list-item">BEDROOM</li>
              <li className="footer-list-item">KITCHEN {"&"} DINING</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        Copyright &copy; Maynooth Furniture 2020
      </div>
    </>
  );
}

export default Footer;
