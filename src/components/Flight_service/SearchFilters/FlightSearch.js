import React from 'react';
import './FlightSearch.css';
import SearchFilters from './SearchFilters';
import FlightCard from './FlightInfo';

const FlightSearch = () => {
  return (
    <div className="flight-search-page-total">
      {/* Navigation Bar */}
      <div className="flight-navbar">
        <select className="flight-input">
          <option>One Way</option>
          <option>Round Trip</option>
          <option>Multi-city</option>
        </select>
        <input type="text" placeholder="From" className="flight-input" />
        <input type="text" placeholder="To" className="flight-input" />
        <input type="date" className="flight-input" />
        <select className="flight-input">
          <option>Regular</option>
          <option>Student</option>
          <option>Senior Citizen</option>
          <option>Armed Forces</option>
          <option>Doctor and Nurses</option>
        </select>
        <select className="flight-input">
          <option>1 Adult, Economy</option>
          <option>2 Adults, Economy</option>
          <option>3 Adults, Economy</option>
          <option>4 Adults, Economy</option>
          <option>1 Adult, Business</option>
          <option>2 Adults, Business</option>
          <option>3 Adults, Business</option>
          <option>4 Adults, Business</option>
          <option>1 Adult, First-class</option>
          <option>2 Adults, First-class</option>
          <option>3 Adults, First-class</option>
          <option>4 Adults, First-class</option>
        </select>
        <button className="flight-search-button">Search</button>
      </div>

      {/* Date Bar */}
      <div className="flight-date-bar">
        {['Thu, Aug 29', 'Fri, Aug 30', 'Sat, Aug 31', 'Sun, Sep 1', 'Mon, Sep 2', 'Tue, Sep 3', 'Wed, Sep 4'].map((date, index) => (
          <div key={index} className="flight-date-option">
            <p>{date}</p>
            <p>₹3,598</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flight-search-page">
        <SearchFilters />
        <div className="flight-flights-list">
          <FlightCard />
          {/* Add more <FlightCard /> components as needed */}
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
