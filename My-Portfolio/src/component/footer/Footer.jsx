import React from 'react'
import './footer.css'
import {BsLinkedin, BsStackOverflow} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiYoutube} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo' style={{color:'white'}}>Gulabchand kumar Gupta</a>
        <ul className="permalinks">

          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/gulabchand-kumar-gupta-5055601b7/"><BsLinkedin /></a>
          <a href="https://www.instagram.com/gulabchand_gupta234/?next=%2F"><FiInstagram /></a>
          <a href=""><IoLogoTwitter /></a>
          <a href=""><BsStackOverflow/></a>
          {/* <a href="https://www.youtube.com/channel/UC912gDNbOvM9pIYP3UOoOmA"><SiYoutube /></a> */}
        </div>

    <div className="footer__copyright">
      <small>&copy; Gulabchand Gupta All rights reserved.</small>
    </div>

    </footer>
  )   
}

export default Footer