/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import DataCard from "./DataCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header(props){
    const[isDay, setIsDay] = useState(true);
    
    function theCondition(){
       setIsDay(props.isDay === 0 ? true : false)
    }

    const conatinerStyle = {backgroundColor: isDay ? "skyblue" :  "black"}

    return (
    <div className="container-fluid" style={conatinerStyle}>
       <div className="row p-3 ">
        <div className=" col-sm-12 col-lg-4  d-flex justify-content-center align-items-center flex-column shadow">
          <h3>{props.title}  ( {props.time} )</h3>
          <h1>{props.tempreture} °C</h1>
          <h5>{props.condition}</h5>
          <img src={props.icon} alt="icon"/>
        </div>

        <div className="col-sm-12 col-lg-8">
        <DataCard  
        feelslike_c={props.feelslike_c}
        heatindex_c={props.heatindex_c}
        humidity={props.humidity}
        uv={props.uv}
        wind_kph={props.wind_kph}
        windchill_c={props.windchill_c}
        />
        </div>
       </div>
    </div>
    )
}

export default Header