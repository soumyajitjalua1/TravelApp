import React, { useState } from 'react';
import './SearchFilters.css';

const SearchFilters = () => {
  // State variables for each filter
  const [filters, setFilters] = useState({
    nonStop: true,
    refundableFares: false,
    indigo: false,
    morningDepartures: false,
  });
  
  const [price, setPrice] = useState(3598);

  // Handle changes in the price slider
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  // Handle checkbox change
  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName], // Toggle the checked state
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      nonStop: false,
      refundableFares: false,
      indigo: false,
      morningDepartures: false,
    });
  };

  // Separate filters into applied and popular based on state
  const appliedFilters = Object.entries(filters).filter(([key, value]) => value);
  const popularFilters = Object.entries(filters).filter(([key, value]) => !value);

  return (
    <div className="flight-filters-container">
      <h3>Applied Filters</h3>
      {appliedFilters.length === 0 ? <p>No filters applied</p> : null}
      {appliedFilters.map(([filterName]) => (
        <div className="flight-filter-option" key={filterName}>
          <input 
            type="checkbox" 
            id={filterName} 
            checked={filters[filterName]} 
            onChange={() => handleFilterChange(filterName)} 
          />
          <label htmlFor={filterName}>{filterName.replace(/([A-Z])/g, ' $1')}</label>
          <span>₹3,598</span> {/* Adjust prices as necessary */}
        </div>
      ))}
      
      <h4>Popular Filters</h4>
      {popularFilters.map(([filterName]) => (
        <div className="flight-filter-option" key={filterName}>
          <input 
            type="checkbox" 
            id={filterName} 
            checked={filters[filterName]} 
            onChange={() => handleFilterChange(filterName)} 
          />
          <label htmlFor={filterName}>{filterName.replace(/([A-Z])/g, ' $1')}</label>
          <span>₹3,598</span> {/* Adjust prices as necessary */}
        </div>
      ))}

      <div className="price-filter-container">
        <h4>One Way Price</h4>
        <p>Selected Price: ₹{price}</p> 
        <input
          type="range"
          min="3598"
          max="17100"
          value={price}
          className="flight-price-range"
          onChange={handlePriceChange}
        />
        <div className="flight-clear-filters" onClick={clearAllFilters}>CLEAR ALL</div>
      </div>
    </div>
  );
};

export default SearchFilters;
