import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Home/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
  </StrictMode>,
)