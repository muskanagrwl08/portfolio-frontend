// src/components/SocialIcons.jsx
import React from 'react'
import './SocialIcons.css'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FaDribbble /></a>
      <a href="https://behance.net" target="_blank" rel="noreferrer"><FaBehance /></a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
      <a href="mailto:email@example.com"><FaEnvelope /></a>
    </div>
  )
}

export default SocialIcons

