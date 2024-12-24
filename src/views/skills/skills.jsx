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
                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3 border border-0" >
                        <img src={ts} alt="TypeScript" />
                    </div>
                    <div className="card mb-3 border border-0">
                        <img src={Nest} alt="NestJS" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={node} alt="Node.js" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3 border border-0" >
                        <img src={es6} alt="ES6" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={html} alt="HTML" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={css} alt="CSS" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3 border border-0" >
                        <img src={git} alt="Git" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={PostgresSQL} alt="API" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={jira} alt="Cloudinary" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3 border border-0" >
                        <img src={postman} alt="Git" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={api} alt="API" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={cloudinary} alt="Cloudinary" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3 border border-0" >
                        <img src={react} alt="react" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={nextjs} alt="nextjs" />
                    </div>
                    <div className="card mb-3 border border-0" >
                        <img src={mongoDb} alt="mongoDb" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;


// NodeJS - NestJS - TypeScript - Cloudinary - PostgresSQL - GITHUB - Apis