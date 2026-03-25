import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/languageContext";
import "./contact.css";

const Contact = () => {
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const text = {
    es: {
      title: "Contacto",
      subtitle:
        "¿Tenés una idea o proyecto en mente? Estoy disponible para trabajar juntos.",
      namePlaceholder: "Nombre y Apellido",
      emailPlaceholder: "Tu Email",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Escribí tu mensaje...",
      button: "Enviar mensaje",
      success: "Mensaje enviado correctamente 🚀",
      error: "Error al enviar el mensaje ❌",
    },
    en: {
      title: "Contact",
      subtitle:
        "Do you have an idea or project in mind? I’m available to work together.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Write your message...",
      button: "Send message",
      success: "Message sent successfully 🚀",
      error: "Error sending message ❌",
    },
  };

  const currentText = text[lang];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uh3jav8",
        "template_4r93fyr",
        form,
        "1ljvOtWeW88UAQKqJ"
      )
      .then(() => {
        alert(currentText.success);
        setForm({ name: "", email: "", title: "", message: "" });
      })
      .catch(() => {
        alert(currentText.error);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contactTitle">{currentText.title}</h2>

      <p className="contactSubtitle">{currentText.subtitle}</p>

      <form className="contactCard" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={currentText.namePlaceholder}
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder={currentText.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder={currentText.subjectPlaceholder}
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder={currentText.messagePlaceholder}
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">{currentText.button}</button>
      </form>
    </section>
  );
};

export default Contact;