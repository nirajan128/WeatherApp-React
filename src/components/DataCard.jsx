/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EachCard from "./EachCard";

function DataCard(props){
 return(
    <div className="container ">
        <div className="row">
            <EachCard feild="Wind" value={props.wind_kph + " KPH"} />
            <EachCard feild="Feels Like" value={props.feelslike_c} />
            <EachCard feild="Heat Index" value={props.heatindex_c + " °C"} />
        </div>
        <div className="row mt-1">
            <EachCard feild="Humidity" value={props.humidity} />
            <EachCard feild="UV" value={props.uv} />
            <EachCard feild="Wind Chill" value={props.windchill_c + " °C"} />
        </div>
    </div>
 )
}

export default DataCard;