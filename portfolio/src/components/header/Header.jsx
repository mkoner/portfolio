import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header container-row">
            <div className="logo">
                <h1>Mamadou Koné</h1>
            </div>
            <div className="nav-social container-row">
            <nav className="nav-links container-row">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="social-icons container-row">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            </div>
        </header>
    );
};

export default Header;
