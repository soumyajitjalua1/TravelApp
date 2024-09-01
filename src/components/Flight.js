import React from 'react';
import './Flight.css';
import TravelOptionsBar from './Flight_service/TravelOptionsBar';
import PlanTravel from './Flight_service/PlanTravel';
import Footer from './Flight_service/Footer/footer';
import LoungeSection from '../Flight/LoungeSection';
import Deals from '../Flight/Deals';
import VisualTravelGuide from './Flight_service/VisualTravelGuide/VisualTravelGuide';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/flight_search');
  
  };
  const openPDF = () => {
    window.open('https://drive.google.com/file/d/1JN4kbZhuqFypIcBUZ72jBtJmYdkBKXUG/view?usp=sharing', '_blank'); // Opens the PDF link in a new tab
  };
  return (
    <div className="flight-container">
      <header className="flight-header">
      <div className="flight-logo">BookMyTrip</div>
      <div className='flight-navigation'>     
        <nav className="flight-nav">
          <a href="/" className="flight-nav-link">Home</a>
          <a href="/hotel" className="flight-nav-link">Hotel</a>
          <a href="/review" className="flight-nav-link">Review</a>
          <a href="/flight_search" className="flight-nav-link">Search</a>
          <a href="/contact" className="flight-nav-link">Contuct</a>
        </nav>
      </div>
      <div className='flight-search'>
          <input className='flight-search-input' placeholder="Search..." />
          <span onClick={handleSearchClick} className='flight-search-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flight-bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
        </div>
      </header>
      

      <section className="flight-hero-section">
        <div className="flight-hero-text">
          <h1>Explore New Places</h1>
          <p>Enjoy every good moment</p>
        </div>
        <TravelOptionsBar/>
      </section>

      <section className="flight-info-section">
        <div className="flight-info-box">
          <div className="flight-info-icon">
            <img src="https://img.freepik.com/premium-photo/colorful-logo-with-airplane-with-white-background_1204564-53114.jpg" className='flight-icon1'></img>
          </div>
          <div className="flight-info-title">International Flights</div>
          <div className="flight-info-details" onClick={openPDF} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            Details
          </div>
        </div>
        <div className="flight-info-box">
          <div className="flight-info-icon">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0d4oYyLTivU4zWFelCWeBexOQvMXxoxj1g&s' className='flight-icon2'></img>
          </div>
          <div className="flight-info-title">A Lot of Discount</div>
        </div>
        <div className="flight-info-box">
          <div className="flight-info-icon">
            <img src='https://www.shutterstock.com/image-vector/tour-guide-icon-isolated-on-260nw-2132728597.jpg'className='flight-icon3'></img>
          </div>
          <div className="flight-info-title">Best Guide</div>
        </div>
        <div className="flight-info-box">
          <div className="flight-info-icon">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEjRVzpHbT8aqR_S8AUlSE7vE8jdlHGYfSQ&s' className='flight-icon4'></img>
          </div>
          <div className="flight-info-title"> 24*7 Support</div>
        </div>
        <div className="flight-info-box">
          <div className="flight-info-icon">
            <img src='https://static.vecteezy.com/system/resources/thumbnails/016/469/320/small/aircraft-airplane-flight-taking-off-plane-logo-vector.jpg' className='flight-icon5'></img>
          </div>
          <div className="info-title"> Best Management</div>
        </div>
      </section>
      
      <PlanTravel/>
      <VisualTravelGuide/>
      <LoungeSection/>
      {/* <Reviews/> */}
      <Deals/>
      <Footer/>
    </div>
  );
};

export default Home;
