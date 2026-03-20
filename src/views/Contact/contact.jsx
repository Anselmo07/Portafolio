import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

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
        alert("Mensaje enviado correctamente 🚀");
        setForm({ name: "", email: "", title: "", message: "" });
      })
      .catch(() => {
        alert("Error al enviar el mensaje ❌");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contactTitle">Contacto</h2>

      <p className="contactSubtitle">
        ¿Tenés una idea o proyecto en mente? Estoy disponible para trabajar
        juntos.
      </p>

      <form className="contactCard" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Asunto"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Escribí tu mensaje..."
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
};

export default Contact;