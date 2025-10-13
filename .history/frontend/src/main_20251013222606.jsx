import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Home/Navbar.jsx'
import Body from './Home/Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Body></Body>
  </StrictMode>,
)