import "bootstrap/dist/css/bootstrap.min.css";
import swagger from "../.././assets/SWAGGER.png";
// import cybergames from "../.././assets/cybergames.png"
import cdlRecruiter from "../.././assets/cdlrecruiterPorfolio.png";
import chatbot from "../.././assets/chatbot.png";
import calculator from "../.././assets/calculator.png";
import movies from "../.././assets/pelis.png";
import "./projetc.css";

import { useState } from "react";

function Project() {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  return (
    <div id="project" className="project">
      <h2
        className="text-center"
        style={{ margin: " 7% 0 3% 0", fontSize: "60px" }}
      >
        {" "}
        Mis proyectos
      </h2>

      <div className="d-flex justify-content-center flex-wrap cardContainer">
        <div
          className="card m-5"
          style={{
            width: "45rem",
            height: "100%",
            border: "3px solid green",
            borderRadius: "3%",
            background: "black",
          }}
        >
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              margin: "2%",
              marginBottom: "%",
              color: "white",
              fontSize: "2rem",
            }}
          >
            CDL Recruiter
          </h5>
          <div className="card-body cardBody">
            <a href="https://www.cdl-recruiters.com">
              {" "}
              <img
                src={cdlRecruiter}
                className="card-img-top imgProjetc"
                alt="cdlRecruiter"
                style={{ height: "100%" }}
              />{" "}
            </a>
          </div>
          <div className="InfoMore">
            <span className="InfoMoreTittle">Mas informacion</span>
            <button className="InfoMoreButton"
              onClick={() => setMostrarInfo(!mostrarInfo)}
            >
              {mostrarInfo ? "-" : "+"}
            </button>
          </div>
          {mostrarInfo && (
            <div className="InfoMoreDescription">
              <p>
                CDL Recruiter es una plataforma web para optimizar el reclutamiento 
                de conductores con licencia comercial (CDL). Se enfoca en mejorar la experiencia de usuario y 
                automatizar el proceso de selección para empresas de transporte.
              </p>
            </div>
          )}
        </div>

        <div
          className="card m-5"
          style={{
            width: "45rem",
            height: "100%",
            border: "3px solid green",
            borderRadius: "3%",
            background: "black",
          }}
        >
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              margin: "2%",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Chatbot
          </h5>
          <div className="card-body cardBody">
            <a href="https://chatbot-de-sushi-anselmos-projects-96233391.vercel.app/">
              {" "}
              <img
                src={chatbot}
                className="card-img-top imgProjetc"
                alt="chatbot"
                style={{ height: "100%" }}
              />{" "}
            </a>
          </div>
          <div className="InfoMore">
            <span className="InfoMoreTittle">Mas informacion</span>
            <button className="InfoMoreButton"
              onClick={() => setMostrarInfo(!mostrarInfo)}
            >
              {mostrarInfo ? "-" : "+"}
            </button>
          </div>
          {mostrarInfo && (
            <div className="InfoMoreDescription">
              <p>
                Este es un proyecto de chatbot interactivo para un restaurante de sushi, donde los usuarios pueden consultar el menú, realizar pedidos y obtener información sobre el restaurante de forma automática.
              </p>
            </div>
          )}
        </div>

        <div
          className="card m-5"
          style={{
            width: "45rem",
            height: "100%",
            border: "3px solid green",
            borderRadius: "3%",
            background: "black",
          }}
        >
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              margin: "2%",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Peliculas
          </h5>
          <div className="card-body cardBody">
            <a href="https://cine-atuxthdcx-anselmos-projects-96233391.vercel.app">
              {" "}
              <img
                src={movies}
                className="card-img-top imgProjetc"
                alt="movies"
                style={{ height: "18rem" }}
              />{" "}
            </a>
          </div>
          <div className="InfoMore">
            <span className="InfoMoreTittle">Mas informacion</span>
            <button className="InfoMoreButton"
              onClick={() => setMostrarInfo(!mostrarInfo)}
            >
              {mostrarInfo ? "-" : "+"}
            </button>
          </div>
          {mostrarInfo && (
            <div className="InfoMoreDescription">
              <p>
                Este proyecto es una aplicación web desarrollada en JavaScript que permite explorar un catálogo de películas de manera organizada e intuitiva. La plataforma ofrece información detallada de cada título, incluyendo: <br /> <br />

⭐ Valoración <br />

📝 Descripción <br />

⏱️ Duración <br />

🎬 Director <br />

🎭 Género <br /> <br />

Además, cuenta con una sección dedicada a las películas próximas a estrenarse, lo que brinda una experiencia completa para quienes buscan mantenerse informados sobre novedades del cine.
              </p>
            </div>
          )}
        </div>

        <div
          className="card m-5"
          style={{
            width: "45rem",
            height: "100%",
            border: "3px solid green",
            borderRadius: "3%",
            background: "black",
          }}
        >
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              margin: "2%",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Calculadora
          </h5>
          <div className="card-body cardBody">
            <a href="https://calculator-five-indol.vercel.app/calculator">
              {" "}
              <img
                src={calculator}
                className="card-img-top imgProjetc"
                alt="calculator"
                style={{ height: "100%" }}
              />{" "}
            </a>
          </div>
          <div className="InfoMore">
            <span className="InfoMoreTittle">Mas informacion</span>
            <button className="InfoMoreButton"
              onClick={() => setMostrarInfo(!mostrarInfo)}
            >
              {mostrarInfo ? "-" : "+"}
            </button>
          </div>
          {mostrarInfo && (
            <div className="InfoMoreDescription">
              <p>
                Esta calculadora te permite realizar operaciones simples como sumar, restar, dividir y multiplicar.
              </p>
            </div>
          )}
        </div>

        <div
          className="card m-5"
          style={{
            width: "45rem",
            height: "100%",
            border: "3px solid green",
            borderRadius: "3%",
            background: "black",
          }}
        >
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              margin: "2%",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Api rest
          </h5>
          <div className="card-body cardBody">
            <a href="https://ecommerce-00vc.onrender.com/API">
              {" "}
              <img
                src={swagger}
                className="card-img-top imgProjetc"
                alt="swagger"
                style={{ height: "100%" }}
              />{" "}
            </a>
          </div>
          <div className="InfoMore">
            <span className="InfoMoreTittle">Mas informacion</span>
            <button className="InfoMoreButton"
              onClick={() => setMostrarInfo(!mostrarInfo)}
            >
              {mostrarInfo ? "-" : "+"}
            </button>
          </div>
          {mostrarInfo && (
            <div className="InfoMoreDescription">
              <p>
                Este e-commerce de dispositivos electrónicos, desarrollado en backend con NestJS y PostgreSQL, está diseñado para permitir a los usuarios visualizar y adquirir productos, como celulares, tablets y computadoras, mediante la creación de una cuenta de usuario.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
