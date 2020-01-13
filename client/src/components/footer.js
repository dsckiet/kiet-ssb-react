import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-3">
            <h4>Links/References</h4>
            <img
              className="mt-3"
              src="https://www.kiet.edu/assets/frontend/img/logo.png"
              width="60%"
              alt=""
            />
            <br />
            <br />
            <span>
              KIET website: <a href="https://www.kiet.edu">kiet.edu</a>
            </span>
            <br />
            <span>
              SSB website: <a href="https://ssb.nic.in/">ssb.nic.in</a>
            </span>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <h4>About Us</h4>
            <p>
              KIET SSB Academy has been established with the aim of imparting
              pre selection training for SSB interview to students aspiring to
              join Armed Forces as officers. The training at KIET SSB Academy
              helps to inculcate and develop Leadership Qualities, Communication
              Skills and Officer like Qualities (OLQ) in students, thus enabling
              them to confidently face the SSB Interview successfully.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <h4>Contact Us</h4>
            <p>
              <span style={{ fontWeight: 700 }}>KIET SSB Academy Office:</span>
              <br />
              KIET Group of Institutions, <br />
              Ghaziabad - Meerut Highway, NH-58, Ghaziabad, <br />
              Uttar Pradesh 201206 <br />
              <br />
              <span style={{ fontWeight: 700 }}>Mobile Number:</span>
              <br />
              +91-9634815154, +91-9045695902
              <br />
              <br />
              <span style={{ fontWeight: 700 }}>Email ID:</span>
              <br />
              <a href="mailto:ssb@kiet.edu" target="blank">
                ssb@kiet.edu
              </a>
            </p>
          </div>
        </div>
        <hr style={{ background: "#d5d5d5" }} />
        <p>
          &copy; copyright KIET Group of Institutions. All Rights Reserved. |
          Website Designed by
          <a href="http://www.dsckiet.tech?utm_source=ssbkiet">DSC KIET</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
