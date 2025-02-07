import ts from "../../assets/typescript.png";
import api from "../../assets/api.png";
import git from "../../assets/Github.png";
import Nest from "../../assets/nestjs.png";
import node from "../../assets/nodejs.png";
import cloudinary from "../../assets/cloudinary.png";
import es6 from "../../assets/js.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import PostgresSQL from "../../assets/Postgresql.png";
import postman from "../../assets/Postman.jpg";
import jira from "../../assets/jira.png";
import react from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import mongoDb from "../../assets/mongoDB.png";

import "./skills.css";

const Skills = () => {
    return (
        <div className="skills">
            <h2 className='text-center titleSkill'>Habilidades</h2>
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex flex-row align-items-center m-3">
                    <div className="card mb-3 border border-0 cardSkill">
                        <img src={ts} alt="TypeScript" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill">
                        <img src={Nest} alt="NestJS" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={node} alt="Node.js" />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center m-3">
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={es6} alt="ES6" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={html} alt="HTML" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={css} alt="CSS" />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center m-3">
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={git} alt="Git" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={PostgresSQL} alt="API" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={jira} alt="Jira" />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center m-3 cardTwo">
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={postman} alt="Git" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={api} alt="API" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={cloudinary} alt="Cloudinary" />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center m-3">
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={react} alt="react" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={nextjs} alt="nextjs" />
                    </div>
                    <div className="card mb-3 border border-0 cardSkill" >
                        <img src={mongoDb} alt="mongoDb" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;