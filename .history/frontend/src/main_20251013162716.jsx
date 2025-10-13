import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './Home/Navbar.jsx'; // optional

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="animated-gradient">
      <Navbar /> {/* optional, if you want sticky top nav */}
      <h1>Welcome to My Website</h1>
      <p>This page has smoothly changing background colors like StudyFetch.</p>
    </div>
  </StrictMode>
);
