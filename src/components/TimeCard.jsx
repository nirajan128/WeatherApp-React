/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TimeCard({ eachHour }) {
  return (
    <div className="row">
      {eachHour.map((eachTime, index) => (
        <div className="col-2" key={index}>
          <h5>{eachTime.time.split(" ")[1]}</h5> {/* Extracts the time part */}
          <img src={eachTime.condition.icon} alt="Weather icon" />
          <h5>{eachTime.temp_c}°C</h5>
        </div>
      ))}
    </div>
  );
}

export default TimeCard;
