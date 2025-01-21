// import React from 'react';
// import { Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swagger from "../.././assets/SWAGGER.png"
import cybergames from "../.././assets/cybergames.png"
import chatbot from "../.././assets/chatbot.png"
import './projetc.css'

function Project() {
  return (
    <div id="project" className="project">
      <h2 className='text-center' style={{ margin: ' 7% 0 3% 0',
    fontSize: '60px'}}> Proyectos</h2>
      
      <div className="d-flex justify-content-center flex-wrap cardContainer">
      <div className="card m-5" style={{ width: '45rem', height: "100%", border:'3px solid green', background:'black' }}>
          <h5 className="card-title" style={{textAlign:'center', margin:'2%', color:'white', fontSize:'2rem'}}>Chatbot</h5>
          <div className="card-body cardBody">
            <a href="https://chatbot-de-sushi-anselmos-projects-96233391.vercel.app/"> <img src={chatbot} className="card-img-top imgProjetc" alt="..." style={{height:'100%'}}/> </a>
          </div>
        </div>
        <div className="card m-5" style={{ width: '45rem', height: "100%", border:'3px solid green', background:'black' }}>
          <h5 className="card-title" style={{textAlign:'center', margin:'2%', color:'white', fontSize:'2rem'}}>CyberGames</h5>
          <div className="card-body cardBody">
            <a href="https://pf-ecommerce2024.vercel.app/home"> <img src={cybergames} className="card-img-top imgProjetc" alt="..." style={{height:'100%'}}/> </a>
          </div>
        </div>
        <div className="card m-5" style={{ width: '45rem', height: "100%", border:'3px solid green', background:'black' }}>
          <h5 className="card-title" style={{textAlign:'center', margin:'2%', color:'white', fontSize:'2rem'}}>Api rest</h5>
          <div className="card-body cardBody">
            <a href="https://ecommerce-00vc.onrender.com/API"> <img src={swagger} className="card-img-top imgProjetc" alt="..." style={{height:'100%'}}/> </a>
          </div>
        </div>
      </div>  
    </div>
    
  );
}

export default Project;
