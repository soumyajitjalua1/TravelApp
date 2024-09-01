import React from 'react';
import './PlanTravel.css';

const PlanTravel = () => {
  return (
    <div className="plan-travel">
      <h2>Plan Your Travel with Confidence</h2>
      <p>Navigate your journey with ease by accessing the latest travel information and tips tailored just for you.</p>
      <div className="travel-details">
        <div className="detail-item">
          <div className="detail-icon">01</div>
          <div className="detail-text">
            <h3>Stay Updated on Travel Requirements</h3>
            <p>Learn about the latest entry requirements, visa policies and guidelines for Dubai,United States and other destinations.</p>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">02</div>
          <div className="detail-text">
            <h3>Protect Your Journey with Insurance</h3>
            <p>Explore multi-risk travel insurance options that cover unexpected delays, medical emergencies, and lost luggage.</p>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">03</div>
          <div className="detail-text">
            <h3>Top Tips for Smooth Travel</h3>
            <p>Get practical tips on packing, managing your itinerary, and finding the best deals on flights and accommodations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTravel;
