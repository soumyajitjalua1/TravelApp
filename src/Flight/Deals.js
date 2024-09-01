import React, { useState } from 'react';
import './Deals.css';
const Deals = () => {
    const [deals] = useState([
        { destination: 'New York', price: 299, description: 'Limited time offer!', departure: '2024-09-15' },
        { destination: 'Tokyo', price: 499, description: 'Special discount on round trips.', departure: '2024-10-01' },
        { destination: 'Paris', price: 399, description: '30 minute deal!', departure: '2024-09-20' },
        { destination: 'London', price: 450, description: 'Exclusive offer!', departure: '2024-09-25' },
        { destination: 'Sydney', price: 550, description: 'Last minute deal!', departure: '2024-10-05' },
        { destination: 'Bali, Indonesia', price: 550, description: 'Special fares.', departure: '2024-10-10' },
        { destination: 'Mumbai, India', price: 350, description: 'Exclusive discounts.', departure: '2024-09-18' },
        { destination: 'Andaman & Nicobar Islands, India', price: 400, description: 'Best offers.', departure: '2024-09-30' },
        { destination: 'Singapore', price: 450, description: 'limited-time deals.', departure: '2024-09-25' },
        { destination: 'Dubai, UAE', price: 499, description: 'Unbeatable prices.', departure: '2024-10-02' },
        { destination: 'Bangkok, Thailand', price: 320, description: 'Special offers.', departure: '2024-09-22' },
        { destination: 'Cape Town, South Africa', price: 650, description: 'Great savings.', departure: '2024-10-12' },
        { destination: 'Istanbul, Turkey', price: 480, description: 'Exclusive fares.', departure: '2024-09-28' },
        { destination: 'Maldives', price: 700, description: 'Special offers on your dream getaway.', departure: '2024-10-15' },
        { destination: 'Kyoto, Japan', price: 530, description: 'Limited-time discounts.', departure: '2024-10-05' },
      ]);
      

  const [filters, setFilters] = useState({ destination: '', maxPrice: '', departure: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredDeals = deals.filter((deal) => {
    const dealDepartureDate = new Date(deal.departure);
    const filterDepartureDate = filters.departure ? new Date(filters.departure) : null;
  
    return (
      (filters.destination === '' || deal.destination.toLowerCase().includes(filters.destination.toLowerCase())) &&
      (filters.maxPrice === '' || deal.price <= parseInt(filters.maxPrice)) &&
      (filters.departure === '' || dealDepartureDate <= filterDepartureDate)
    );
  });

  return (
    <div className="deals-section">
      <h2>Exclusive Deals and Offers</h2>
      <div className="filters">
        <input
          type="text"
          name="destination"
          value={filters.destination}
          onChange={handleInputChange}
          placeholder="Filter by Destination"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
          placeholder="Max Price"
        />
        <input
          type="date"
          name="departure"
          value={filters.departure}
          onChange={handleInputChange}
          placeholder="Departure Date"
        />
      </div>
      <div className="deals-list">
        {filteredDeals.length > 0 ? (
          filteredDeals.map((deal, index) => (
            <div key={index} className="deal-card">
              <h3>{deal.destination}</h3>
              <p>Price: ${deal.price}</p>
              <p className='Flight-deal'>{deal.description}</p>
              <p>Departure: {deal.departure}</p>
            </div>
          ))
        ) : (
          <p>No deals found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Deals;
