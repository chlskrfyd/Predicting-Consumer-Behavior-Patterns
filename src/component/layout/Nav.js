import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";
import sirilogo from "./sirilogo.png";

function Nav() {
  return (
    <div>
      <div className="nav_navbar">
        <Link className="navbarMenu" to={"/"}>
          <img src={sirilogo} className="logo" alt="SIRI logo" />
        </Link>
        <Link className="navbarMenu" to={"/"}>
          Home
        </Link>
        <Link className="navbarMenu" to={"about"}>
          About
        </Link>
        <Link className="navbarMenu" to={"consulting"}>
          Consulting
        </Link>
      </div>
    </div>
  );
}

export default Nav;
