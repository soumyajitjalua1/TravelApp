import React from 'react';
import './VisualTravelGuide.css';

const VisualTravelGuide = () => {
  const travelItems = [
    { imgSrc: 'https://www.shutterstock.com/image-photo/passenger-plane-cloudy-sky-aircraft-600nw-770050144.jpg', caption: 'Explore the beauty of Bali' },
    { imgSrc: 'https://www.themandagies.com/wp-content/uploads/2018/11/New-York-City-Fly-NYON-Doors-Off-Helicopter-Photography-Flying-above-New-York-City-The-Mandagie-Best-Photo-Spots-in-NYC-22.jpg', caption: 'Discover the New York City' },
    { imgSrc: 'https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan.jpg', caption: 'Explore the beauty of Kyoto' },
    { imgSrc: 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-04/01/full/1554104224-9188.jpg', caption: 'Andaman-nicobar island' },
  ];

  return (
    <div className="visual-travel-guide">
      <h2>Discover Your Next Destination</h2>
      <div className="travel-items">
        {travelItems.map((item, index) => (
          <div key={index} className="travel-item">
            <img src={item.imgSrc} alt={item.caption} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualTravelGuide;
