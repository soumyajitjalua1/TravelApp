import React from 'react'
import './aboutUs.css'
import AboutusVideo from './About_us.mp4';
const aboutUs = () => {
  return (
    <div>
        <section className="about-us">
            <h2>About BookMyTrip</h2>
            <p>At BookMyTrip, we strive to make your travel experience seamless and memorable. </p>
            <p>With over a decade of experience in the travel industry, we specialize in providing the best deals on hotels and flights worldwide.</p>
            <div className="video-container">
                <video width="800" controls>
                    <source src={AboutusVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="trust-elements">
                <div className="trust-item">
                <h3>Trusted by Millions</h3>
                <p>Our customers trust us to provide reliable bookings and excellent service.</p>
                </div>
                <div className="trust-item">
                <h3>Secure and Transparent</h3>
                <p>We prioritize your safety and transparency with clear pricing and secure transactions.</p>
                </div>
                <div className="trust-item">
                <h3>Exceptional Support</h3>
                <p>Our 24/7 customer support team is here to assist you every step of the way.</p>
                </div>
            </div>

            <div className="customer-testimonials">
                <h3>What Our Customers Say</h3>
                <blockquote>
                "BookMyTrip made our trip unforgettable! Everything was easy, from booking to check-in." - Jane D.
                </blockquote>
                <blockquote>
                "I always choose BookMyTrip for my business trips. They are reliable and efficient." - Does S.
                </blockquote>
            </div>
            <div className='TotalGoal'>
                <div class="mission-vision">
                    <div class="mission">
                        <h3>Our Mission</h3>
                        <p>Our mission is to provide you with the best travel experience. We are committed to offering exceptional service, unbeatable prices, and a seamless booking process.</p>
                    </div>
                    <div class="vision">
                        <h3>Our Vision</h3>
                        <p>Our vision is to be the leading travel agency worldwide, known for our reliability, transparency, and exceptional customer service.</p>
                    </div>
                </div>

                <div class="values-team">
                    <div class="values">
                        <h3>Our Values</h3>
                        <p>At BookMyTrip, we value integrity, customer satisfaction, and innovation. We are dedicated to creating a positive impact on the travel industry.</p>
                    </div>
                    <div class="team">
                        <h3>Our Team</h3>
                        <p>Our team consists of passionate travel experts who are dedicated to making your travel dreams a reality. We are here to assist you with all your travel needs.</p>
                    </div>
                </div>
            </div>
            <div className='AchiveMent'>
                <div className="achievements">
                    <h3>Our Achievements</h3>
                    <p>Rated 5 stars by thousands of travelers</p>  
                    <p>Over 10 million bookings worldwide</p>
                    <p>Awarded Best Travel Agency 2024</p> 
                </div>
                <div className="milestones">
                    <h3>Our Milestones</h3>
                    <p>Reached 1 million customers in 2023</p>  
                    <p>Expanded to 50 countries in jan 2024</p>
                    <p>Launched mobile app in April 2024</p> 
                </div>
            </div>
            <div className="cta">
                <p>Experience the best in travel with BookMyTrip.</p>
                <p>Our journey starts here.</p>
                <button className='cta-btn'>
                    <a href="/hotel" className="cta-link">Get Started</a>
                </button>
            </div>
        </section>
    </div>
  )
}

export default aboutUs