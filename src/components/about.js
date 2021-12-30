import React from "react";
import NavBar from "./navbar";

function About() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="heading ">
          <p>About us</p>
        </div>
        <div className="main mb-5">
          <div className="img-card">
            <img
              className="card img-card img-fluid rounded"
              src="/assets/images/Gallery img/ssb_acad_5.JPG"
              alt="img"
              width="100%"
            />
          </div>
          <div className="card-container content-card">
            <p className="content">
              Life is a journey, and in this journey, excellence is created
              through education &amp; knowledge. To lay a strong foundation in
              the technical education domain the members of the Krishna
              Charitable Society initiated the KIET Group of Institutions in
              1998 with a modest number of 180 students that have reached a
              humongous number of 5400 + students on campus today, towards this
              journey of excellence in the technical domain. The institute is
              accredited by National Assessment and Accreditation Council (NAAC)
              with Grade ‘A’ for 5 years and certified by ISO 9001-2008.
            </p>
          </div>
        </div>
        <div className="main-2 ">
          <div className="col-sm-9 mx-auto">
            <div className="img-card">
              <img
                className="card img-card img-fluid rounded"
                src="./assets/images/IMG20190930084102.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-9 mx-auto">
            <div className="content-card-2">
              <p className="content pt-4">
                Life is a journey, and in this journey, excellence is created
                through education & knowledge. To lay a strong foundation in the
                technical education domain the members of the Krishna Charitable
                Society initiated the KIET Group of Institutions in 1998 with a
                modest number of 180 students that have reached a humongous
                number of 5400 + students on campus today, towards this journey
                of excellence in the technical domain. The institute is
                accredited by National Assessment and Accreditation Council
                (NAAC) with Grade ‘A’ for 5 years and certified by ISO
                9001-2008.
              </p>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="heading mt-5">
            <p>KIET SSB Academy</p>
          </div>
          <div>
            <p>
              KIET SSB Academy has been established with the aim of imparting
              pre selection training for SSB interview to students aspiring to
              join Armed Forces as officers. The training at KIET SSB Academy
              helps to inculcate and develop Leadership Qualities, Communication
              Skills and Officer like Qualities (OLQ) in students, thus enabling
              them to confidently face the SSB Interview successfully.
            </p>
          </div>

          <div className="content-section">
            <div className="heading mt-5">
              <p>INFRASTRUCTURE / TRAINING FACILITY</p>
            </div>
            <div>
              <p>
                The KIET SSB Academy has excellent infrastructure. A separate
                training area in the Campus has complete obstacle course
                consisting of Progressive group tasks, Command tasks, individual
                obstacles and various other group testing facilities. An air
                conditioned Classroom facility is available with all requisite
                facilities for indoor training.
              </p>
            </div>
          </div>

          <div className="content-section">
            <div className="heading mt-5">
              <p>TRAINERS / FACULTY</p>
            </div>
            <div>
              <p>
                Highly trained Ex-Defence officers with vast experience are part
                of KIET SSB Academy. They are specialized in each aspect of SSB
                training. These officers are trained by Defence Institute of
                Psychological Research (DIPR) and all have had extended tenures
                in ARMY / NAVY / AF SSBs. In addition to IO, GTO, Psychologist,
                highly qualified and experienced faculties are available for
                communication skills and general awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
