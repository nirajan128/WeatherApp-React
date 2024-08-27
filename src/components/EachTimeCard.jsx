/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";

function EachTimeCard(props){

    return (<div className="col-2 d-flex flex-column justify-content-center align-items-center p-3 border-end" style={{backgroundColor:"#353935"}}>
         <h4>{props.timeNow}</h4>
         <img src={props.imgSrc} />
         <h4>{props.eachTemp} °C</h4>
    </div>)
}

export  default EachTimeCard;