import React from "react";

function ContactUs() {
  return (
    <section style={{
      padding: "60px 20px",
      backgroundColor: "#e9ecef",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "left"
    }}>
      <div style={{ flex: "0 0 200px", marginRight: "40px" }}>
        <img
          src="contato.jpg"
          alt="Imagem de Contato"
          style={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }}
        />
      </div>
      <div style={{ maxWidth: "500px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>
          Fale Conosco
        </h2>
        <p style={{ fontSize: "18px", color: "#555", margin: "20px 0" }}>
          Quer saber mais sobre nossos serviços ou conversar com nossa equipe?
          Estamos à disposição para ajudar você!
        </p>
        <p style={{ fontSize: "18px", color: "#333", margin: "10px 0" }}>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/message/YEGZIQVM4JNWI1"
            style={{
              color: "#25D366",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            48 99 11 2929 7
          </a>
        </p>
        <p style={{ fontSize: "18px", color: "#333", margin: "10px 0" }}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:rafaelfsteffens@gmail.com"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            rafaelfsteffens@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default ContactUs;
