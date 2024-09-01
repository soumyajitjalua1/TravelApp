import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Home.css';
import Footer from './Flight_service/Footer/footer';
import AboutUs from './Flight_service/About_us/aboutUs';
import Patner from './Patner/Patner';



const Home = () => {
  const navigate = useNavigate(); 

  const handleSearchClick = () => {
    navigate('/hotel_search'); 
  };
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">BookMyTrip</div>
        <nav className="home-nav">
          <Link to="/">Home</Link>
          <Link to="/hotel">Hotel</Link>
          <Link to="/flight">Flight</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className='home-sign'>
          <button className='home-signIn'>
            <Link to={"/login"} className='home-signIn-link'>Sign In</Link>
          </button>
          <button className="home-signOut">
            <Link to={"/sign_out"} className='home-signOut-link'>Sign Out</Link>
          </button>
        </div>
      </header>

      <section className="home-hero-section">
        <h1>Plan Your Perfect Getaway</h1>
        <p>Explore amazing places at the best prices.</p>
        <div className="search-bar">
          <input type="text" placeholder="Where to?" />
          <input type="date" />
          <input type="date" />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </section>

        <h1 className='home-features-h1'>We provide</h1>
      <section className="home-features-section">
        <div className="feature">
          <img src="https://cdn2.iconfinder.com/data/icons/solid-black-labels/128/Best_Price_copy-512.png" alt="Best Prices" />
          <h3>Best Prices</h3>
          <p>Find unbeatable prices for your trips.</p>
        </div>
        <div className="feature">
          <img src="https://static.thenounproject.com/png/2509532-200.png" alt="Easy Booking" />
          <h3>Easy Booking</h3>
          <p>Simple and fast booking process.</p>
        </div>
        <div className="feature">
          <img src="https://as2.ftcdn.net/v2/jpg/02/75/68/29/1000_F_275682995_xrFoRQy7sI8ZYJRs3XDuzFZ8zOpwsjGf.jpg" alt="24/7 Support" />
          <h3>24/7 Support</h3>
          <p>We're here to help, anytime you need.</p>
        </div>
      </section>

      <section className="flight-celebrations">
        <h2>Celebrate with Us in the Skies</h2>
        <div className="celebration-cards">
          <div className="celebration-card">
            <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/06/28/Pictures/_cd0e6a90-7aab-11e8-98f1-ed5cda4a01f0.jpg" alt="Holiday Specials" />
            <h3>Holiday Specials</h3>
            <p>Enjoy festive flights with exclusive in-flight services.</p>
          </div>
          <div className="celebration-card">
            <img src="https://aviationa2z.com/wp-content/uploads/2023/06/800_a380premiumeconomywithcrrew-0241-2.jpg" alt="Anniversary Packages" />
            <h3>Anniversary Packages</h3>
            <p>Make your special moments unforgettable in the skies.</p>
          </div>
          <div className="celebration-card">
            <img src="https://www.usatoday.com/gcdn/presto/2019/08/19/USAT/8f11d4d4-33c0-4f02-8f75-131cc848af2d-6-singapore.jpg?crop=1919,1440,x0,y0" />
            <h3>Business Class Comforts</h3>
            <p>Experience luxury and comfort with our premium services.</p>
          </div>
        </div>
      </section>


      <h1 className='home-destination-h1'>Some of Our location</h1>
      <section className="home-destination-cards">
        <div className="destination-card">
          <img src="https://www.travelandleisure.com/thmb/9jkf4TnxepW8TIsB_ttYmBSTSrI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7-shangri-la-hotel-WBHTLPAR0517-763ac2d0a63942b38e73a2f9b91f770a.jpg" alt="Paris" />
          <h3>Paris</h3>
          <p className='home-destination-p'>Starting from $499</p>
          <p className='home-destination-st'>Discover the city of love and romance</p>
        </div>
        <div className="destination-card">
          <img src="https://hoteliermaldives.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-15-at-11.23.34-AM.png" alt="New York" />
          <h3>New York</h3>
          <p className='home-destination-p'>Starting from $399</p>
          <p className='home-destination-st'>Find peace in urban nights</p>
        </div>
        <div className="destination-card">
          <img src="https://miro.medium.com/v2/resize:fit:760/0*J7WNFI-Aqx9qDmTY.jpg" alt="Tokyo" />
          <h3>Tokyo</h3>
          <p className='home-destination-p'>Starting from $599</p>
          <p className='home-destination-st'>Serenity at night, where calmness speaks</p>
        </div>

      </section>
      <AboutUs/>
      <Patner />
      <Footer/>
    </div>
  );
};

export default Home;
