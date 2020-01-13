import React from "react";
import image3 from "../utils/assets/images/Gallery img/ssb_acad_3.jpg";
import image5 from "../utils/assets/images/Gallery img/ssb_acad_5.JPG";
import logo from "../utils/assets/images/logo.png";

const Header = () => {
  return (
    <div className="fluid-container">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="slider-image d-block w-100"
                    width="100%"
                    src={image3}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="slider-image d-block w-100"
                    src={image5}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="slider-image d-block w-100"
                    src={image3}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
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
              Why to join the Kiet SSB Academy
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
              <div className="card p-5">
                <img className="img-fluid"
                  src="./assets/images/kisspng-indian-navy-indian-armed-forces-indian-air-force-i-hindu-temple-pillars-5b0ddaf14307a1.0291035015276346732746.png"
                  alt="" />
                <div className="text-center m-5">
                  <a style={{fontSize: "20px", fontWeight: "bold", color: "black"}} href="https://www.indiannavy.nic.in/"
                    target="blank">
                    Indian Navy
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="card p-5">
                <img className="img-fluid " src="./assets/images/NoPath - Copy.png" alt="" />
                <div className="text-center m-5">
                  <a style={{fontSize: "20px", fontWeight: "bold", color: "black"}} href="https://www.indianarmy.nic.in/"
                    target="blank">
                    Indian Army
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mx-auto">
              <div className="card p-5">
                <img className="img-fluid"
                  src="./assets/images/kisspng-indian-air-force-indian-armed-forces-airman-crest-5ac0d2fce39af8.6140309215225863649323.png"
                  alt="" />
                <div className="text-center m-5">
                  <a style={{fontSize: "20px", fontWeight: "bold", color: "black"}} href="https://indianairforce.nic.in/"
                    target="blank">
                    Indian Air Force
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="complex">
      <div className="row">
        <div className="col-lg-8 col-sm-8"></div>
        <div className="col-lg-4 col-sm-4 card cardBtn text-center" style={{height: "40px", backgroundColor: "#4285f4"}}>
          <a href="./howToJoin.html">
            <h5 className="btnText mt-1" style={{fontSize: "24px"}}>
              How to Join Armed Forces
              <span><img className="img-fluid ml-2" src="./assets/images/left-arrow.png" alt="" width="24px" /></span>
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
              <img className="img-fluid card rounded" src="./assets/images/Gallery img/ssb_acad_8.JPG"
                alt="Card image cap" />
            </div>
            <div className="col-4 mb-4 pics">
              <img className="img-fluid rounded" src="./assets/images/Gallery img/ssb_acad_7.JPG" alt="Card image cap" />
            </div>
            <div className="col-4 mb-4 pics">
              <img className="img-fluid rounded" src="./assets/images/Gallery img/ssb_acad_6.JPG" alt="Card image cap" />
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
