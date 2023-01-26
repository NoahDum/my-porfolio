import React, { useState } from 'react'
import '../sass/main.scss'
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }

    const navigate = useNavigate();
    return (
        <div className="container">
            <nav>
                <div className="menu">
                    <h1 onClick={() => navigate('/')}> &lt; Noah Duminil &#47; &gt; </h1>
                    <FaBars id="menu-button" onClick={toggleMenu} size={35} className="i"/>
                </div>
                <div className="nav-center">
                <ul id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                    <li onClick={() => navigate('/project')}>
                        Mes projets
                    </li>
                    <li onClick={() => navigate('/maitrises')}>
                        Mes maitrises
                    </li>
                </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header