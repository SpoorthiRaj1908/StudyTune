import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Home/Navbar.jsx';
import './index.css'; // make sure you import your CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="side-gradient">
      <div className="gradient-content">
        <Navbar />
        {/* You can add more content here */}
      </div>
    </div>
  </StrictMode>
);
