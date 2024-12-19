// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css' // Asegúrate de que Bootstrap esté importado

const Contact = () => {
    return (
        <div className='contact' id="contact"> 
            <h2>Contactame</h2>
                <div className='containerContact'>
                    <p>📩</p>
                    <p>anselmo.vecchio.jose@gmail.com</p>
                    <p style={{color:'green'}}>Enviar mensaje</p>
                </div>
            
        </div>
    );
};

export default Contact;

