/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EachCard from "./EachCard";

function DataCard(props){
 return(
    <div className="container ">
        <div className="row">
            <EachCard feild="Wind" value={props.wind_kph + " KPH"} isDay={props.isDay} />
            <EachCard feild="Feels Like" value={props.feelslike_c} isDay={props.isDay} />
            <EachCard feild="Heat Index" value={props.heatindex_c + " °C"} isDay={props.isDay} />
        </div>
        <div className="row mt-1">
            <EachCard feild="Humidity" value={props.humidity} isDay={props.isDay} />
            <EachCard feild="UV" value={props.uv} isDay={props.isDay} />
            <EachCard feild="Wind Chill" value={props.windchill_c + " °C"} isDay={props.isDay} />
        </div>
    </div>
 )
}

export default DataCard;