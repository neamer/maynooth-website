import React from "react";

import "./EmailCapture.css";
import EmailInput from "./EmailInput";

function EmailCapture() {
  return (
    <div className="email-capture-div">
      <div className="content-wrapper">
        <p className="email-capture-p">
          Want to be the first to know when we have exciting new arrivals, or
          when we have awesome clearance deals?
        </p>
        <h3 className="email-capture-h">Sign up for our newsletter</h3>
        <EmailInput />
      </div>
    </div>
  );
}

export default EmailCapture;
