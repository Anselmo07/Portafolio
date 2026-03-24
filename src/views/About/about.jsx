import "./about.css";
import cv from "../../assets/AnselmoVecchio.CV.pdf";
import { useLanguage } from "../../context/languageContext";

const getAge = () => {
  const birthDate = new Date(2003, 4, 7);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) age--;

  return age;
};

const About = () => {
  const { lang } = useLanguage();

  return (
    <section id="About" className="about">
      <p className="aboutText">
        {lang === "es" ? (
          <>
            Tengo {getAge()} años y soy de Entre Ríos, Argentina. Soy desarrollador Full Stack con especialización en backend, donde me enfoco en el desarrollo de soluciones robustas y escalables utilizando tecnologías como JavaScript y TypeScript. A lo largo de mi carrera, he adquirido experiencia en la creación de arquitecturas eficientes y en la optimización del rendimiento del lado del servidor.

            <br /><br />

            Me considero una persona comunicativa, entusiasta, empática y motivadora, con una mentalidad orientada al crecimiento continuo. Disfruto resolviendo problemas complejos, mejorando mis habilidades técnicas y colaborando en equipos multidisciplinarios para alcanzar objetivos comunes.

            <br /><br />

            Mi objetivo profesional es continuar desarrollándome en el ámbito tecnológico y contribuir con soluciones innovadoras a proyectos que generen un impacto positivo. Estoy comprometido con agregar valor a los equipos y las organizaciones donde trabajo, marcando la diferencia con dedicación y creatividad.
          </>
        ) : (
          <>
            I’m a Full Stack developer from Argentina and I am {getAge()} years old, Argentina. I am a Full Stack developer specialized in backend, where I focus on building robust and scalable solutions using technologies such as JavaScript and TypeScript. Throughout my career, I have gained experience in designing efficient architectures and optimizing server-side performance.

            <br /><br />

            I consider myself a communicative, enthusiastic, empathetic, and motivating person, with a mindset focused on continuous growth. I enjoy solving complex problems, improving my technical skills, and collaborating in multidisciplinary teams to achieve common goals.

            <br /><br />

            My professional goal is to continue growing in the tech field and contribute with innovative solutions to projects that generate a positive impact. I am committed to adding value to the teams and organizations I work with, making a difference through dedication and creativity.
          </>
        )}
      </p>

      <a className="curriculm" href={cv} download>
        {lang === "es" ? "Descargar CV" : "Download CV"}
      </a>
    </section>
  );
};

export default About;