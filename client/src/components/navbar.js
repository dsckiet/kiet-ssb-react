import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <nav className="mb-5 navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <img src="/assets/images/logo.png" alt="logo" width="48px" />
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="navbar-brand tag text-left ml-3"
          style={{ fontWeight: 700, color: "#fff" }}
          to="/"
        >
          KIET SSB Academy
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 0, fontSize: "18px" }}
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto nav justify-content-end custom_nav"
            style={{ width: "100%" }}
          >
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link "
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#forces">
                Armed Forces
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link"
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="nav-link"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </NavLink>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="dropdown-item"
                  to="/about"
                >
                  About SSB Academy
                </NavLink>
                <hr style={{ padding: "0", margin: "8px auto" }} />
                <NavLink
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="dropdown-item"
                  to="/trainers"
                >
                  Trainers
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
