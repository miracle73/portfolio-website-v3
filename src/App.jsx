import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Podcast from './pages/Podcast'
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import Services from './pages/Services';
import EventHosting from './pages/EventHosting';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
     <Routes>
       <Route path="/podcast" element={<Podcast />} />
       <Route path="/" element={<HomePage />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/newsletter" element={<Newsletter />} />
       <Route path="/services" element={<Services />} />
       <Route path="/eventhosting" element={<EventHosting />} />
     </Routes>
   </Router>
    </>
  )
}

export default App
