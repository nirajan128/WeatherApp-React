/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
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
        <div className="col-6 d-flex justify-content-center align-items-center flex-column shadow">
          <h3>{props.title}  ( {props.time} )</h3>
          <h1>{props.tempreture} °C</h1>
          <h5>{props.condition}</h5>
          <img src={props.icon} alt="icon"/>
        </div>
        <div className="col-6"></div>
       </div>
    </div>
    )
}

export default Header