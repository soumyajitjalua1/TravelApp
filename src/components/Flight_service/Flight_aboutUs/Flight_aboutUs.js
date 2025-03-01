import React from 'react';
import './Flight_aboutUs.css';
import MyImage from './../../../My_img1.jpg'
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus_video.mp4'
const Flight_aboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h1>About BookMyTrip</h1>
        <div className="flight-video-container">
                <video width="800" controls>
                    <source src={Aboutus} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        <p>
          Welcome to BookMyTrip, your trusted partner for seamless travel experiences. We specialize in providing
          hassle-free flight ticket bookings and hotel reservations. Whether you’re planning a business trip, a family
          vacation, or a quick getaway, BookMyTrip is here to make your travel planning smooth and convenient.
        </p>
        <p>
          Our mission is to empower travelers with the tools and information they need to book their journeys with
          confidence. We offer a wide range of flights and hotel options, catering to different preferences and budgets.
          With BookMyTrip, you can explore the world, one booking at a time.
        </p>

        <h2>Our Mission</h2>
        <p>
          At BookMyTrip, our mission is to provide an easy, reliable, and personalized travel booking experience. We aim to
          connect travelers with the best flight and hotel options, ensuring that each journey is memorable and stress-free.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Focus:</strong> We put our customers at the heart of everything we do.</li>
          <li><strong>Transparency:</strong> We believe in clear and honest communication.</li>
          <li><strong>Innovation:</strong> We continuously seek to improve and innovate our services.</li>
          <li><strong>Sustainability:</strong> We are committed to promoting eco-friendly travel options.</li>
        </ul>

        <h2>Meet the Team</h2>
        <p>
          Our dedicated team of travel enthusiasts, tech experts, and customer support professionals work tirelessly to bring
          you the best travel booking experience. We’re passionate about helping you explore the world.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={MyImage} alt="Team Member 1" />
            <h3>Soumyajit Jalua</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://media.licdn.com/dms/image/D4E12AQF8z5-8ri0eIw/article-cover_image-shrink_720_1280/0/1697021780513?e=2147483647&v=beta&t=6os4DqhHJvoXCBmVKZWS2QKDYiHzNYQ4xGH8AYE_vjg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>

        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-event">
            <h3>2020</h3>
            <p>BookMyTrip was founded with the vision of simplifying travel bookings for everyone.</p>
          </div>
          <div className="timeline-event">
            <h3>2022</h3>
            <p>We expanded our services to include hotel bookings and partnered with leading travel providers.</p>
          </div>
          <div className="timeline-event">
            <h3>2024</h3>
            <p>Launched our mobile app, bringing our services closer to our users on the go.</p>
          </div>
        </div>

        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <blockquote>
            "BookMyTrip made my vacation planning so easy. The process was smooth, and I found great deals on flights and
            hotels!" - Sarah K.
          </blockquote>
          <blockquote>
            "I love the simplicity and reliability of BookMyTrip. It’s my go-to for all travel bookings." - Mike T.
          </blockquote>
        </div>

        <h2>Social Responsibility</h2>
        <p>
          At BookMyTrip-, we believe in giving back to the community and protecting the environment. We support various
          initiatives aimed at sustainable tourism and community development.
        </p>

        <div className="cta1">
          <h2>Ready to Start Your Journey?</h2>
          <p>Explore our flight and hotel options today and make your next trip unforgettable.</p>
          <button className="explore-button" >
            <Link to="/">Explore Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flight_aboutUs;
