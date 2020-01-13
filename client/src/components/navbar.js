import React from "react";

const Navbar = () => {
  return (
    <nav class="mb-5 navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <div class="container">
        <img src="../utils/assets/images/logo.png" alt="logo" width="48px" />
        <a
          class="navbar-brand tag text-left ml-3"
          style={{fontWeight: 700, color: "#fff"}}
          href="#"
        >
          KIET SSB Academy
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:0, fontSize: '18px'}}
        >
          <i class="fa fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav mr-auto nav justify-content-end custom_nav"
            style={{width: "100%"}}
          >
            <li class="nav-item">
              <a class="nav-link " href="#">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="./about.html">
                  About SSB Academy
                </a>
                <hr style={{padding:0, margin: "8px auto"}} />
                <a class="dropdown-item" href="./trainer.html">
                  Trainers
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#forces">
                Armed Forces
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./gallery.html">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./register.html">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">
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
