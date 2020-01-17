import React from "react";

export default function Trainers() {
  return (
    <div className="container" style={{ marginTop: "85px" }}>
      <div className="heading">
        <p>Our Trainers</p>
      </div>
      <p>
        Highly trained Ex-Defence officers with vast experience are part of KIET
        SSB Academy. They are specialized in each aspect of SSB training. These
        officers are trained by Defence Institute of Psychological Research
        (DIPR) and all have had extended tenures in ARMY / NAVY / AF SSBs. In
        addition to IO, GTO, Psychologist, highly qualified and experienced
        faculties are available for communication skills and general awareness.
      </p>
      <div className="trainers mt-5">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="card ">
              <img
                className="img-fluid mx-auto"
                src="/assets/images/General_of_the_Indian_Army.jpg"
                alt="general"
                style={{ height: "300px", width: "120px" }}
              />
              <div className="text-center m-5">
                <p>
                  I/O <br />
                  Major General
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <img
                className="img-fluid mx-auto"
                src="/assets/images/Brigadier_of_the_Indian_Army.jpg"
                alt="brigadier"
                style={{ height: "300px", width: "120px" }}
              />
              <div className="text-center m-5">
                <p>
                  Psychiatrist
                  <br />
                  Brig.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mx-auto">
            <div className="card">
              <img
                className="img-fluid mx-auto"
                src="/assets/images/Captain_of_the_Indian_Army.jpg"
                alt="captain"
                style={{ height: "300px", width: "120px" }}
              />
              <div className="text-center m-5">
                <p>
                  GTO <br />
                  Group Captain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
