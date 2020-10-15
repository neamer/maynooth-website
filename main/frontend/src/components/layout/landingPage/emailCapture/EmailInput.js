import React from "react";

import "./EmailInput.css";

function EmailInput() {
  return (
    <div className="email-input-div">
      <input
        type="text"
        className="email-input"
        placeholder="Enter your email"
      />
      <button className="email-btn">SIGN UP</button>
    </div>
  );
}

export default EmailInput;
