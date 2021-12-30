import React from "react";
import NavBar from "./navbar";
function Contact() {
  return (
    <>
      <NavBar />
      <div className="fluid-container">
        <div className="container">
          <div className="heading">
            <p>Contact Us</p>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <span style={{ fontWeight: 700, fontSize: "1.2em" }}>
                Address:
              </span>
              <br />
              KIET Group of Institutions,
              <br />
              Ghaziabad - Meerut Highway, NH-58, Ghaziabad, Uttar Pradesh 201206
              <br />
              <br />
              <span style={{ fontWeight: 700, fontSize: "1.2em" }}>
                Phone Number:
              </span>
              <br />
              +91-9045695902
            </div>
            <div className="col-md-6 mt-2">
              <iframe
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  border: 0
                }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13991.620820300854!2d77.4987903!3d28.7522471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5c6d6eefa89a5df!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1573738664259!5m2!1sen!2sin"
                width="100%"
                height="240"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
