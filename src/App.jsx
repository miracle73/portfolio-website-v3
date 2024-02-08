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
import Marketing from './pages/Marketing';
import ContentCreation from './pages/ContentCreation';
import MediaProduction from './pages/MediaProduction';
import Gallery from './pages/Gallery';
import BackyardRav from './pages/BackyardRav';


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
       <Route path="/events" element={<EventHosting />} />
       <Route path="/marketing" element={<Marketing />} />
       <Route path="/content" element={<ContentCreation />} />
       <Route path="/media" element={<MediaProduction />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/backyardrave" element={<BackyardRav />} />
     </Routes>
   </Router>
    </>
  )
}

export default App
