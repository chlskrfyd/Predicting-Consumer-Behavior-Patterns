import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";
import sirilogo from "./sirilogo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

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
        <NavDropdown title="Analysis cases" className="nav_button">
          <div className="dropbox">
            <div className="navdrop">
              <Link to={"consulting"} className="drop_font">
                Consulting
              </Link>
            </div>
            <div className="navdrop">
              <Link to={"technical"} className="drop_font">
                Analysis technology
              </Link>
            </div>
          </div>
        </NavDropdown>
      </div>
    </div>
  );
}

export default Nav;
