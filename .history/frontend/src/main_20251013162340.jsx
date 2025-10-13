import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Home/Navbar.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar /> {/* Navbar will use navbar-gradient CSS */}
    <div className="page-content">
      {/* Your page content goes here */}
      <h1>Welcome to My App</h1>
      <p>This content scrolls under the sticky navbar.</p>
    </div>
  </StrictMode>
);
