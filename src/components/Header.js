import React, { useState, useEffect } from 'react'
import '../sass/header.scss'
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
        console.log(menuOpen)
    }
    let location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            // Vérifiez la largeur de l'écran ici, par exemple, 768px
            setIsMobile(window.innerWidth <= 768);
        };

        // Écoutez le redimensionnement de la fenêtre pour mettre à jour isMobile
        window.addEventListener('resize', handleResize);

        // Appelez la fonction de gestion du redimensionnement une fois au chargement de la page
        handleResize();

        // Nettoyez l'écouteur d'événements lorsqu'il n'est plus nécessaire
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="headerContainer">
            <nav style={{
                flexDirection: menuOpen ? 'column' : 'row',
            }}>
                <div className="menu">
                    <h1 onClick={() => navigate('/')}> &lt; Noah Duminil &#47; &gt; </h1>
                    {isMobile && (
                        <FaBars id="menu-button" onClick={toggleMenu} size={35} className="i" />
                    )}
                </div>
                <div className="nav-center">
                    <div className="navList" style={{
                        display: menuOpen || !isMobile ? 'flex' : 'none',
                        flexDirection: menuOpen || isMobile ? 'column' : 'row',
                    }}>
                        <Link to="/about#about">About</Link>
                        <Link to="/about#project">Project</Link>
                        <Link to="/about#skills">Skills</Link>
                        <Link to="/dumweb">DumWeb</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header

// <div className="headerContainer">
//     <nav style={{
//         flexDirection: menuOpen ? 'column' : 'row',
//     }}>
//         <div className="menu">
//             <h1 onClick={() => navigate('/')}> &lt; Noah Duminil &#47; &gt; </h1>
//             {isMobile && (
//                 <FaBars id="menu-button" onClick={toggleMenu} size={35} className="i" />
//             )}
//         </div>
//         <div className="nav-center">
//             <div className="navList" style={{
//                 display: menuOpen || !isMobile ? 'flex' : 'none',
//                 flexDirection: menuOpen || isMobile ? 'column' : 'row',
//             }}>
//                 <a href="">{<Link to="/about">About</Link>}</a>
//                 <a href="">{<Link to="/skill">Skills</Link>}</a>
//                 <a href="">{<Link to="/project">Projects</Link>}</a>
//             </div>
//         </div>
//     </nav>
// </div>