import "./footer.css"
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/Github.png";

const Footer = () => {

    return(
        <footer className="footer">
            <div className="cotainer">
            <a href="https://www.linkedin.com/in/anselmo-vecchio-26bb312b9/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Perfil de LinkedIn de Anselmo Vecchio" />
                </a>
                <a href="https://github.com/Anselmo07" target="_blank" rel="noopener noreferrer">
                    <img src={git} alt="Repositorio de GitHub de Anselmo Vecchio" />
                </a>
            </div>
            <div>
                <h2>ANSELMO VECCHIO</h2>
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;