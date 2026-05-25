import { useState, useEffect } from "react";
import projects from "./projects.js";
import { useLanguage } from "../../context/languageContext";
import "./project.css";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  const { lang } = useLanguage();

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="project" className="project">
      <h2 className="projectTitle">
        {lang === "es" ? "Mis proyectos" : "My Projects"}
      </h2>

      <div className="timeline">

        {/* LINEA */}
        <div className="timelineLine">
          <div
            className="timelineGlow"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`timelineItem ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >

            {/* DOT */}
            <div className="timelineDot"></div>

            {/* YEAR */}
            <span className="projectYear">
              {project.year}
            </span>

            {/* CARD */}
            <div className="card">

              <h5 className="cardTitle">
                {project.title}
              </h5>

              <span className="projectTech">
                {project.tech}
              </span>

              <div className="cardBody">
                <a href={project.link} target="_blank">
                  <img
                    src={images[project.img]}
                    className="imgProject"
                    alt={project.title}
                  />
                </a>
              </div>

              <div className="InfoMore">
                <span className="InfoMoreTittle">
                  {lang === "es"
                    ? "Más información"
                    : "More info"}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;