import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Home/Navbar.jsx';
import './index.css'; // make sure your gradient CSS is imported

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="side-gradient flex flex-col">
      <Navbar />
      <div className="gradient-content flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Study Tune</h1>
        <p className="mb-6 text-gray-700">
          Upload your favorite song and notes to create personalized sheet music!
        </p>
        <div className="flex space-x-4">
          <button className="btn btn-ghost">Upload Song</button>
          <button className="btn btn-ghost">Upload Notes</button>
        </div>
      </div>
    </div>
  </StrictMode>
);
