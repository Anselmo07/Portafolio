// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'

const Contact = () => {
    return (
        <div className='contact' id="contact"> 
            <h2>Contactame</h2>
                <div className='containerContact'>
                    <p>📩</p>
                    <a href="anselmo.vecchio.jose@gmail.com@gmail.com" target="_blank" rel="noopener noreferrer">anselmo.vecchio.jose@gmail.com</a>
                    <p style={{color:'green'}}>Enviar mensaje</p>
                </div>
            
        </div>
    );
};

export default Contact;