const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const authRoutes = require('./routes/auth');
const app = express();

// DB connection
mongoose.connect('mongodb://localhost:27017/passportAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secretkey',
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

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
