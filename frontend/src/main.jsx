import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import Body from './Home/Body.jsx';
import Output from './Output.jsx';
import Input from './input.jsx';

import Login from './auth/login.jsx';
import SignUp from './auth/signUp.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   
      {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Body />} />        {/* Home page */}
        <Route path="/output" element={<Output />} /> {/* Output page */}
         <Route path="/input" element={<Input />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
