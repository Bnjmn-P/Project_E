import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <>
      <nav className="navigationBar">
        <div className="navbar-container">
          <div className="navbar-links">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/Gallery1" activeClassName="active">
              Gallery 1
            </NavLink>
            <NavLink to="/Gallery2" activeClassName="active">
              Gallery 2
            </NavLink>
            <NavLink to="/Gallery3" activeClassName="active">
              Gallery 3
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationBar;
