import React, { useState } from "react";
import { Navy } from "./navy";
import { Army } from "./army";
import { Airforce } from "./airforce";

function ArmedForces() {
  const [isNavy, setIsNavy] = useState(true);
  const [isArmy, setIsArmy] = useState(false);
  const [isAirForce, setIsAirForce] = useState(false);

  const changePage = (e, page) => {
    e.preventDefault();
    if (page === "navy") {
      setIsNavy(true);
      setIsArmy(false);
      setIsAirForce(false);
    } else if (page === "army") {
      setIsNavy(false);
      setIsArmy(true);
      setIsAirForce(false);
    } else if (page === "airforce") {
      setIsNavy(false);
      setIsArmy(false);
      setIsAirForce(true);
    }
  };
  return (
    <div class="fluid-container">
      <div class="container" style={{ marginTop: "85px" }}>
        <div class="content-section">
          <div class="heading mt-5">
            <p>HOW TO JOIN ARMED FORCES</p>
          </div>
          <div class="text-center">
            <div class="mt-4">
              <a
                class="btn  custom_btn mb-4"
                onClick={e => changePage(e, "navy")}
              >
                Indian Navy
              </a>
              <a
                class="btn  custom_btn mb-4"
                onClick={e => changePage(e, "army")}
              >
                Indian Army
              </a>
              <a
                class="btn  custom_btn mb-4"
                onClick={e => changePage(e, "airforce")}
              >
                Indian Air Force
              </a>
            </div>
          </div>
        </div>
      </div>
      {isNavy ? <Navy /> : null}
      {isArmy ? <Army /> : null}
      {isAirForce ? <Airforce /> : null}
    </div>
  );
}

export default ArmedForces;
