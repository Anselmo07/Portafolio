import { useEffect } from "react";
import "./home.css";

const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".letra-por-letra");

        elements.forEach((element) => {
            // Reiniciar animación cuando termine
            element.addEventListener("animationend", () => {
                element.classList.remove("letra-por-letra");
                void element.offsetWidth; // Reflow para reiniciar la animación
                element.classList.add("letra-por-letra");
            });
        });

        // Limpieza del evento al desmontar el componente
        return () => {
            elements.forEach((element) => {
                element.removeEventListener("animationend", () => {});
            });
        };
    }, []);

    return (
        <section className="home" id="home">
            <h2>
                Hola! soy <span className="name">Anselmo</span>
            </h2>
            <h3 className="letra-por-letra">Desarrollador BACKEND</h3>
        </section>
    );
};

export default Home;
