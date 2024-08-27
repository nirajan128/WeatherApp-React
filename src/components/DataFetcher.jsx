/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import Header from "./Header";
import TimeCard from "./TimeCard";
import Carousel from "./Carousel";
import axios from "axios";
import "../assets/styles/index.css"

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'Toronto', days: 30},
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_WEATHER_API_KEY,
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  function DataFetcher(){
    const [importedData, setImportedData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const[isDay, setIsDay] = useState(true);
    const refreshInterval = 5 * 60 * 1000; // 5 minutes in milliseconds
    const fetchData = async ()=>{ 
      try {
        const response = await axios.request(options); // use .request if the url, method and keys are defined in a constant
        console.log(response.data);
        setImportedData(response.data); //set the data
        setIsDay(response.data.current.is_day === 1);
        
      } catch (error) {
        setError(error.message); // Set the error state if there's an error
      }finally{
        setLoading(false)
      }
  }
  

    useEffect(()=>{ 
      fetchData(); //initial fetch data

      const intervalId = setInterval(fetchData, refreshInterval); //fetches data every 5minutes

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);// Empty dependency array ensures this runs once on mount

  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

   
  
    //Data destructuring
    const{location, current, forecast} = importedData;
    const{name:title, localtime:currentTime} = location
    const{temp_c:temprature, condition, feelslike_f, heatindex_c,humidity,uv, wind_kph, windchill_c} = current
    const{text:conditionToday, icon:icon, is_day:is_day} = condition
   
    

   const conatinerStyle = {backgroundColor: isDay ? "skyblue" :  "black", color: isDay ? "black" : "white"}
    return (
      <div style={conatinerStyle} className="custom-height">
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
              <Carousel eachHour={forecast.forecastday[0].hour}/>
        </main>
        
      </div>
      
    );
  

    }

export default DataFetcher;
  

