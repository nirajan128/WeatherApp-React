/* eslint-disable react/prop-types */
import TimeCard from "./TimeCard";

function Carousel(props){
    let chunkSize= 6;
    let carouselItems = [];

    //divides the data in chunks of 6 an dpush it as an array
    for (let i = 0; i < props.eachHour.length; i += chunkSize) {
        carouselItems.push(props.eachHour.slice(i, i + chunkSize));
      }

    return (<div>
        <div id="timeCardCarousel" className="carousel slide">
      <div className="carousel-inner">
        {carouselItems.map((chunk, index) => ( //chunk: each array in carosuelItems
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="row p-3">
              <TimeCard eachHour={chunk} />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#timeCardCarousel" data-bs-slide="prev" style={{ left: "0" }} >
        <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
        <span className="visually-hidden" >Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#timeCardCarousel" data-bs-slide="next" style={{ right: "0" }}> 
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </div>)
}

export default Carousel