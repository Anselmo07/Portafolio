import ts from "../../assets/ts.png";
import api from "../../assets/api.png";
import git from "../../assets/github_logo.jfif";
import Nest from "../../assets/Nest.jpg";
import node from "../../assets/node.png";
import cloudinary from "../../assets/cloudinary.jpg";
import es6 from "../../assets/es6.jpg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import PostgresSQL from "../../assets/Postgresql.png";
import postman from "../../assets/postman.jfif";
import jira from "../../assets/jira.png";

import "./skills.css";

const Skills = () => {
    return (
        <div className="skills">
            <h2 className='text-center'>🛠️ Tecnologías y herramientas</h2>
            <div className="d-flex justify-content-center flex-wrap">
                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={ts} className="card-img-top" alt="TypeScript" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={Nest} className="card-img-top" alt="NestJS" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={node} className="card-img-top" alt="Node.js" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={es6} className="card-img-top" alt="ES6" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={html} className="card-img-top" alt="HTML" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={css} className="card-img-top" alt="CSS" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={git} className="card-img-top" alt="Git" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={PostgresSQL} className="card-img-top" alt="API" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={jira} className="card-img-top" alt="Cloudinary" />
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center m-3">
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={postman} className="card-img-top" alt="Git" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={api} className="card-img-top" alt="API" />
                    </div>
                    <div className="card mb-3" style={{ width: '8rem' }}>
                        <img src={cloudinary} className="card-img-top" alt="Cloudinary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;


// NodeJS - NestJS - TypeScript - Cloudinary - PostgresSQL - GITHUB - Apis