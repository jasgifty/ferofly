import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__listItem">HOME</li>
        <li className="header__listItem">ABOUT</li>
        <li className="header__listItem">ROOMS</li>
        <li className="header__listItem">SERVICES</li>
        <li className="header__listItem">GALLERY</li>
        <li className="header__listItem">SEE & DO</li>
        <li className="header__listItem">CONATACT</li>
        <li className="header__listItem box">Book A Room</li>
      </ul>
    </div>
  );
}

export default Header;
