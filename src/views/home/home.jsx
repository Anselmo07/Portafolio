import { useEffect } from "react";
import "./home.css";

const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".letra-por-letra");

        const handleAnimationEnd = (event) => {
            event.target.classList.remove("letra-por-letra");
            void event.target.offsetWidth;
            event.target.classList.add("letra-por-letra");
        };

        elements.forEach(element => element.addEventListener("animationend", handleAnimationEnd));

        return () => {
            elements.forEach(element => element.removeEventListener("animationend", handleAnimationEnd));
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
