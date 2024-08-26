/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Header from "./Header";
import TimeCard from "./TimeCard";
import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'Toronto', days: 30},
    headers: {
      'x-rapidapi-key': '71d241f82emsh0188ff64afacc8fp121277jsnff7de149baf7',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  function DataFetcher(){
    const [importedData, setImportedData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const[isDay, setIsDay] = useState(true);
    let formattedTime;

    useEffect(()=>{
      const fetchData = async ()=>{ 
          try {
            const response = await axios.request(options); // use .request if the url, method and keys are defined in a constant
            console.log(response.data);
            setImportedData(response.data); //set the data
            
          } catch (error) {
            setError(error.message); // Set the error state if there's an error
          }finally{
            setLoading(false)
          }
      }
      fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    //Background according to isDay
    function theCondition(){
       setIsDay(isDay === 0 ? true : false)
    }

    const conatinerStyle = {backgroundColor: isDay ? "skyblue" :  "black"}
  
    //Data destructuring
    const{location, current, forecast} = importedData;
    const{name:title, localtime:currentTime} = location
    const{temp_c:temprature, condition, feelslike_f, heatindex_c,humidity,uv, wind_kph, windchill_c} = current
    const{text:conditionToday, icon:icon, is_day:is_day} = condition
   
    return (
      <div style={conatinerStyle}>
        <Header 
        title={title} 
        time={currentTime} 
        tempreture={temprature}
        condition={conditionToday}
        icon={icon}
        is_day={is_day}
        feelslike_c={feelslike_f}
        heatindex_c={heatindex_c}
        humidity={humidity}
        uv={uv}
        wind_kph={wind_kph}
        windchill_c={windchill_c}
        isDay={isDay}
        />

        <main className="container">
              <TimeCard eachHour={forecast.forecastday[0].hour}/>
        </main>
        
      </div>
      
    );
  

    }

export default DataFetcher;
  

