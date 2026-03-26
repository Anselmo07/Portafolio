import "./skills.css";
import { useLanguage } from "../../context/languageContext";

// imágenes
import ts from "../../assets/typescript.png";
import api from "../../assets/api.png";
import git from "../../assets/Github.png";
import nest from "../../assets/nestjs.png";
import node from "../../assets/nodejs.png";
import cloudinary from "../../assets/cloudinary.png";
import es6 from "../../assets/js.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import postgres from "../../assets/Postgresql.png";
import postman from "../../assets/Postman.jpg";
import jira from "../../assets/jira.png";
import react from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import mongoDb from "../../assets/mongoDB.png";
import figma from "../../assets/figma.png";

const skills = [
  { img: ts, name: "TypeScript" },
  { img: nest, name: "NestJS" },
  { img: node, name: "Node.js" },
  { img: es6, name: "JavaScript" },
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: git, name: "Git" },
  { img: postgres, name: "PostgreSQL" },
  { img: postman, name: "Postman" },
  { img: api, name: "API" },
  { img: cloudinary, name: "Cloudinary" },
  { img: jira, name: "Jira" },
  { img: react, name: "React" },
  { img: nextjs, name: "Next.js" },
  { img: mongoDb, name: "MongoDB" },
  { img: figma, name: "Figma" },
];

const Skills = () => {
  const { lang } = useLanguage();
  
  return (
    <div className="skills">
      <h2 className="titleSkill"> 
        {lang === "es" ? (
            <>
              Habilidades
            </>
          ) : (
            <>
              Skills
            </>
        )}
      </h2>

      <div className="skillsGrid">
        {skills.map((skill, index) => (
          <div key={index} className="cardSkill">
            <img src={skill.img} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;