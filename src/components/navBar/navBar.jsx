import "./navBar.css";
import { useLanguage } from "../../context/languageContext";

import argFlag from "../../assets/Arg.png";
import usaFlag from "../../assets/us.png";

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

        <button
          className={`langSwitch ${lang === "en" ? "active" : ""}`}
          onClick={toggleLang}
        >
          <img src={argFlag} alt="Español" className="flagStatic" />
          <img src={usaFlag} alt="English" className="flagStatic" />

          <div className="switchCircle">
            <img
              src={lang === "es" ? argFlag : usaFlag}
              alt={lang === "es" ? "Español" : "English"}
              className="flagCircle"
            />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;