import React, { useState } from 'react'
import '../sass/main.scss'
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useLocation, Link } from "react-router-dom";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }
    let location = useLocation();

    const navigate = useNavigate();
    return (
        <div className="container">
            <nav>
                <div className="menu">
                    <h1 onClick={() => navigate('/')}> &lt; Noah Duminil &#47; &gt; </h1>
                    <FaBars id="menu-button" onClick={toggleMenu} size={35} className="i" />
                </div>
                <div className="nav-center">
                    <ul id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
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
}

export default Header