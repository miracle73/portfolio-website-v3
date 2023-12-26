import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Podcast from './pages/Podcast'
import Contact from './pages/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
     <Routes>
       <Route path="/podcast" element={<Podcast />} />
       <Route path="/" element={<HomePage />} />
       <Route path="/contact" element={<Contact />} />

     </Routes>
   </Router>
    </>
  )
}

export default App
