import React, { useState } from 'react';
import './filter.css';

const Filter = () => {
  const [sortOption, setSortOption] = useState('popular');
  const [price, setPrice] = useState(0);
  const [ratings, setRatings] = useState({
    fiveStars: false,
    fourStars: false,
    threeStars: false,
    twoStars: false,
    noRating: false,
  });
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState([]);
  const [deals, setDeals] = useState(false);

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle price slider change
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Handle star rating change
  const handleRatingChange = (e) => {
    setRatings({ ...ratings, [e.target.name]: e.target.checked });
  };

  // Handle location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle room type change
  const handleRoomTypeChange = (e) => {
    const { value, checked } = e.target;
    setRoomType((prev) =>
      checked ? [...prev, value] : prev.filter((type) => type !== value)
    );
  };

  // Handle deals change
  const handleDealsChange = (e) => {
    setDeals(e.target.checked);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSortOption('popular');
    setPrice(0);
    setRatings({
      fiveStars: false,
      fourStars: false,
      threeStars: false,
      twoStars: false,
      noRating: false,
    });
    setLocation('');
    setRoomType([]);
    setDeals(false);
  };

  return (
    <div className="filters-container">
      <div className="filter-group">
        <h3>Filter</h3>
        <label>
          <input
            type="radio"
            name="sort"
            value="popular"
            checked={sortOption === 'popular'}
            onChange={handleSortChange}
          />
          Popular
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="lowestPrice"
            checked={sortOption === 'lowestPrice'}
            onChange={handleSortChange}
          />
          Lowest price first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="highestRating"
            checked={sortOption === 'highestRating'}
            onChange={handleSortChange}
          />
          Highest rating first
        </label>
      </div>

      <div className="filter-group">
        <h3>Price</h3>
        <div className="current-price" style={{ padding: '10px 0px' }}>
          Selected Price: Rs. {price}
        </div>
        <input
          type="range"
          min="0"
          max="497610"
          value={price}
          onChange={handlePriceChange}
          style={{ width: '160px' }}
        />
        <div className="price-range">
          <span className="starting-price-range">Rs. 0</span>
          <span className="ending-price-range">Rs. 497,610</span>
        </div>
      </div>

      <div className="filter-group">
        <h3>Star rating</h3>
        <label>
          <input
            type="checkbox"
            name="fiveStars"
            checked={ratings.fiveStars}
            onChange={handleRatingChange}
          />
          ★★★★★
        </label>
        <label>
          <input
            type="checkbox"
            name="fourStars"
            checked={ratings.fourStars}
            onChange={handleRatingChange}
          />
          ★★★★☆
        </label>
        <label>
          <input
            type="checkbox"
            name="threeStars"
            checked={ratings.threeStars}
            onChange={handleRatingChange}
          />
          ★★★☆☆
        </label>
        <label>
          <input
            type="checkbox"
            name="twoStars"
            checked={ratings.twoStars}
            onChange={handleRatingChange}
          />
          ★★☆☆☆
        </label>
        <label>
          <input
            type="checkbox"
            name="noRating"
            checked={ratings.noRating}
            onChange={handleRatingChange}
          />
          No rating
        </label>
      </div>

      <div className="filter-group">
        <h3>Location</h3>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>

      <div className="filter-group">
        <h3>Room Type</h3>
        <label>
          <input
            type="checkbox"
            value="Single"
            checked={roomType.includes('Single')}
            onChange={handleRoomTypeChange}
          />
          Single
        </label>
        <label>
          <input
            type="checkbox"
            value="Double"
            checked={roomType.includes('Double')}
            onChange={handleRoomTypeChange}
          />
          Double
        </label>
        <label>
          <input
            type="checkbox"
            value="Suite"
            checked={roomType.includes('Suite')}
            onChange={handleRoomTypeChange}
          />
          Suite
        </label>
        <label>
          <input
            type="checkbox"
            value="Family"
            checked={roomType.includes('Family')}
            onChange={handleRoomTypeChange}
          />
          Family Room
        </label>
      </div>

      <div className="filter-group">
        <h3>Deals & Discounts</h3>
        <label>
          <input
            type="checkbox"
            checked={deals}
            onChange={handleDealsChange}
          />
          Show only deals
        </label>
      </div>

      <button className="clear-filters-btn" onClick={clearAllFilters}>
        Clear All
      </button>
    </div>
  );
};

export default Filter;
