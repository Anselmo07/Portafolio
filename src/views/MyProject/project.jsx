// import React from 'react';
// import { Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloudinary from "../.././assets/cloudinary.jpg"
import cybergames from "../.././assets/cybergames.png"

function App() {
  return (
    <div>
      <h2 className='text-center'>💼 Proyectos</h2>
      
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card m-5" style={{ width: '18rem' }}>
          <img src={cybergames} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">CyberGames</h5>
            <p className="card-text">Este Ecommerce esta disenado para que el usuario pueda compra products</p>
            <a href="https://pf-ecommerce2024.vercel.app/home" className="btn" style={{ backgroundColor: 'green', color: 'white' }}>Go Cybergames</a>
          </div>
        </div>
        <div className="card m-5" style={{ width: '18rem' }}>
          <img src={cloudinary} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Ecommerce</h5>
            <p className="card-text">Este Ecommerce esta disenado para que el usuario pueda compra products</p>
            <a href="#" className="btn" style={{ backgroundColor: 'green', color: 'white' }}>Go somewhere</a>
          </div>
        </div>
      </div>  
    </div>
    
  );
}

export default App;
