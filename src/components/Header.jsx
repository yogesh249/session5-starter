import React from 'react';
import '../assets/css/header.css';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header id="header" className="header">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <a href="/" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">Dewi</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="/">Portfolio</Link></li>
                        <li><Link to="/team">Team</Link></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <a className="cta-btn" href="index.html#about">Get Started</a>
            </div>
        </header>
    );
};

export default Header;