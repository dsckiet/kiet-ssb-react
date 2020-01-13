import React from "react";

function ArmedForces() {
  let ind_army = document.querySelector(".indian_army");
  let ind_navy = document.querySelector(".indian_navy");
  let ind_air = document.querySelector(".indian_air");

  const army = () => {
    ind_army.style.display = "block";
    ind_navy.style.display = "none";
    ind_air.style.display = "none";
  };

  const navy = () => {
    ind_army.style.display = "none";
    ind_navy.style.display = "block";
    ind_air.style.display = "none";
  };
  const airForce = () => {
    ind_army.style.display = "none";
    ind_navy.style.display = "none";
    ind_air.style.display = "block";
  };
  return (
    <div class="fluid-container">
      <div class="container" style={{ marginTop: "110px" }}>
        <div class="content-section">
          <div class="heading mt-5">
            <p>HOW TO JOIN ARMED FORCES</p>
          </div>
          <div class="text-center">
            <div class="mt-4">
              <a
                class="btn btn-light custom_btn mb-4"
                style={{ color: "#444444" }}
                onClick={navy}
              >
                Indian Navy
              </a>
              <a
                class="btn btn-light custom_btn mb-4"
                style={{ color: "#444444" }}
                onClick={army}
              >
                Indian Army
              </a>
              <a
                class="btn btn-light custom_btn mb-4"
                style={{ color: "#444444" }}
                onClick={airForce}
              >
                Indian Air Force
              </a>
            </div>
          </div>
          <div class="indian_navy" style={{ display: "block" }}>
            <div class="heading text-center mt-3">
              <p>How to Join Indian Navy</p>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="single_service">
                  <div class="thumb">
                    <img
                      class="img-fluid"
                      src="./assets/images/kisspng-indian-navy-indian-armed-forces-indian-air-force-i-hindu-temple-pillars-5b0ddaf14307a1.0291035015276346732746.png"
                      alt="indian navy"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <p class="mt-5" style={{ fontSize: "18px" }}>
                  Officers recruitment is advertised through the Employment News
                  and all-important National and Regional newspapers/dailies.
                  Selection for all Permanent Commission entries, except 10 + 2
                  NDA and Naval Academy entry and NCC Special entry (Graduate)
                  is through a written examination conducted by the UPSC,
                  followed by an interview by the Service Selection Board (SSB).
                  There is no written examination for the Short Service
                  Commission entries. These applications are shortlisted as per
                  the criteria laid down by the Naval Headquarters, Directorate
                  of Manpower Planning &amp; Recruitment. Selection is through
                  merit alone.
                </p>
              </div>
            </div>
            <div class="heading mt-3" style={{ color: "#707070" }}>
              <p>Educational &amp; other Qualifications</p>
            </div>
            <p>
              It is mandatory that all Degrees and educational qualifications
              are from Educational Institutions recognized by the competent
              authority in the field. Degrees/mark sheets must be original or
              attested by appropriate authorities, as asked for in the
              advertisement. No compromise/relaxation will be made on this
              issue. All candidates desirous of joining the Indian Navy must be
              physically/mentally fit as per laid down standards. Proficiency in
              sports, swimming and extra-curricular activities is desirable.
            </p>
            <div class="heading mt-3" style={{ color: "#707070" }}>
              <p>Women Entry</p>
            </div>
            <p>Women are granted Short Service Commission (SSC) in:</p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Naval Architect
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Law
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Logistics
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              ATC
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Aviation (Observer) &amp; Education Branches.
            </p>
            <p>
              The government has also given approval for the Permanent
              Commission (PC) in Education, Law and Naval Architect branch on
              completion of SSC tenure depending upon merit and vacancy.
            </p>
            <div class="heading mt-3" style={{ color: "#707070" }}>
              <p>Executive Branch</p>
            </div>
            <p>
              As an officer of the Executive Branch, one can exercise command of
              ships, submarines, and aircraft. Executive officers can specialize
              in any of the following:
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Gunnery &amp; Missiles
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Navigation and Direction
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Anti-Submarine Warfare
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Communications
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Pilot
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Observer
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Submarine
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Hydrography
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Diving
            </p>
            <p>The other cadres that form part of the Executive Branch are:</p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Law
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Air Traffic Control
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Naval Armament Inspection and Logistics
            </p>
            <div class="heading mt-3" style={{ color: "#707070" }}>
              <p>Engineering Branch</p>
            </div>
            <p>
              Modern ships, submarines, and aircraft are fitted with advanced
              technology machinery and propulsion systems. As an Engineer
              Officer, you will be responsible for keeping all these Hi-tech
              systems serviceable. Opportunities exist to work in gigantic naval
              dockyards and indigenous production units. In no other career is
              an engineer exposed to such a wide spectrum of opportunities and
              to keep abreast of modern developments. An Engineer Officer’s
              career is interspersed with technical courses up to
              post-graduation level in India/abroad. You can also join in the
              Naval Architecture Cadre of the Engineering Branch. The Indian
              Navy today employs the largest pool of trained Naval Architects in
              India. A Naval Architect is involved in design, construction,
              quality control, repair and new construction work of naval
              vessels. With the Navy going for more and more sophisticated
              warship production within the country, the Corps of Naval
              Architects offers excellent opportunities to keep abreast of the
              advancement in shipbuilding technology and implement your
              innovative ideas.
            </p>
            <div class="heading mt-3" style={{ color: "#707070" }}>
              <p>Electrical Branch</p>
            </div>
            <p>
              A warship is a mini floating city with an integral power
              generation and distribution system. In addition, complex missile
              systems, underwater weapons, radar, and radio communication
              equipment form the major part of a warship’s equipment. A majority
              of these are either computer-based or computer-aided and
              incorporate the latest trends in electronics engineering. For a
              ship to be able to fight effectively, all these equipment must be
              kept working at peak efficiency. Electrical Officers have this
              responsibility and other challenging tasks. To sharpen their
              skills, the Navy offers excellent opportunities for post-graduate
              courses in India/abroad to deserving candidates. Note: Officers of
              the Engineering and Electrical Branches can also volunteer for the
              Aviation/ Submarine Arm.
            </p>
            <div class="heading mt-3" style={{ color: "#707070" }}>
              <p>Educational Branch</p>
            </div>
            <p>
              Any service will be as good as the training its officers and men
              receive. As an Education Officer, you will play a major role in
              the training of naval officers/sailors. Education Officers are
              responsible for scientific and methodical instructions, including
              theoretical aspects of technical subjects of all branches of the
              navy and also for general education. An Education Officer can
              specialize in almost all specializations of the Executive Branch.
              In addition, some officers also get specialization in Oceanography
              &amp; Meteorology.
            </p>
          </div>
          <div class="indian_army" style={{ display: "none" }}>
            <div class="heading text-center mt-3">
              <p>How to Join Indian Army</p>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="single_service">
                  <div class="thumb">
                    <img
                      class="img-fluid"
                      src="./assets/images/NoPath - Copy.png"
                      alt="indian navy"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <p class="mt-5" style={{ fontSize: "23px" }}>
                  There are a number of ways in which one could get a commission
                  in the Army. You can join right after school or after
                  graduation. The selection procedures are impartial, objective
                  and are uniformly applied to one and all and have only one aim
                  – to “select the best”.
                </p>
              </div>
            </div>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>Types of Commission</p>
            </div>
            <p>
              The Army offers both permanent and short service commission.
              Permanent commission (PC) is granted through the Indian Military
              Academy (IMA) Dehradun and Short Service Commission (SSC) is
              granted through Officers Training Academy (OTA) Chennai. When you
              opt for ‘PC’, you are basically looking at a permanent career in
              the Army, a career till you retire. SSC is a wonderful option for
              all those of you who aspire to serve it for a few years. It gives
              you the option of joining the Army and serving it as a
              commissioned officer for ten years. Once your tenure is over, you
              are allowed to opt for PC. Alternatively, you can also ask for a
              four years extension and can choose to resign from your post any
              time during this period.
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>I. Parmanent</p>
            </div>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              NDA - AFTER 10+2(Through UPSC)
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              DIRECT ENTRY (Through UPSC)
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              ENGINEERING GRADUATES - TGC
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              UNIVERSITY ENTRY SCHEMES 10+2 TES
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>II. Short Services</p>
            </div>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              NON-TECH (Both men & women)
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              TECH (Both men & women)
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              NCC SPECIAL ENTRY (Both men & women LAW GRADUATES(Both men &
              women)
            </p>
          </div>
          <div class="indian_air" style={{ display: "none" }}>
            <div class="heading text-center mt-3">
              <p>How to Join Indian Air Force</p>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="single_service">
                  <div class="thumb">
                    <img
                      class="img-fluid"
                      src="./assets/images/kisspng-indian-air-force-indian-armed-forces-airman-crest-5ac0d2fce39af8.6140309215225863649323.png"
                      alt="indian navy"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <p class="mt-5" style={{ fontSize: "23px" }}>
                  The advertisement for NDA is released twice a year in the
                  months of May and December and for CDSE in the months of June
                  and October by UPSC. Duly filled applications are to be sent
                  to UPSC as given in advt.
                </p>
              </div>
            </div>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>AFCAT – Air Force Common Admission Test</p>
            </div>
            <p>
              For all entries other than NDA and CDSE and for all branches,
              candidates have to undergo the AFCAT.
              <br />
              The test is conducted twice a year in February and September
              Advertisements inviting applications for AFCAT are out in June and
              December. Candidates are to apply as per the advertisement.
              <br />
              The test is conducted all across India by the Indian Air Force.
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>NCC entry</p>
            </div>
            <p>
              Air Sqn NCC Senior division ‘C’ certificate holders are to apply
              through DG NCC/ respective NCC Air Squadron.
              <br />
              They would then appear for AFCAT.
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>SSB (Services Selection Board) TESTING</p>
            </div>
            <p>
              If you have successfully cleared Step 1, you will receive a call
              letter to report to any one of the Air Force Selection Boards
              located at Dehradun, Varanasi, Gandhinagar, and Mysore. At the Air
              Force Selection Board (AFSB), you undergo the following tests in
              order to ascertain your suitability and gauge your potential as an
              officer in the Indian Air Force.
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>
                <span style={{color:"black"}}>Stage I : </span> Testing
              </p>
            </div>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Officer Intelligence Rating Test
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Picture perception and Discussion Test
            </p>
            <p>
              Stage I is a screening test. Those who qualify Stage-I are
              eligible to undergo Stage II testing. Stage I disqualified
              candidates are routed back after announcement of results
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>
                <span style={{color:"black"}}>Stage II : </span> Testing
              </p>
            </div>
            <p>
              All Stage I qualified candidates to undergo following tests as
              part of Stage II testing during the next three to four days.
              Psychological Tests are written tests that are conducted by a
              Psychologist.
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Group Tests are interactive indoor and outdoor activities which
              are a combination of mental and physical work.
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              Interview involves a personal conversation with an Interviewing
              Officer.
            </p>
            <p>
              <span>
                <img
                  class="ml-2 pb-1"
                  src="./assets/images/right-arrow.svg"
                  alt=""
                />
              </span>
              These tests will be explained to you in detail before they are
              conducted at the Selection Board.
            </p>
            <p>
              Pilot Aptitude Battery Test (PABT) is a unique test. It is aimed
              at assessing a candidate’s aptitude to be trained as a pilot. PABT
              is being used as an independent selection device to induct
              potential officers into the Flying Branch of Indian Air Force.
              PABT comprises three tests viz Instrument Battery Test (INSB),
              Sensory Motor Apparatus Test (SMA) and Control Velocity Test
              (CVT). Instrument Battery Test (INSB) is a paper-pencil test and
              the other two are machine tests. The Instruments Battery Test
              (INSB) comprises two parts. This test assesses the assimilation of
              the briefing and the ability of an individual to read and
              interpret the dials of an instrument panel of an aircraft. The
              candidates who score the minimum laid down criteria are subjected
              to the machine test. The machine test includes the Sensory Motor
              Apparatus Test (SMA) and Control Velocity Test (CVT). These tests
              measure the psychomotor co-ordination skill of the individual.
              These tests are conducted on a single day and administered only
              once in a lifetime.
            </p>
            <p>
              At the Conference held on the last day, all the Assessors i.e. the
              Psychologist, Ground Testing Officer, and the Interviewing Officer
              discuss your personality and decide on whether to recommend you or
              not. Those recommended by the AFSBs will be required to fill up
              certain documents at the Boards and subsequently move to the next
              step.
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>
                <span style={{color:"black"}}>Stage III : </span> Conduct of
                Medical Examination
              </p>
            </div>
            <p>
              If you are recommended by the Selection Board, you will be sent
              for the medical examination either at Air Force Central Medical
              Establishment (AFCME), New Delhi or Institute of Aviation
              Medicine, Bengaluru.
            </p>
            <div class="heading mt-4" style={{ color: "#707070" }}>
              <p>
                <span style={{ color: "black" }}>Stage IV : </span> Preparing
                all India Merit List
              </p>
            </div>
            <p>
              An All India Merit List is compiled on the basis of your
              performance in the written test and AFSB interview, subject to
              being medically fit. Based on the vacancies available in various
              branches / sub-branches, joining instructions are issued to join
              one of the Training establishments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArmedForces;