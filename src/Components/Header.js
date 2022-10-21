import React from "react";
import Logo from "./assets/Logo.png"

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>
      <h1>
        THE BEACON STORE
      </h1>
    </div>
  );
}

export default Header;
