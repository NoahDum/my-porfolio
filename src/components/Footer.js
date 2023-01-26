import React from 'react'
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <h2>Mes réseaux : </h2>
        <div className="icon">
          <a href="https://www.linkedin.com/in/noah-duminil-85431a220"><FaLinkedin size={35} color="#3F4E4F"/></a>
          <a href="mailto:noahduminil6@gmail.com"><FaEnvelope size={35} color="#3F4E4F"/></a>
          <a href="https://github.com/NoahDum"><FaGithubSquare size={35}color="#3F4E4F"/></a>
        </div>
    </div>
  )
}

export default Footer