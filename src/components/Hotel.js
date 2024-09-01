import React from 'react';
import './Hotel.css';
import Footer from './Flight_service/Footer/footer';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hotel = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/hotel_search');
  };
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
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
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
        <div className="hotels-section">
          <h3>Hotels For You</h3>
          <div className="hotel-details">
            <p>5 Days & 6 Nights</p>
            <div className='hotels-price'>
              <p className='price-p'> ✅ USD $506.00</p>
            </div>
          </div>
        </div>
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
            <img src="https://www.sunhotelandresort.com/wp-content/uploads/2024/06/Abu-Resort.jpg" alt="Hotel 2" />
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
            <img src="https://media2.thrillophilia.com/images/photos/000/142/055/original/1548423352_1538395492_shutterstock_732499720.jpg.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true" alt="Resort 2" />
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
      <section className="social-media-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61556806895133"><i className="fab fa-facebook-f"></i></a>
          <a href="https://x.com/Soumyajitjalua"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/soumyajit.1234/"><i className="fab fa-instagram"></i></a>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Hotel;

