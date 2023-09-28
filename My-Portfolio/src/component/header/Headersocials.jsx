import React from 'react'
import{BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gulabchand-kumar-gupta-5055601b7/" target='blank'><BsLinkedin/></a>
        <a href="https://github.com/gulabchan" target='blank'><BsGithub/></a>
        <a href="https://www.instagram.com/gulabchand_gupta234/"><FiInstagram /></a>
          <a href="https://twitter.com/GULABCH98508742"><IoLogoTwitter /></a>
    </div>
  )
}

export default Headersocials
