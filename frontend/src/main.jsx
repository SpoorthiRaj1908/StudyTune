import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Home/Navbar.jsx';
import Body from './Home/Body.jsx';
import Output from './Output.jsx';
import Footer from './Home/Footer.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Footer/>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Body />} />        {/* Home page */}
        <Route path="/output" element={<Output />} /> {/* Output page */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
