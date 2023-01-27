import React, { Component } from 'react'
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaGithub, FaArrowCircleLeft, FaArrowCircleRight, FaDatabase } from 'react-icons/fa';
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid"
import { config } from "react-spring";
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'

export default class Skill extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    };

    slides = [
        {
            key: uuidv4(),
            content:
                <div className="element">
                    <div className="logo">
                        <FaHtml5 size={50} />
                    </div>
                    <p>J'ai appris à créer et remplir un document HTML5 avec de nombreuses fonctionnalités telles que faire une navbar faire des carroussel, des listes, des formulaires et encore pleins d'autres choses que vous pourrez retrouver sur la section projets de ce portfolio. </p>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="element">
                    <div className="logo">
                        <FaCss3Alt size={50} />
                        <FaSass size={50} />
                    </div>
                    <p> Je maitrise désormais pas mal de fonctionnalités pour styliser une page web avec Css ou Sass telle que du flexbox, le positionnement, jouer sur les couleurs des élément. J'ai appris à maitriser les atouts de Sass, le Sass imbriqués par exemple. </p>
                </div>

        },
        {
            key: uuidv4(),
            content:
                <div className="element">
                    <div className="logo">
                        <FaJsSquare size={50} />
                    </div>
                    <p>J'ai appris à utiliser et maitriser le language Javascript qui consiste à avoir un site, dynamique, en interaction avec son utilisateur et c'est ce que j'ai réussi à maitriser, le fait d'utiliser et stocker des informations données par l'utilisateur.</p>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="element">
                    <div className="logo">
                        <FaReact size={50} />
                    </div>
                    <p>React est un framework Javascript que j'ai appris à comprendre, à utiliser et à maitriser des fonctionnalités telles que les routes ou encore le redux toolkit qui permet de faciliter l'utilisation de React. De plus, je maitrise également React Native où j'ai développé des applications mobiles pour IOS et Androïd, vous pouvez retrouver un exemple dans ma section<Link to="/project"> project</Link> </p>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="element">
                    <div className="logo">
                        <FaGithub size={50} />
                    </div>
                    <p>GitHub est un service en ligne basé sur le logiciel Git qui permet à des développeurs de stocker et de gérer leur code, de suivre et de contrôler les modifications apportées au code, et de travailler en collaboration avec d'autres développeurs sur le même projet.</p>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="element">
                    <div className="logo">
                        <FaDatabase size={50} />
                    </div>
                    <p>J'ai appris à créer une base de donnée en SQL avec le logicel DBeaver, ainsi qu'a chercher n'importe quelle informations de ma base de données grâce à des requêtes.</p>
                </div>
        }
    ];

    render() {
        return (
            <div className='maitrises' style={{ height: "60vh" }}>
                <header>
                    <Header />
                </header>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    animationConfig={this.state.config}
                />
                <div
                    style={{
                        margin: "0 auto",
                        marginTop: "2rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around"
                    }}
                >
                    <div>
                        <FaArrowCircleLeft size={50} color="#F6F5EC"
                            className="forwardandbackicons"
                            onClick={() => {
                                this.setState({ goToSlide: this.state.goToSlide - 1 });
                            }}
                        />
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <FaArrowCircleRight size={50} color="#F6F5EC"
                            className="forwardandbackicons"
                            onClick={() => {
                                this.setState({ goToSlide: this.state.goToSlide + 1 });
                            }}
                        />
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}