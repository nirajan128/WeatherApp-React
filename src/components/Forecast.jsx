/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Table from "./Table";

function Forecast(props) {
    return (
        <div>
            <div className="mt-2">
                <h3 className="fw-bolder text-center">2 Days Forecast</h3>
            </div>
            <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                    <th scope="col">Date</th>
                   < th scope="col">Min Temp</th>
                    <th scope="col">Status</th>
                    <th scope="col">Max Temp</th>
                    </tr>
                </thead>
                <tbody>
                    {props.forecast.slice(1, 3).map((eachData, index) => (
                        <Table 
                            key={index}  // Adding a key prop to each mapped element
                            date={eachData.date} 
                            minTemp={eachData.day.mintemp_c} 
                            maxTemp={eachData.day.maxtemp_c} 
                            imgSrc={eachData.day.condition.icon} 
                        />
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Forecast;
