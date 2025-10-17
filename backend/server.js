const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();

// ✅ Middleware (ORDER MATTERS)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Allow frontend to connect
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: false,
  })
);

// ✅ Passport
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
app.get("/", (req, res) => {
  res.send("Server is working ✅");
});

// ✅ Flash (optional)
app.use(flash());

// ✅ Routes
app.use("/auth", authRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Server running successfully ✅");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
