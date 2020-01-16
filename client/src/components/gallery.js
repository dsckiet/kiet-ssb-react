import React from "react";
import img1 from "../utils/assets/images/Gallery img/ssb_acad_1.jpg";
import img2 from "../utils/assets/images/Gallery img/ssb_acad_2.jpg";
import img3 from "../utils/assets/images/Gallery img/ssb_acad_3.jpg";
import img4 from "../utils/assets/images/Gallery img/ssb_acad_4.JPG";
import img5 from "../utils/assets/images/Gallery img/ssb_acad_5.JPG";
import img6 from "../utils/assets/images/Gallery img/ssb_acad_6.JPG";
import img7 from "../utils/assets/images/Gallery img/ssb_acad_7.JPG";
import img8 from "../utils/assets/images/Gallery img/ssb_acad_8.JPG";
import img9 from "../utils/assets/images/Gallery img/ssb_acad_9.jpg";
import img10 from "../utils/assets/images/Gallery img/ssb_acad_10.jpg";
import img11 from "../utils/assets/images/Gallery img/ssb_acad_11.jpg";

function Gallery() {
  return (
    <div className="fluid-container">
      <div className="container" style={{ marginTop: "110px" }}>
        <div className="heading mt-4">
          <p>Gallery</p>
        </div>
        <div className="photo-section">
          <div className="gallery" id="gallery">
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img1}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img2}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img3}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img4}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img5}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img10}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img9}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img7}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img8}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img6}
                alt="Card image cap"
              />
            </div>
            <div className="mb-3 pics">
              <img
                className="img-fluid rounded"
                src={img11}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
