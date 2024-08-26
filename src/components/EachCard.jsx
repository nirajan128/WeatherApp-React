/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function EachCard(props){
    const[isDay, setIsDay] = useState(true);
    
    function theCondition(){
       setIsDay(props.isDay === 0 ? true : false)
    }
    
    const setBg = {backgroundColor: setIsDay ? "#CFECF7" : "#36454F"}
    return(
        <div className="col-4 rounded p-3 shadow mr-2 mb-1 opacity-75" style={setBg}>
                <div><p className="fw-bolder text-center">{props.feild}</p></div>
                <div><h1 className="text-center">{props.value}</h1></div>
            </div>
    )
}

export default EachCard