import React from 'react'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='title-nav'>
        <h2>Me contacter : </h2>        
      </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/noah-duminil-85431a220"><FaLinkedin size={35} color="#3F4E4F"/></a>
          <a href="mailto:noahduminil6@gmail.com"><FaEnvelope size={35} color="#3F4E4F"/></a>
          <a href="https://github.com/NoahDum"><FaGithubSquare size={35}color="#3F4E4F"/></a>
        </div>
    </div>
  )
}

export default Footer