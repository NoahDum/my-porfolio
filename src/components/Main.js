import React, { useState } from 'react'
import Header from './Header'
import avatar from '../img/avatar.png'
import LabelCars from '../img/Cars3000.png'
import MoviesShuffle from '../img/Movieshuffle.png'
import PizzaOrder from '../img/PizzaOrder.png'
import Disney from '../img/Disney.png'
import Html from '../img/html-logo.png'
import Css from '../img/CSS-logo.png'
import Sass from '../img/Sass.png'
import Js from '../img/JavaScript-logo.png'
import ReactLogo from '../img/React.png'
import Php from '../img/Php.png'
import Node from '../img/NodeJs.png'
import Postgre from '../img/Postgresql.png'
import MySql from '../img/MySql.png'
import France from '../img/france.png'
import Spain from '../img/spain.png'
import Uk from '../img/uk.png'
import { FaFileDownload, FaAngleDoubleRight, FaArrowRight, FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import Footer from './Footer'




const About = () => {
  const images = [
    {
      url: MoviesShuffle,
      title: 'MovieShuffle',
      text: 'MovieShuffle est un site ayant pour but de vous faire découvrir de nouveaux films pour des soirées cinéma à gogo. Sur ce site, je vous propose des films à partir d’une base de données qui les classe par genres, vous proposent un synopsis et un lien direct pour accéder à la bande d’annonce officielle.',
      link: 'https://github.com/NoahDum/MovieShuffle',
    },
    {
      url: LabelCars,
      title: 'Label Cars',
      text: 'Label Cars est une application destinée à l’usage mobile, le but de ce projet était de créer une application fictive de location de véhicule. Avec son système de filtre, plus la peine de chercher des heures pour trouver votre bonheur. Venez découvrir les coulisses de cette application sur mon git !',
      link: 'https://github.com/NoahDum/LabelCars',
    },
    {
      url: PizzaOrder,
      title: 'Pizza Reeflex',
      text: 'Pizza Reeflex est une application fictive où nous pouvons faire une commande de pizza, suivre le statut de cette commande et enfin la payer, toujours fictivement car elle n’est pas en ligne. Cette plateforme est très interactive afin que le consommateur s’y retrouve facilement.',
      link: 'https://github.com/NoahDum/pizza_app',
    },
    {
      url: Disney,
      title: 'Disney + clone',
      text: 'Le but de cette application est de partager les créations des partenaires de Disney en les filtrants par certains critères, tel que les derniers ajouts ou encore la compagnie de production à laquelle il appartient. Enfin je propose de courtes bande d’annonces pour chacun des films.',
      link: 'https://github.com/NoahDum/disney_clone',
    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  const handleDownloadPDF = () => {
    // Créez un élément <a> pour le téléchargement du PDF
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Cv.pdf'; // Utilisez process.env.PUBLIC_URL pour obtenir la racine du site
    link.target = '_blank'; // Pour ouvrir le lien dans une nouvelle fenêtre/onglet
    link.download = 'cv-noah-duminil.pdf'; // Nom du fichier lors du téléchargement
    link.click();
  };

  return (
    <div className='main'>
      <Header/>
      <div className="contain container">
        <div id='about' className="about">
          <div className='aboutImage'>
            <img src={avatar} alt="" />
            <div className="oval-content">
            </div>
          </div>
          <div className='aboutText'>
            <h1>Noah Duminil</h1>
            <h2>Developpeur Web  - FullStack</h2>
            <p>Diplomé d’un titre professionnel Developpeur Web, je concevrais vos sites sur mesure en répondant de manière la plus précise a chacune de vos attentes. </p>
            <p>Apprennez en plus sur mon parcours en téléchargeant mon CV !</p>
            <a className='button' onClick={handleDownloadPDF}> <FaFileDownload size={20} className='buttonIcon' />Qui suis-je ?</a>
          </div>
        </div>
        <div className="separation-bar"></div>
        <div id='project' className="project">
          <h1>Projets</h1>
          <h2>Voici ma gallerie de projets pour en apprendre plus sur mon travail.</h2>
          <div className="carousel">
            <div className="carousel-card">
              <div class="top left"></div>
              <div class="bottom right"></div>
              <img className="image-container" src={images[currentIndex].url} alt={images[currentIndex].text} />
              <div className="text-card">
                <h1>{images[currentIndex].title}</h1>
                <p>{images[currentIndex].text}</p>
                <a className='button' href={images[currentIndex].link} target='blank'> <FiGithub size={20} className='buttonIcon' />Git <FaAngleDoubleRight size={20} className='buttonIcon' /></a>
              </div>
            </div>
            <div className="carousel-btn">
              <a onClick={prevSlide}><FaArrowLeft size={25} /></a>
              <a onClick={nextSlide}><FaArrowRight size={25} /></a>
            </div>

          </div>
        </div>
        <div className="separation-bar"></div>
        <div id='skills' className="skills">
          <h1 className='title'>Mes compétences</h1>
          <div className="framework">
            <h1>Frameworks</h1>
            <div className="cards">
              <div className="frameworksCard">
                <img src={Html} alt="" />
                <div className="card-text">
                  <h1>HTML</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={Css} alt="" />
                <img src={Sass} alt="" />
                <div className="card-text">
                  <h1>CSS / Sass</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={Js} alt="" />
                <div className="card-text">
                  <h1>Javascript</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={ReactLogo} alt="" />
                <div className="card-text">
                  <h1>React</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={Php} alt="" />
                <div className="card-text">
                  <h1>PHP</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={Node} alt="" />
                <div className="card-text">
                  <h1>Node Js</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={Postgre} alt="" />
                <div className="card-text">
                  <h1>PostreSql</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
              <div className="frameworksCard">
                <img src={MySql} alt="" />
                <div className="card-text">
                  <h1>MySql</h1>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h2>Expérience</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="langues">
            <h1>Langues</h1>
            <div className="flags">
              <img src={France} alt="" />
              <img src={Spain} alt="" />
              <img src={Uk} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About