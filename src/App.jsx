import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Podcast from './pages/Podcast'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage /> */}
      <Podcast />
    </>

  )
}

export default App
