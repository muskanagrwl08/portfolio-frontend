import React from 'react'
import './Hero.css'
import profileImg from '../assets/profileimage.svg' 
import profilebg from '../assets/profilebg.svg'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* ✅ Email on Right Side */}
      <div className="email-vertical">anishsinha@lookmail.com</div>

      {/* ✅ Hero Content */}
      <div className="hero-section container d-flex align-items-center justify-content-between py-5">
        <div className="hero-text">
          <p className="hello-text badge bg-info text-white px-3 py-2">Hello!</p>
          <h1>I’m <span className="text-dark fw-bold">Anish 👋</span></h1>
          <p className="lead">UI/UX Designer, Front-End Developer & Thinker. Based in India.</p>
          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-warning">Download CV</button>
            <button className="btn btn-dark">Get in Touch!</button>
          </div>
        </div>

        <div className="hero-image hero-image-container">
          <img src={profilebg} alt="bg" className="yellow-bg"/>
          <img src={profileImg} alt="Anish" className="profile-img" style={{ width: '250px' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero

