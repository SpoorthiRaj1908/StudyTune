const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const cors = require('cors'); // import cors
const authRoutes = require('./routes/auth');
require('dotenv').config(); // load .env

const app = express();

// CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // <-- React frontend URL
  credentials: true,               // allow cookies/session
}));

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'secretkey',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(flash());

// Routes
app.use('/auth', authRoutes);

// Example protected route
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) return res.json({ message: 'Welcome to Dashboard!' });
  res.status(401).json({ message: 'Please log in' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
