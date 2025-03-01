import React, { useState } from 'react';
import './Hotel.css';
import Footer from './Flight_service/Footer/footer';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Hotel = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John Doe', rating: 4, comment: 'Great place, enjoyed my stay!' },
    { id: 2, user: 'Jane Doe', rating: 5, comment: 'Loved the hotel, very clean and staff were friendly.' }
  ]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleSearchClick = () => {
    navigate('/hotel_search');
  };

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const filteredHotels = [
    { id: 1, name: 'Bellagio Hotel', price: 506, rating: 4 },
    { id: 2, name: 'Warwick Hotels & Resorts', price: 400, rating: 5 },
    { id: 3, name: 'ISO Hotels', price: 500, rating: 3 }
  ]
    .filter(hotel => (filter ? hotel.rating >= filter : true))
    .sort((a, b) => sort === 'price' ? a.price - b.price : b.rating - a.rating);

  return (
    <div className="hotel-container">
      {/* Header Section */}
      <header className="hotel-header">
        <div className="Hotel-logo">BookMyTrip</div>
        <nav className="nav-hotel">
          <a href="/" className="nav-hotel-link">Home</a>
          <a href="/flight" className="nav-hotel-link">Flight</a>
          <a href="/hotel_search" className="nav-hotel-link">Type of house</a>
          <a href="/aboutUs" className="nav-hotel-link">About</a>
          <a href="/contact" className="nav-hotel-link">Contact</a>
        </nav>
        <div className='hotel-search'>
          <input className='hotel-search-input' placeholder="Search..." />
          <span onClick={handleSearchClick} className='search-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section1">
        <div className="hero-text1">
          <h1 className='Hotel-head'>Enjoy Your Dream Vacation</h1>
          <p className='Hotel-intial-line'>Where Comfort Meets Adventure</p>
          <span className='Hotel-head-span'>BookMyTrip Hotels & Resorts</span>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="facilities">
          <h3 className='Faci'>Facilities</h3>
          <div className="facility-icons">
            <div className="facility">
              <i>🏊‍♂️</i>
              <p>Swimming</p>
            </div>
            <div className="facility">
              <i>🛜</i>
              <p>Free Wi-Fi</p>
            </div>
            <div className="facility">
              <i>❄️</i>
              <p>AC Rooms</p>
            </div>
            <div className="facility">
              <i>🍽️</i>
              <p>Dinner</p>
            </div>
          </div>
        </div>

        {/* Hotel Listings */}
        <div className="hotels-section">
          <h3>Hotels For You</h3>
          <div className="hotel-details">
            <p>5 Days & 6 Nights</p>
            <div className='hotels-price'>
              <p className='price-p'>✅ USD $506.00</p>
            </div>
          </div>
        </div>

        {/* Hotel Images */}
        <div className='iamge'>
          <div>
            <h3 className='Scarch'>150+ search</h3>
            <div className='Image-icon'>
              <i>✏️</i>
              <i>🔍</i>
            </div>
          </div>
          <div className="hotel-images">
            <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="Hotel 1" />
            {/* <img src="https://www.sunhotelandresort.com/wp-content/uploads/2024/06/Abu-Resort.jpg" alt="Hotel 2" /> */}
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/28/a1/86/infinity-swimming-pool.jpg?w=1200&h=-1&s=1" alt="Hotel 3" />
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/21/89/d8/5d/brightland-resort-spa.jpg" alt="Hotel 4" />
            <img src="https://gos3.ibcdn.com/3a2cd47604b611ec8d520a58a9feac02.jpg" alt="Hotel 5" />
          </div>
        </div>
      </section>

      {/* Entire City Section */}
      <section className="city-section">
        <h2>Entire city of choice</h2>
        <div className="city-cards">
          <div className="city-card">
            <img src="https://media.cntraveller.in/wp-content/uploads/2022/01/Finolhu-Maldives.jpeg" alt="Resort 1" />
            <div className="card-info">
              <h4>$600.00</h4>
              <strong>Booking ID: 9837432</strong>
              <p>Turkey Resort</p>
            </div>
          </div>
          <div className="city-card">
            <img src="https://media2.thrillophilia.com/images/photos/000/142/055/original/1548423352_1538395492_shutterstock_732499720.jpg.jpg" alt="Resort 2" />
            <div className="card-info">
              <h4>$400.00</h4>
              <strong>Booking ID: 9837445</strong>
              <p>Warwick Hotels & Resorts</p>
            </div>
          </div>
          <div className="city-card">
            <img src="https://www.holidify.com/blog/wp-content/uploads/2016/08/park-hyatt-goa.jpg" alt="Resort 3" />
            <div className="card-info">
              <h4>$500.00</h4>
              <strong>Booking ID: 9837445</strong>
              <p>ISO Hotels</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Hotel Booking Form */}
      <section className="booking-form-section">
        <h3>Book Your Stay</h3>
        <form className="booking-form">
          <input type="text" placeholder="Check-in Date" />
          <input type="text" placeholder="Check-out Date" />
          <input type="number" placeholder="Guests" />
          <button type="submit">Book Now</button>
        </form>
      </section>

      {/* Interactive Map Section */}
      <section className="map-section">
  <h3>Find Us On Map</h3>
  <LoadScript googleMapsApiKey="AIzaSyAyn1IgMRf2yNN4SIBXCDwb8yk9ESQSl0M">
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '550px' }}
      center={{ lat: 22.5726, lng: 88.3639 }}
      zoom={10}
    >
      <Marker position={{ lat: 22.5726, lng: 88.3639 }} />
    </GoogleMap>
  </LoadScript>
</section>


      <Footer />
    </div>
  );
};


export default Hotel;

