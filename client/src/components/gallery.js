import React from "react";
import NavBar from "./navbar";
function Gallery() {
  return (
    <>
      <NavBar />
      <div className="fluid-container">
        <div className="container">
          <div className="heading">
            <p>Gallery</p>
          </div>
          <div className="photo-section">
            <div className="gallery" id="gallery">
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_1.jpg"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_2.jpg"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_3.jpg"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_4.JPG"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_5.JPG"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_10.jpg"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_9.jpg"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_7.JPG"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_8.JPG"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_6.JPG"
                  alt=""
                />
              </div>
              <div className="mb-3 pics">
                <img
                  className="img-fluid rounded"
                  src="/assets/images/Gallery img/ssb_acad_11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
