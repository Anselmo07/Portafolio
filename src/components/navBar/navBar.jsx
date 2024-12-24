import "./navBar.css"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div className="container">
                <ul>
                    <li><a href="#home">INICIO</a></li>
                    <li><a href="#project">PROYECTOS</a></li>
                    <li><a href="#contact">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;