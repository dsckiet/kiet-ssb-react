import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

const Header = () => {
  const start = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fluid-container">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/images/Gallery img/ssb_acad_3.jpg"
                  alt=""
                  height="465px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/images/Gallery img/ssb_acad_5.JPG"
                  alt=""
                  height="465px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/images/Gallery img/ssb_acad_7.jpg"
                  alt=""
                  height="465px"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-3 col-md-12 side-links">
            <NavLink
              className="col-12 btn mb-4 p-4"
              onClick={start}
              to="/whyTraining"
            >
              Why Training/Grooming is necessary for SSB?
            </NavLink>
            <NavLink className="col-12 btn mb-4 p-4" onClick={start} to="/day">
              Day wise schedule and Test at SSB
            </NavLink>
            <NavLink
              className="col-12 btn mb-4 p-4"
              onClick={start}
              to="/whyKIETSSB"
            >
              Why to join the Kiet SSB Academy
            </NavLink>
            <NavLink
              className="col-12 btn mb-4 p-4"
              onClick={start}
              to="/armed-forces"
            >
              How to join Armed <br /> Forces
            </NavLink>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="about mt-4">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-sm-12 pt-2 text-center">
                <img
                  className="img-fluid"
                  src="assets/images/logo.png"
                  alt=""
                />
              </div>
              <div className="col-lg-9 col-sm-12">
                <p>
                  <span style={{ color: "#4285f4", fontSize: "20px" }}>
                    <strong>KIET SSB Academy</strong>
                  </span>{" "}
                  has been established with the aim of imparting pre selection
                  SSB interview to candidates aspiring to join Armed Forces as
                  officers. The training at KIET SSB Academy seeks prepare
                  candidates for inculcate and develop Leadership Qualities,
                  Communication Skills and Officer like Qualities (OLQ), thus
                  enabling the individuals to confidently face the SSB Interview
                  successfully. The KIET SSB Academy has excellent
                  infrastructure. A separate training area in the Campus has
                  complete obstacle course consisting of Progressive group
                  tasks, Command tasks, individual obstacles and various other
                  group testing facilities.
                </p>
                <div>
                  <NavLink
                    onClick={start}
                    to="/register"
                    className="col-12 btn btn-success mb-4"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="forces">
        <div className="forces mt-5">
          <p className="heading">Armed Forces</p>
          <div className="trainers mt-5">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <a
                  href="https://www.indiannavy.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="single_service">
                    <div className="thumb">
                      <div className="card p-5 armed-card">
                        <img
                          className="img-fluid"
                          src="assets/images/navy.png"
                          alt=""
                        />
                        <p
                          className="text-center m-5"
                          style={{
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "black"
                          }}
                        >
                          Indian Navy
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  href="https://www.indiannavy.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="single_service">
                    <div className="thumb">
                      <div className="card p-5 armed-card">
                        <img
                          className="img-fluid"
                          src="assets/images/Army.png"
                          alt=""
                        />
                        <p
                          className="text-center m-5"
                          style={{
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "black"
                          }}
                        >
                          Indian Army
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6 mx-auto">
                <a
                  href="https://www.indiannavy.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="single_service">
                    <div className="thumb">
                      <div className="card p-5 armed-card">
                        <img
                          className="img-fluid"
                          src="assets/images/airforce.png"
                          alt=""
                        />
                        <p
                          className="text-center m-5"
                          style={{
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "black"
                          }}
                        >
                          Indian Air Force
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="complex mt-5 ">
        <div className="row">
          <div className="col-lg-9 col-sm-8"></div>
          <div
            className="col-lg-3 col-sm-4 card cardBtn text-center"
            style={{ height: "40px", backgroundColor: "#4285f4" }}
          >
            <NavLink
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/armed-forces"
            >
              <h5 className="btnText mt-1" style={{ fontSize: "24px" }}>
                How to Join Armed Forces
                <span>
                  <img
                    className="img-fluid ml-2"
                    src="assets/images/left-arrow.png"
                    alt=""
                    width="24px"
                  />
                </span>
              </h5>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="glimpses mt-5 pt-3 pb-3">
        <div className="container">
          <p className="heading">Our Glimpses</p>
          <div>
            <div className="row">
              <div className="col-4 mb-4 pics">
                <img
                  className="img-fluid card rounded"
                  src="assets/images/Gallery img/ssb_acad_8.JPG"
                  alt=""
                />
              </div>
              <div className="col-4 mb-4 pics">
                <img
                  className="img-fluid rounded"
                  src="assets/images/Gallery img/ssb_acad_7.JPG"
                  alt=""
                />
              </div>
              <div className="col-4 mb-4 pics">
                <img
                  className="img-fluid rounded"
                  src="assets/images/Gallery img/ssb_acad_6.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infrastructure mt-4">
        <div className="container">
          <div className="heading">
            <p>Infrastructure</p>
          </div>
          <p>
            The KIET SSB Academy has excellent infrastructure. A separate
            training area in the Campus has complete obstacle course consisting
            of Progressive group tasks, Command tasks, individual obstacles and
            various other group testing facilities. An air conditioned Classroom
            facility is available with all requisite facilities for indoor
            training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
