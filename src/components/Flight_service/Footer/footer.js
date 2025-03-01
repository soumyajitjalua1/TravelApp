import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div>
        <footer className="home-footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/aboutUs">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Log in</a></li>
              <li><a href="/help">Help</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/CookiePolicy">Cookie Policy</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/company-details">Company Details</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="/">Explore</a></li>
              <li><a href="/company">Company</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/hotel">Trips</a></li>
              <li><a href="/international">International Sites</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Cheap flight & hotel booking from anywhere, to everywhere</p>
          <p>© 2024 BookMyTrip 2023 – 2024</p>
        </div>
    </footer>
    </div>
  )
}

export default footer