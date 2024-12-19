import "./Navbar.css"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div>
                <ul>
                    <li><a href="#about">INICIO</a></li>
                    <li><a href="#project">PROYECTOS</a></li>
                    <li><a href="#contact">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;