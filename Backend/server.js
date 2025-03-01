// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb+srv://zeeshanunique2619:RWt5xLFezN8Ggkhm@cluster0.a1ovg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/travel_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


// Define Contact Schema
const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    message: { type: String, required: true }
  });
  
const Contact = mongoose.model('Contact', contactSchema);

// API Endpoint to Handle Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Login attempt:', username); // Debugging log
  
    try {
      // Check if user exists
      const user = await User.findOne({ username });
      console.log('User found:', user); // Debugging log
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare provided password with stored hash
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // If login is successful, return a success message
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error during login:', error); // Detailed error logging
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// API Endpoint to Handle Registration
app.post('/api/register', async (req, res) => {
    const { username, email, password, phone } = req.body;
  
    // Check if all required fields are present
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      // Securely hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword, phone });
      await newUser.save();
      res.json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Error saving user:', err); // Detailed error logging
      res.status(500).json({ error: 'Error saving user to the database' });
    }
  });
  
  


// API Endpoint to Handle Contact Us Form Submission
app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, address, message } = req.body;
  
    // Validate data
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Full name, email, and message are required' });
    }
  
    try {
      const newContact = new Contact({ fullName, email, phone, address, message });
      await newContact.save();
      res.json({ message: 'Your message has been sent successfully' });
    } catch (err) {
      console.error('Error saving contact message:', err);
      res.status(500).json({ error: 'Error saving contact message to the database' });
    }
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
