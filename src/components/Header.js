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
        <nav>
            <div className="menu">
                <h1> &lt; Noah Duminil &#47; &gt; </h1>
                <FaBars id="menu-button" onClick={toggleMenu} size={35} />
            </div>
            <ul id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                <li onClick={() => navigate('/project')}>
                    Mes projets
                </li>
                <li onClick={() => navigate('/maitrises')}>
                    Mes maitrises
                </li>
            </ul>
        </nav>
    )
}

export default Header