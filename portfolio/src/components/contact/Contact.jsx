import React, { useState } from 'react';
import './Contact.css'; 
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';


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
                toast.success(`Thanks ${name} 😊, I will get back to you soon if needed`)
            } else {
                toast.error('Oops ... SOmething went wrong!')  
            }
        } catch (error) {
            toast.error('Oops ... SOmething went wrong!')
        } finally{
            setEmail("");
            setMessage("");
            setName("");
        }
    };
    

    return (
        <div className="contact container-row paleYellowBg" id='contact'>
            <form onSubmit={handleSubmit} className='container-column'>
                <div className='form-element'>
                    <input 
                        placeholder='Name'
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-element'>
                    <input 
                        placeholder='Email'
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className='form-element'>
                    <textarea 
                        placeholder='Your message'
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className='vibrantOrangeBg'>Send Message</button>
            </form>
            
            {/* Social Links Section */}
            <div className="info container-column">
                <h4 className='lightGreenColor'>Mkoner</h4>
                <p>
                    Full stack Software Engineer
                </p>
                <p>
                    m-koner@outlook.com
                </p>
                <div className="social-links container-row">
                    <a href="https://www.linkedin.com/in/mamadou-kone-3b1694b9/" 
                        target="_blank" rel="noopener noreferrer" className='vibrantOrangeColor'>
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/mkoner" target="_blank" rel="noopener noreferrer"
                        className='vibrantOrangeColor'>
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Contact;