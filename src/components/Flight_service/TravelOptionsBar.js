import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import './TravelOptionsBar.css';

const TravelOptionsBar = () => {
  const [activeClass, setActiveClass] = useState('Economy');
  const [location, setLocation] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleClassClick = (className) => {
    setActiveClass(className);
  };

  const handleSearch = () => {
    // Redirect to search page with query params
    navigate(`/flight_search?class=${activeClass}&location=${location}&travelers=${travelers}&checkIn=${checkInDate}&checkOut=${checkOutDate}`);
  };

  return (
    <div className="travel-options-bar">
      <div className="class-options">
        <button
          className={`class-btn ${activeClass === 'Economy' ? 'active' : ''}`}
          onClick={() => handleClassClick('Economy')}
        >
          Economy
        </button>
        <button
          className={`class-btn ${activeClass === 'Business Class' ? 'active' : ''}`}
          onClick={() => handleClassClick('Business Class')}
        >
          Business Class
        </button>
        <button
          className={`class-btn ${activeClass === 'First Class' ? 'active' : ''}`}
          onClick={() => handleClassClick('First Class')}
        >
          First Class
        </button>
      </div>

      <div className="travel-options">
        <div className="option">
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="option">
          <input
            type="number"
            placeholder="Add guests"
            value={travelers}
            min="1"
            onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value)))}
          />
        </div>
        <div className="option">
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="option">
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TravelOptionsBar;
