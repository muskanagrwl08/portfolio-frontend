import React from 'react'
import './About.css'
import hand from '../assets/hand.svg'
import yellowSide from '../assets/yellowSide.svg'
import greyBig from '../assets/greyBig.svg'
import yellowSm from '../assets/yellowSm.svg'
import greySm from '../assets/greySm.svg'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container container d-flex align-items-center">
        
        {/* Left: Gray Blob + Hand */}
        <div className="left-blobs position-relative">
          <img src={greyBig} alt="Gray Blob" className="gray-blob" />
          <img src={hand} alt="Hand pointing" className="hand-img" />
        </div>

        {/* Center: About Text */}
        <div className="about-text text-center">
          <h2>This is it. ;)</h2>
          <p>
            Ansh Kumar Sinha is a <span className="span-e">UI/UX designer </span>and front-end developer from India, passionate about crafting beautiful and functional user 
            experiences. With a background in <span className="span-e">computer applications </span> and over three years of experience in the web design community, Ansh has 
            designed websites for small businesses, events, and more. Based in Bihar, he works as an independent creative, exploring beyond 
            web design into branding, print design, and even<span className="span-e"> 3D floor plans.</span> When not designing, Ansh enjoys spending time with his girlfriend, 
            watching series, sketching, or trying out new creative projects inspired by YouTube tutorials.
          </p>
        </div>

        {/* Right: Yellow Blob + Email */}
        <div className="right-blobs position-relative">
          <img src={yellowSide} alt="Yellow Blob" className="yellow-blob" />
          <div className="email-vertical">anishsinha@lookmail.com</div>
        </div>
      </div>

      {/* Bottom decorative blobs */}
      <div className="bottom-blobs">
        <img src={yellowSm} alt="Bottom Yellow" className="bottom-yellow" />
        <img src={greySm} alt="Bottom Gray" className="bottom-gray" />
      </div>
    </section>
  )
}

export default About
