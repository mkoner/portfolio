import React, { useState } from 'react';
import './Contact.css'; // Optional for styling
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(`Email: ${email}, Message: ${message}`);
    };

    return (
        <div className="contact container-column">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className='container-column'>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            
            {/* Social Links Section */}
            <div className="social-links container-row">
                <p>Connect with me:</p>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    );
};

export default Contact;