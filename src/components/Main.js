import React from 'react'
import Header from './Header'
import avatar from '../img/avatar.png'
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {

  const handleDownloadPDF = () => {
    // Créez un élément <a> pour le téléchargement du PDF
    const link = document.createElement('a');
    link.href = '../src/pdf/Cv.pdf'; // Remplacez par le chemin vers votre fichier PDF
    link.target = '_blank'; // Pour ouvrir le lien dans une nouvelle fenêtre/onglet
    link.download = 'cv-noah-duminil.pdf'; // Nom du fichier lors du téléchargement
    link.click();
};
  return (
    <div className='main'>
      <Header />
      <div className="contain container">
        <div className="about">
          <div className='aboutImage'>
            <img src={avatar} alt="" />
          </div>
          <div className='aboutText'>
            <h1>Noah Duminil</h1>
            <h2>Developpeur Web  - FullStack</h2>
            <p>Diplomé d’un titre professionnel Developpeur Web, je concevrais vos sites sur mesure en répondant de manière la plus précise a chacune de vos attentes. </p>
            <p>Apprennez en plus sur mon parcours en téléchargeant mon CV !</p>
            <a className='button' onClick={handleDownloadPDF}> <FaFileDownload size={20} className='buttonIcon'/>Qui suis-je ?</a>
          </div>
        </div>
        <div className="project">
          <h1>Projets</h1>
        </div>
      </div>
    </div>
  )
}

export default About