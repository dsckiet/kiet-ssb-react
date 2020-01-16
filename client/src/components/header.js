import React from "react";
import image3 from "../utils/assets/images/Gallery img/ssb_acad_3.jpg";
import image5 from "../utils/assets/images/Gallery img/ssb_acad_5.JPG";
import image8 from "../utils/assets/images/Gallery img/ssb_acad_8.JPG";
import image7 from "../utils/assets/images/Gallery img/ssb_acad_7.JPG";
import image6 from "../utils/assets/images/Gallery img/ssb_acad_6.JPG";
import air from "../utils/assets/images/airforce.png";
import navy from "../utils/assets/images/navy.png";
import army from "../utils/assets/images/Army.png";
import arrow from "../utils/assets/images/left-arrow.png";
import logo from "../utils/assets/images/logo.png";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image5} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-3 col-md-12 side-links">
            <a className="col-12 btn mb-4 p-4" href="whyTraining.html">
              Why Training/Grooming is necessary for SSB?
            </a>
            <a className="col-12 btn mb-4 p-4" href="day.html">
              Day wise schedule and Test at SSB
            </a>
            <a className="col-12 btn mb-4 p-4" href="./whyKietSSB.html">
              Why to join the Kiet SSB Academy
            </a>
            <a className="col-12 btn mb-4 p-4" href="./whyKietSSB.html">
              How to join Armed <br /> Forces
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="about mt-4">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-sm-12 pt-2 text-center">
                <img className="img-fluid" src={logo} alt="" />
              </div>
              <div className="col-lg-9 col-sm-12">
                <p>
                  <span style={{ color: "#4285f4", fontSize: "20px" }}>
                    <strong>KIET SSB Academy</strong>
                  </span>
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
                  <a
                    href="register.html"
                    className="col-12 btn btn-success mb-4"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="forces mt-5" id="forces">
          <p className="heading">Armed Forces</p>
          <div className="trainers mt-5">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <a href="https://www.indiannavy.nic.in/" target="blank">
                  <div className="single_service">
                    <div className="thumb">
                      <div className="card p-5 armed-card">
                        <img className="img-fluid" src={navy} alt="navy" />
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
                <a href="https://www.indiannavy.nic.in/" target="blank">
                  <div className="single_service">
                    <div className="thumb">
                      <div className="card p-5 armed-card">
                        <img className="img-fluid" src={army} alt="army" />
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
                <a href="https://www.indiannavy.nic.in/" target="blank">
                  <div className="single_service">
                    <div className="thumb">
                      <div className="card p-5 armed-card">
                        <img className="img-fluid" src={air} alt="air force" />
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
          <div className="col-lg-9 col-md-8 col-sm-8"></div>
          <div
            className="col-lg-3 col-md-4 col-sm-4 card cardBtn text-center"
            style={{ height: "40px", backgroundColor: "#4285f4" }}
          >
            <a href="./howToJoin.html">
              <h5 className="btnText mt-1" style={{ fontSize: "24px" }}>
                How to Join Armed Forces
                <span>
                  <img
                    className="img-fluid ml-2"
                    src={arrow}
                    alt="arrow"
                    width="24px"
                  />
                </span>
              </h5>
            </a>
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
                  src={image8}
                  alt="Card image cap"
                />
              </div>
              <div className="col-4 mb-4 pics">
                <img
                  className="img-fluid rounded"
                  src={image7}
                  alt="Card image cap"
                />
              </div>
              <div className="col-4 mb-4 pics">
                <img
                  className="img-fluid rounded"
                  src={image6}
                  alt="Card image cap"
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
