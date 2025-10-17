require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const authRoutes = require('./routes/auth');

const app = express();

// -----------------
// Database Connection
// -----------------
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/passportAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// -----------------
// Middleware
// -----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'defaultsecret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(flash());

// -----------------
// Routes
// -----------------
app.use('/auth', authRoutes);

// -----------------
// Protected Route Example
// -----------------
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ message: `Welcome ${req.user.username} to Dashboard!` });
  }
  res.status(401).json({ message: 'Please log in' });
});

// -----------------
// Start Server
// -----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
