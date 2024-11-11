import React from "react";

function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        textAlign: "center",
        padding: "180px 20px 20px", 
        color: "#fff",
        overflow: "hidden",
        minHeight: "50vh",
      // @media (height < 777) {
      //   minHeight:"30vh"
      // }
      }}
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: "brightness(0.5)",
        }}
      >
        <source src="/gifBack.mp4" type="video/mp4" />
        {/* Para navegadores que não suportam o vídeo */}
        Seu navegador não suporta a exibição do vídeo.
      </video>

      {/* Conteúdo do Hero */}
      <h3 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
        Decisões inteligentes precisam de dados inteligentes
      </h3>
      <p style={{ fontSize: "1.3rem", marginTop: "15px", opacity: 0.9 }}>
        Descubra o poder do hidrogênio e transforme o mercado com inovação.
      </p>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "1.1rem",
          color: "white",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "30px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Explore Agora
      </button>
    </section>
  );
}

export default HeroSection;
