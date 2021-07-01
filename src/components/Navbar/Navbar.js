import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import fire from "../../fire"

const handleLogout = () => {
    fire.auth().signOut();
}

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    EduAR
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/classes'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Class
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/hi' className='nav-links' style={{ color: "green" }} onClick={closeMobileMenu}>
                            A/आ
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-links' onClick={handleLogout}>
                            <img alt="logout" src="https://img.icons8.com/cotton/30/000000/logout-rounded-left.png" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;