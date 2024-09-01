import React from 'react';
import './LoungeSection.css'; 

const LoungeSection = () => {
  return (
    <div className="lounge-container">
      <div className="lounge-header">
        <h2>Unaccompanied Minors Lounge</h2>
      </div>
      <div className="lounge-info">
        <div className="lounge-info-item">
          <h3>Help through the airport</h3>
          <p>They'll be with you every step of the way, through security to the gate.</p>
        </div>
        <div className="lounge-info-item">
          <h3>Care on the flight</h3>
          <p>Our cabin crew are on hand to make sure you feel safe, comfortable.</p>
        </div>
        <div className="lounge-info-item">
          <h3>Priority boarding</h3>
          <p>Board the plane first. Get seated with your friends.</p>
        </div>
        <div className="lounge-info-item">
          <h3>Support when they land</h3>
          <p>When your child arrives, a representative will be at the aircraft door.</p>
        </div>
      </div>

      <h3 className="best-travelers-title">Best travelers of the Month</h3>
      <div className="travelers-list">
        {[
          { name: 'Aaditha Tiwari', location: 'India', image: 'https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-gateway-of-india-mumbai.jpg' },
          { name: 'William Lane', location: 'Tokyo', image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000002/img/en/a0000002_parts_5fe42867385b7.jpg?20220629143600&q=80&rw=686&rh=490' },
          { name: 'James Roach', location: 'New York', image: 'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg' },
          { name: 'Lori Sunshine', location: 'Dubai', image: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2024/05/09/Burj-Al-Arab-1.jpg' },
          { name: 'Sebastian Johns', location: 'Singapore', image: 'https://static.toiimg.com/thumb/msid-107700466,width-748,height-499,resizemode=4,imgsize-119838/.jpg' },
          {name: 'Suban Bose', location: 'Andaman Nicobar', image: 'https://static.theprint.in/wp-content/uploads/2020/08/Untitled-design-2020-08-09T193331.340.jpg'}
        ].map((traveler, index) => (
          <div key={index} className="traveler-card">
            <img src={traveler.image} alt={traveler.location} className="traveler-image" />
            <div className="traveler-details">
              <h4>{traveler.name}</h4>
              <p>{traveler.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoungeSection;
