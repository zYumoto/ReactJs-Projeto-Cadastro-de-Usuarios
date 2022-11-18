import "./Logo.css";
import React from "react";
import logo from "../../assets/logoE.png";

export default (props) => {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
    </aside>
  );
};