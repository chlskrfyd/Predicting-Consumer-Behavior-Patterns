import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";
import sirilogo from "./sirilogo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

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
        <NavDropdown title="Consulting" style={{color:"white"}}>
              <NavDropdown.Item >
                <Link to={"customer"} style={{ textDecoration: "none" }}>
                  <p className="drop_navbarMenu">고객이탈예측</p>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={"category"}  style={{ textDecoration: "none" }}>
                  <p className="drop_navbarMenu">구매카테고리예측</p>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={"segmentation"}  style={{ textDecoration: "none" }}>
                  <p className="drop_navbarMenu">고객세분화</p>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={"business"}  style={{ textDecoration: "none" }}>
                  <p className="drop_navbarMenu">비즈니스전략</p>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
      </div>
    </div>
  );
}

export default Nav;
