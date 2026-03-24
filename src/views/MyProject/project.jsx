import { useState } from "react";
import projects from "./projects.js";
import { useLanguage } from "../../context/languageContext";
import "./project.css";

// imágenes
import cdlRecruiter from "../../assets/cdlrecruiterPorfolio.png";
import ecommerce from "../../assets/ecommerce.png";
import chatbot from "../../assets/chatbot.png";
import movies from "../../assets/pelis.png";
import calculator from "../../assets/calculator.png";
import swagger from "../../assets/SWAGGER.png";

const images = {
  cdlRecruiter,
  ecommerce,
  chatbot,
  movies,
  calculator,
  swagger
};

function Project() {
  const [openCard, setOpenCard] = useState(null);
  const { lang } = useLanguage();

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div id="project" className="project">
      <h2 className="projectTitle">
        {lang === "es" ? "Mis proyectos" : "My Projects"}
      </h2>

      <div className="cardContainer">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h5 className="cardTitle">{project.title}</h5>

            <div className="cardBody">
              <a href={project.link}>
                <img
                  src={images[project.img]}
                  className="imgProject"
                  alt={project.title}
                />
              </a>
            </div>

            <div className="InfoMore">
              <span className="InfoMoreTittle">
                {lang === "es" ? "Más información" : "More info"}
              </span>

              <button
                className="InfoMoreButton"
                onClick={() => toggleCard(project.id)}
              >
                {openCard === project.id ? "-" : "+"}
              </button>
            </div>

            {openCard === project.id && (
              <div className="InfoMoreDescription">
                <p>{project.description[lang]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;