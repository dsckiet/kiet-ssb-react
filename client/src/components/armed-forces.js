import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="fluid-container">
      <div className="container" style={{ marginTop: "85px" }}>
        <div className="content-section">
          <div className="heading mt-5">
            <p>HOW TO JOIN ARMED FORCES</p>
          </div>
          <div className="text-center">
            <div className="mt-4">
              <Link
                className="btn  custom_btn mb-4"
                to=""
                onClick={e => changePage(e, "navy")}
              >
                Indian Navy
              </Link>
              <Link
                className="btn  custom_btn mb-4"
                to=""
                onClick={e => changePage(e, "army")}
              >
                Indian Army
              </Link>
              <Link
                className="btn  custom_btn mb-4"
                to=""
                onClick={e => changePage(e, "airforce")}
              >
                Indian Air Force
              </Link>
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
