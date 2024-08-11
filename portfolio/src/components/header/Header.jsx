import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../../logo.png'

const Header = () => {
    return (
        <header className="header container-row darkGreenBg">
            <div className="logo">
                <img src={logo} alt="logo" height={30}/>
            </div>
            <div className="nav-social container-row">
            <nav className="nav-links container-row">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="social-links container-row">
                <a href="https://www.linkedin.com/in/mamadou-kone-3b1694b9/" 
                target="_blank" rel="noopener noreferrer" className='paleYellowColor'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/mkoner" target="_blank" rel="noopener noreferrer" className='paleYellowColor'>
                    <FaGithub />
                </a>
            </div>
            </div>
        </header>
    );
};

export default Header;
