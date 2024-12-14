// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css' // Asegúrate de que Bootstrap esté importado

const Contact = () => {
    return (
        <div className="container my-5"> {/* Contenedor principal con márgenes verticales */}
            <div className="card text-center shadow-lg cardContac"> {/* Card con sombra intensa */}
                <div className="card-header " style={{ backgroundColor: 'green', color: 'white' }}> {/* Cabecera de la card */}
                    <h3 className="mb-0">Contacto</h3> {/* Título dentro de la card */}
                </div>
                <div className="card-body">
                    <h5 className="card-text mb-3">
                        <i className="bi bi-linkedin"></i> {/* Icono de LinkedIn */}
                        LinkedIn: <a href="https://www.linkedin.com/in/anselmo-vecchio-26bb312b9/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Anselmo Vecchio</a>
                    </h5>
                    <h5 className="card-text mb-3">
                        <i className="bi bi-github"></i> {/* Icono de GitHub */}
                        GitHub: <a href="https://github.com/Anselmo07" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Anselmo07</a>
                    </h5>
                    <h5 className="card-text mb-3">
                        <i className="bi bi-envelope"></i> {/* Icono de Email */}
                        Mail: <a href="mailto:anselmo.vecchio.jose@gmail.com" className="text-decoration-none">anselmo.vecchio.jose@gmail.com</a>
                    </h5>
                </div>
                <div className="card-footer text-muted"> {/* Pie de la card */}
                    <small>¡No dudes en contactarme!</small>
                </div>
            </div>
        </div>
    );
};

export default Contact;

