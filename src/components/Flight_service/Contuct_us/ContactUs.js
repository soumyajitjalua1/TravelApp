import React, { useState } from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message);

      // Redirect back to the home page after 5 seconds
      setTimeout(() => {
        navigate('/'); // Change the path to the home page or your desired route
      }, 5000);

    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact-us">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Not sure what you need? The team at SquareEvents will be happy to listen to you and suggest event ideas you haven't considered.</p>
        <div className="contact-details">
          <p>Email: Soumyajitjalua@gmail.com</p>
          <p>Support: +91 9732591634</p>
        </div>
      </div>

      <div className="contact-form">
        <h3 className='contact-form-head1'>We’d love to hear from you!</h3>
        <h3 className='contact-form-head2'>Let’s get in touch</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="address" placeholder="Address" onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="4" required onChange={handleChange}></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </section>
  );
};

export default ContactUs;
