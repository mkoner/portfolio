import React, { useState } from 'react';
import './Contact.css'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toLocaleString(),
        };
    
        try {
            const response = await fetch('https://alaar9q8db.execute-api.us-east-1.amazonaws.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Handle success (e.g., show a success message, clear the form, etc.)
            } else {
                console.error('Error:', response.statusText);
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Request failed:', error);
            // Handle request failure (e.g., show a network error message)
        } finally{
            setEmail("");
            setMessage("");
            setName("");
        }
    };
    

    return (
        <div className="contact container-row">
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
            <div className="social-links container-column">
                <h4>Mkoner</h4>
                <p>
                    Full stack Software Engineer
                </p>
                <p>
                    m-koner@outlook.com
                </p>
                <div className="links container-row">
                    <a href="https://www.linkedin.com/in/mamadou-kone-3b1694b9/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/mkoner" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;