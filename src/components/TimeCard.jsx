/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import EachTimeCard from "./EachTimeCard";

function TimeCard(props) {
  return (
    <>
      {props.eachHour.map((eachTime, index) => (
        <EachTimeCard 
        timeNow={eachTime.time.split(" ")[1]}
        imgSrc={eachTime.condition.icon}
        eachTemp={eachTime.temp_c}
        key={index}/>
      ))}
    </>
  );
}

export default TimeCard;
