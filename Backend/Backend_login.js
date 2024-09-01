const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); 

const app = express();
app.use(express.json()); 

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Received login request:', req.body); 

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    console.log('User found:', user); 
    if (!user) {
      console.log('User not found'); 
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare provided password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch); 
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // If login is successful, return a success message or token
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error); 
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
