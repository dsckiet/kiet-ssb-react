import React from "react";
import NavBar from "./navbar";
export default function Register() {
  return (
    <>
      <NavBar />
      <div className="fluid-container">
        <div className="container">
          <div className="heading ">
            <p>Register</p>
          </div>
          <div className="mt-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSepziUUdU76zSrXsNvjc2fBr3bJxCVHvR4jwXXRGDUKWVHQ5A/viewform"
              width="100%"
              height="1382"
              frameborder="0"
              title="form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
