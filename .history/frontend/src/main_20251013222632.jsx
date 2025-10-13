import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Home/Navbar.jsx'
import Body from './Home/Body.jsx'
import Output from './Output.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Output></Output>
  </StrictMode>,
)