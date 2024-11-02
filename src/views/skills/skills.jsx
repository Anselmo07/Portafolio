import ts from "../.././assets/ts.png"
import api from "../.././assets/api.png"
import git from "../.././assets/git.png"
import Nest from "../.././assets/Nest.jpg"
import node from "../.././assets/node.png"
import cloudinary from "../.././assets/cloudinary.jpg"

import "./skills.css"

const Skills = () => {
    return(
        <section id='skills' className="skills">
            <div className="ts">
                <img src={ts}/>
            </div>
            <div className="api">
                <img src={api}/>
            </div>
            <div className="nest">
                <img src={Nest}/>
            </div>
            <div className="node">
                <img src={node}/>
            </div>
            <div className="git">
                <img src={git}/>
            </div>
            <div className="cloudinary">
                <img src={cloudinary}/>
            </div>
        </section>
    );
};

export default Skills

// NodeJS - NestJS - TypeScript - Cloudinary - PostgresSQL - GITHUB - Apis