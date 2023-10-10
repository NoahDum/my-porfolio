import React, { useState , useEffect} from 'react'
import '../sass/header.scss'
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useLocation, Link } from "react-router-dom";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
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
            <nav>
                <div className="menu">
                    <h1 onClick={() => navigate('/')}> &lt; Noah Duminil &#47; &gt; </h1>
                    {isMobile && (
                        <FaBars id="menu-button" onClick={toggleMenu} size={35} className="i" />
                    )}
                </div>
                <div className="nav-center">
                    <ul id="menu" style={{ display: menuOpen || !isMobile ? 'flex' : 'none' }}>
                        <li>
                            {location.pathname !== "/about" && <Link to="/about">Ma présentation</Link>}
                        </li>
                        <li>
                            {location.pathname !== "/skill" && <Link to="/skill">Mes compétences</Link>}
                        </li>
                        <li>
                            {location.pathname !== "/project" && <Link to="/project">Mes projets</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
    // return (
    //     <div className="headerContainer">
    //         <nav>
    //             <div className="menu">
    //                 <h1 onClick={() => navigate('/')}> &lt; Noah Duminil &#47; &gt; </h1>
    //                 <FaBars id="menu-button" onClick={toggleMenu} size={35} className="i" />
    //             </div>
    //             <div className="nav-center">
    //                 <ul id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
    //                     <li>
    //                         {location.pathname !== "/about" && <Link to="/about">Ma présentation</Link>}
    //                     </li>
    //                     <li>
    //                         {location.pathname !== "/skill" && <Link to="/skill">Mes compétences</Link>}
    //                     </li>
    //                     <li>
    //                         {location.pathname !== "/project" && <Link to="/project">Mes projets</Link>}
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     </div>

    // )
}

export default Header