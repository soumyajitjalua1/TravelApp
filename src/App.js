import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Hotel from './components/Hotel';
import Flight from './components/Flight';
import Login from './components/login';
import Regester from './components/Regester';
import Sign_out from './components/Sign_out';
import  Hotel_Search from './components/Hotel_search/Hotel_search'
import AboutUs from './components/Flight_service/Flight_aboutUs/Flight_aboutUs'
import ContactUs from './components/Flight_service/Contuct_us/ContactUs';
import Reviews from './Flight/Reviews';
// import Flight_Search from './components/Flight_search/Flight_search';
import FlightSearch from './components/Flight_service/SearchFilters/FlightSearch';
import HelpPage from './components/Flight_service/Help/HelpPage';
import PrivacyPolicy from './components/Flight_service/Privacy_Policy/PrivacyPolicy';
import CookiePolicy from './components/Flight_service/CookiePolicy/CookiePolicy';
import TermsOfService from './components/Flight_service/TermsOfService/TermsOfService';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/sign_out" element={<Sign_out/>} />
        <Route path="/hotel_search" element={<Hotel_Search/>} />  
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/review" element={<Reviews/>} />
        <Route path="/flight_search" element={<FlightSearch/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/CookiePolicy" element={<CookiePolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
    </Router>
  );
};

export default App;
