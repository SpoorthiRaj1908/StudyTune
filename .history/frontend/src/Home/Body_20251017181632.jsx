import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Body() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [flash, setFlash] = useState(""); // ⚡ flash message

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show flash message if present in sessionStorage
  useEffect(() => {
    const message = sessionStorage.getItem("flashMessage");
    if (message) {
      setFlash(message);
      sessionStorage.removeItem("flashMessage"); // remove after reading
    }
  }, []);

  const handleGenerate = (e) => {
    e.preventDefault();
    navigate("/Signup");
  };

  const closeFlash = () => setFlash("");

  const features = [
    { title: "Upload Songs", desc: "Share your favorite songs!", icon: "🎶🎵" },
    { title: "Upload Notes", desc: "Share your notes effortlessly", icon: "📤" },
    { title: "Discover Resources", desc: "Access a library of study materials", icon: "📚" },
  ];

  const steps = ["Sign Up", "Upload Songs", "Upload Notes", "Explore"];

  return (
    <div className="scroll-smooth relative">

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 transition-colors duration-300 z-50 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-gradient-to-r from-[#E3B7D3] to-[#DDB5AC]"
        }`}
      >
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://i.pinimg.com/736x/be/e4/b8/bee4b869ad5ec8cf824a293f2b7b0d93.jpg"
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-xl font-serif text-black font-heading">
              STUDY TUNE
            </span>
          </div>

          <div className="hidden md:flex space-x-4 mr-2">
            {["home", "features", "process", "Login"].map((item) => {
              if (item.toLowerCase() === "login") {
                return (
                  <button
                    key={item}
                    onClick={() => navigate("/login")}
                    className="cursor-pointer capitalize font-semibold text-black hover:text-gray-700 text-sm bg-transparent border-none"
                  >
                    {item}
                  </button>
                );
              } else {
                return (
                  <Link
                    key={item}
                    to={item}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer capitalize font-semibold text-black hover:text-gray-700 text-sm"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </nav>

      {/* ⚡ Flash Message Below Navbar */}
      {flash && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4">
          <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-md flex justify-between items-center">
            <span>{flash}</span>
            <button
              onClick={closeFlash}
              className="font-bold text-xl leading-none hover:text-gray-200"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center bg-gradient-to-r from-[#E3B7D3] to-[#DDB5AC] pt-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-10 w-full">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 font-serif text-black-800">
              The perfect sound track for your success
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-black-700">
              🎵 <strong>Turn Your Notes Into Music</strong> – Learn faster, remember longer, and enjoy every study session!
            </p>
            <p className="text-lg text-black-700">
              Welcome to <strong>Study Tune</strong> — your personalized study companion. Explore curated study materials, audio lessons, and interactive tools designed to make your learning experience smarter.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-100 h-100 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center p-2">
              <img
                src="https://i.pinimg.com/1200x/20/0d/c8/200dc8985de0ed31a1885fc8e64235b7.jpg"
                alt="Hero Illustration"
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-black-700">Features</h2>
          <p className="text-black-700 mt-2">Everything you need to boost your learning.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-r from-[#E3B7D3] to-[#DDB5AC] p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-black">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center -12">
          <h2 className="text-3xl font-bold text-black-700">How It Works</h2>
          <p className="text-black-700 mt-2">Simple steps to start your journey</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-[#E3B7D3] to-[#DDB5AC] p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{idx + 1}</div>
              <h3 className="font-semibold text-black-700">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="signup" className="py-20 bg-gradient-to-r from-[#E3B7D3] to-[#DDB5AC] text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Start Sharing Your Knowledge Today</h2>
        <button
          onClick={handleGenerate}
          className="px-8 py-3 bg-black text-white font-bold rounded-xl shadow-md 
             hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 
             active:bg-black active:text-white mx-auto block"
        >
          Sign Up
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-1">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>&copy; 2025 Study Tune. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Body;
