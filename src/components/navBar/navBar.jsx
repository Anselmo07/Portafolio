import "./navBar.css";
import { useLanguage } from "../../context/languageContext";

const NavBar = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="NavBar">
      <div className="container">
        <ul>
          <li>
            <a href="#home">
              {lang === "es" ? "Inicio" : "Home"}
            </a>
          </li>
          <li>
            <a href="#project">
              {lang === "es" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a href="#contact">
              {lang === "es" ? "Contacto" : "Contact"}
            </a>
          </li>
        </ul>

        {/* BOTON IDIOMA */}
        <button className="langBtn" onClick={toggleLang}>
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;