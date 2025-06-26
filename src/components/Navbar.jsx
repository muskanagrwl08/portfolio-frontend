import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'



const Navbar =  ({ darkMode, setDarkMode }) => {
  return (
    <header className="main-navbar navbar navbar-expand-lg bg-white sticky-top">
      <div className="container-fluid px-3 d-flex align-items-center justify-content-between">

        {/* Left: Logo + Name */}
        <div className="d-flex align-items-center flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '30px', height: '30px' }}
            className="me-2"
          />
          <h5 className="m-0 fw-bold text-nowrap">ANISH KUMAR SINHA</h5>
        </div>

        {/* Right: Moon + Toggle (on same line, even on small screens) */}
        <div className="d-flex align-items-center gap-3 flex-shrink-0">
          <div className="theme-icon fs-5 d-lg-none">🌙</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      {/* Nav links (collapsible) */}
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-lg-4 gap-2">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Moon icon on desktop */}
          <div
            className="theme-icon fs-5 ms-auto ms-lg-3"
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: 'pointer' }}
          >
              {darkMode ? '☀️' : '🌙'}
          </div>


        </div>
      </div>
    </header>
  )
}

export default Navbar
