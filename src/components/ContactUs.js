import React from "react";

function ContactUs() {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#e9ecef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        flexDirection: window.innerWidth <= 768 ? "column" : "row", // Mobile-friendly layout
      }}
    >
      <div
        style={{
          flex: "0 0 200px",
          marginRight: window.innerWidth > 768 ? "40px" : "0", // Margin adjustments
          marginBottom: window.innerWidth <= 768 ? "20px" : "0", // Adds spacing on mobile
        }}
      >
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
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <h2
          style={{
            fontSize: window.innerWidth <= 768 ? "24px" : "28px",
            fontWeight: "bold",
            color: "#333",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          Fale Conosco
        </h2>
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "16px" : "18px",
            color: "#555",
            margin: "20px 0",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          Quer saber mais sobre nossos serviços ou conversar com nossa equipe?
          Estamos à disposição para ajudar você!
        </p>
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "16px" : "18px",
            color: "#333",
            margin: "10px 0",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          <strong>WhatsApp:</strong>{" "}
          <br/>
          <a
            href="https://wa.me/message/YEGZIQVM4JNWI1"
            style={{
              color: "#25D366",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            48 99 11 2929 7
          </a>
        </p>
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "16px" : "18px",
            color: "#333",
            margin: "10px 0",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          <strong>Email:</strong>{" "}
          <br/>
          <a
            href="mailto:rafaelfsteffens@gmail.com"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
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
