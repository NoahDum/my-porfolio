import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub, FiMail } from "react-icons/fi";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="icon">
        <a href="https://www.linkedin.com/in/noah-duminil-85431a220" target="_blank"><FaLinkedinIn size={20} /></a>
        <a href="mailto:dumweb.solutions@gmail.com" target="_blank"><FiMail size={20} /></a>
        <a href="https://github.com/NoahDum" target="_blank"><FiGithub size={20} /></a>
      </div>
    </div>
  )
}

export default Footer