import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer container-column darkGreenBg">
            <div className="social-links container-row">
                <a href="https://www.linkedin.com/in/mamadou-kone-3b1694b9/" 
                    target="_blank" rel="noopener noreferrer" className='paleYellowColor'>
                    <FaLinkedin size={25} />
                </a>
                <a href="https://github.com/mkoner" target="_blank" rel="noopener noreferrer" className='paleYellowColor'>
                    <FaGithub size={25} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Mamadou Koné. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
