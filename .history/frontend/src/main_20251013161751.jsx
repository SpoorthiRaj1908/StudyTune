import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Home/Navbar.jsx';
import './index.css'; // make sure your gradient CSS is imported

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="gradient-bg min-h-screen flex flex-col">
      <Navbar />
      {/* Other page content can go here */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to Study Tune</h1>
      </div>
    </div>
  </StrictMode>
);
