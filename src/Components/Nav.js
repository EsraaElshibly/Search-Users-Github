import React from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="parent">
          <div className="logo">
            <h2>msp</h2>
          </div>
          <div className="items">
            <ul>
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact us">Contact Us</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
