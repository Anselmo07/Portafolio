import "./footer.css"
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/Github.png";

const Footer = () => {

    return(
        <div className="footer">
            <div className="cotainer">
                <a href="https://www.linkedin.com/in/anselmo-vecchio-26bb312b9/"> <img src={linkedin} alt="Linkedin" /> </a>
                <a href="https://github.com/Anselmo07"><img src={git} alt="GitHub" />  </a>
            </div>
            <div>
                <h2>ANSELMO VECCHIO</h2>
            </div>
        </div>
    )
}

export default Footer;