import { useEffect } from "react";
import { useLanguage } from "../../context/languageContext";
import "./home.css";

const Home = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    const elements = document.querySelectorAll(".letra-por-letra");

    const handleAnimationEnd = (event) => {
      event.target.classList.remove("letra-por-letra");
      void event.target.offsetWidth;
      event.target.classList.add("letra-por-letra");
    };

    elements.forEach((element) =>
      element.addEventListener("animationend", handleAnimationEnd)
    );

    return () => {
      elements.forEach((element) =>
        element.removeEventListener("animationend", handleAnimationEnd)
      );
    };
  }, [lang]);

  const text = {
    es: {
      greeting: "Hola! soy",
      role: "Desarrollador FULLSTACK",
    },
    en: {
      greeting: "Hi! I'm",
      role: "FULLSTACK Developer",
    },
  };

  const currentText = text[lang];

  return (
    <section className="home" id="home">
      <h2>
        {currentText.greeting} <span className="name">Anselmo</span>
      </h2>
      <h3 className="letra-por-letra">{currentText.role}</h3>
    </section>
  );
};

export default Home;