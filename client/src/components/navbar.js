import React from "react";
import logo from "../utils/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="mb-5 navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <img src={logo} alt="logo" width="48px" />
        <a
          className="navbar-brand tag text-left ml-3"
          style={{ fontWeight: 700, color: "#fff" }}
          href="#"
        >
          KIET SSB Academy
        </a>
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
              <a className="nav-link " href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/trainers">
                Trainers
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/armed-forces">
                Armed Forces
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
