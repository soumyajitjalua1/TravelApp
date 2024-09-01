import React, { useState } from 'react';
import './Regester.css';
import { useNavigate } from 'react-router-dom'; 

const Regester = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, phone } = formData;

    // Basic validation
    if (!username || !email || !password || !phone) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, phone }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/login'); 
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Error connecting to the server.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="register-input"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="register-input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="register-input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="register-input"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="register-input"
          onChange={handleChange}
        />
        <button className="register-button" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Regester;
