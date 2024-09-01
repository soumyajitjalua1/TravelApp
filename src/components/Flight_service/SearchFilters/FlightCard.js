import React from 'react';
import './FlightCard.css';

const FlightCard = ({ airline, flightNumber, departureTime, departureCity, duration, stops, arrivalTime, arrivalCity, price, imageUrl }) => {
  return (
    <div className="flight-flight-card">
      <div className="flight-flight-info">
        <img src={imageUrl} alt={`${airline} logo`} />
        <div className='flight-all-info'>
            <div>
                <h5>{airline}</h5>
                <p>{flightNumber}</p>
            </div>
            <div>
                <p className='flight-time'>{departureTime}</p> 
                <p>{departureCity}</p>
            </div>
            <div>
                <p>{duration}</p>
                <div className='Draw-line'></div>
                <p>{stops}</p>
            </div>
            <div>
                <p className='flight-time'>{arrivalTime}</p>
                <p>{arrivalCity}</p>
            </div>
        </div>
      </div>
      <div className="flight-price-info">
        <div className='flight-price-per-person'>
            <h4>{price}</h4>
            <p>Per Adult</p>
        </div>
        <button className="flight-view-prices">View Prices</button>
      </div>
    </div>
  );
};

export default FlightCard;
