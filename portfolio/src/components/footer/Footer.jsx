import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer container-column">
            <div className="social-links container-row">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={25} />
                </a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={25} />
                </a>
                <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={25} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Mamadou Koné. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
