
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialIcons from './components/SocialIcons'
import About from './components/About'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <SocialIcons />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <SocialIcons />
    </div>
  )
}

export default App

