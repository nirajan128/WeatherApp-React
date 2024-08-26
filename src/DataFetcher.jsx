import React, {useState, useEffect} from "react";
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
    const [loading, setLoading] = useState(false);

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
  
    return (
      <div>
        <h1>Fetched Data</h1>
        <pre>{JSON.stringify(importedData, null, 2)}</pre> {/* Display the imported data */}
      </div>
    );
  

    }

export default DataFetcher;
  

