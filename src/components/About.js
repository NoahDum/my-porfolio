import React from 'react'
import Header from './Header'
import avatar from '../img/avatar.png'
import { Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Header />
      <div className="contain container">
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <p>Je suis un jeune développeur diplômé d'un Bac STMG aujourd'hui en formation au sein du centre M2I Formation pour devenir Front-End, passionné du monde numérique depuis toujours, je souhaite m'épanouir dans ce domaine durant toute ma vie professionnelle.</p>
          <p>Je sais coder dans plusieurs langages évidemment mais je vais pas te spoil ! Si tu veux savoir lesquels fonce dans la section <Link to="/skill"> Mes compétences</Link>.</p>
        </div>
      </div>
    </div>
  )
}

export default About