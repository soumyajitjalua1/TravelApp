import React from 'react';
import './HelpPage.css'; // Importing the CSS file

const HelpPage = () => {
  return (
    <div className="help-page">
      {/* Header Section */}
      <header className="help-header">
        <div className="help-header-content">
          <h1>How can we assist with your travel plans?</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search Hotels, Flights, Deals, etc." 
              className="search-input" 
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </header>

      {/* Help Categories Section */}
      <section className="help-categories">
        <div className="category">
          <h3>Hotel Booking</h3>
          <p>Find and book the best hotels for your stay.</p>
          <a href="/hotels">Explore Hotels</a>
        </div>
        <div className="category">
          <h3>Flight Booking</h3>
          <p>Book flights at the best prices available.</p>
          <a href="/flights">Book Flights</a>
        </div>
        <div className="category">
          <h3>Special Deals</h3>
          <p>Discover exclusive deals and discounts for your trips.</p>
          <a href="/deals">View Deals</a>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
