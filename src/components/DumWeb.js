import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../sass/dumweb.scss'
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";


const DumWeb = () => {
  return (
    <div className='dumweb'>
      <Header />
      <div className="contain container ">
        <h1>
          Dumweb solutions
        </h1>
        <div className="presentation">
          <p>
            Chez DumWeb Solutions, nous sommes passionnés par la création de solutions web sur mesure pour répondre à vos besoins uniques. Que vous ayez besoin d'un site web élégant et personnalisé, que vous souhaitiez explorer le potentiel du no code ou que vous recherchiez des outils pratiques grâce à notre portail SaaS, nous sommes là pour vous.
          </p>
          <h2>
            Notre Engagement : Votre Réussite en Ligne
          </h2>
          <p>
            Notre équipe dédiée d'experts en développement web travaille main dans la main avec vous pour donner vie à vos idées et projets. Nous comprenons que chaque entreprise est unique, c'est pourquoi nous mettons un point d'honneur à personnaliser nos solutions pour correspondre à votre vision.
          </p>
        </div>
        <div className="offer">
          <h2>Ce que nous offrons : </h2>
          <div className="cards">
            <div className="card">
              <h1>Site Web sur-mesure</h1>
              <ul>
                <li>Un rendez-vous pour connaître vos besoins.</li>
                <li>Maquettes du site à partir du cahier des charges.</li>
                <li>Livraison du site après validation des maquettes sous un délais fixé.</li>
              </ul>
              <button>Sur devis</button>
            </div>
            <div className="card">
              <h1>Site Web no-code</h1>
              <ul>
                <li>Un rendez-vous pour connaître vos besoins.</li>
                <li>Maquettes du site à partir du cahier des charges.</li>
                <li>Livraison express d’un site web no code</li>
              </ul>
              <button>A partir de 170€</button>
            </div>
            <div className="card">
              <h1>Portail SaaS</h1>
              <ul>
                <li>Un rendez-vous pour connaître vos besoins.</li>
                <li>Maquettes du site à partir du cahier des charges.</li>
                <li>Livraison d’un portail web avec prise de rendez-vous, automatisations de messages ...</li>
              </ul>
              <button>200€ / mois</button>
            </div>
          </div>
          <div className="contact">
            <h2>Contacter l'entreprise</h2>
            <p>Que vous ayez des questions, des idées de projet passionnantes ou simplement le désir de discuter de votre présence en ligne, nous sommes là pour vous. Chez DumWeb Solutions, nous sommes dédiés à offrir des solutions de développement web exceptionnelles et à fournir un service client de premier ordre.</p>
            <div className="contactBoard">
              <div className="flexcol">
                <div className="phone">
                  <h1>
                    Téléphone
                  </h1>
                  <div className="Iconflex">
                    <FaPhoneAlt size={15} />
                    <a href="tel:+33612671569">06 12 67 15 69</a>
                  </div>
                </div>
                <div className="phone">
                  <h1>E-mail</h1>
                  <div className="Iconflex">
                    <FiMail size={15} />
                    <a href="mailto:dumweb.solutions@gmail.com" target="_blank">dumweb.solutions@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="hours">
                <h1>Horaires D'ouverture</h1>
                <div className="daysboard">
                  <div className="firstdays">
                    <div className="days">
                      <h2>Lundi</h2>
                      <p>10:00 - 20:00</p>
                    </div>
                    <div className="days">
                      <h2>Mardi</h2>
                      <p>10:00 - 20:00</p>
                    </div>
                    <div className="days">
                      <h2>Mercredi</h2>
                      <p>10:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="lastdays">
                    <div className="days">
                      <h2>Jeudi</h2>
                      <p>10:00 - 20:00</p>
                    </div>
                    <div className="days">
                      <h2>Vendredi</h2>
                      <p>10:00 - 20:00</p>
                    </div>
                    <div className="days">
                      <h2>Samedi</h2>
                      <p>10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DumWeb