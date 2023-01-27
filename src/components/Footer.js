import React from 'react'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='title-nav'>
        <h2>Me contacter : </h2>        
      </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/noah-duminil-85431a220" target="_blank"><FaLinkedin size={35} color="#3F4E4F"/></a>
          <a href="mailto:noahduminil6@gmail.com" target="_blank"><FaEnvelope size={35} color="#3F4E4F"/></a>
          <a href="https://github.com/NoahDum" target="_blank"><FaGithubSquare size={35}color="#3F4E4F"/></a>
        </div>
    </div>
  )
}

export default Footer