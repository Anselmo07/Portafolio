import "./navBar.css"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className="container">
                <ul>
                    <li><a href="#home" aria-label="Ir a la sección de inicio">Inicio</a></li>
                    <li><a href="#project" aria-label="Ir a la sección de proyectos">Proyectos</a></li>
                    <li><a href="#contact" aria-label="Ir a la sección de contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;