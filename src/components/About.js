import React, { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f9",
        minHeight: "50vh",
        marginTop: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "80%",
          backgroundColor: "#ffffff",
          padding: "1rem",
          borderRadius: "10px",
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Seção de texto */}
        <div
          style={{
            flex: "1",
            minWidth: "0",
            margin: "0",
            textAlign: "center",
            padding: "20px",
            width: "100%", // Garante que o texto ocupe 100% da largura
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
              margin: "0 0 1rem 0",
              textAlign: "center",
            }}
          >
            Quem somos?
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#333",
              lineHeight: "1.8",
              textAlign: "justify",
              margin: "0",
              fontWeight: "300",
            }}
          >
            A <strong style={{ color: "#007bff" }}>HBR - Hidrogênio Brasil</strong>, com sede em Florianópolis e coordenada por Rafael Steffens, é uma plataforma inovadora de inteligência de mercado voltada para o setor de hidrogênio. Nossa plataforma já mapeia todos os projetos de hidrogênio em andamento no Brasil, oferecendo uma visão analítica e completa das iniciativas no país. Estamos agora em busca de parceiros estratégicos para expandir essa visão, desenvolvendo mapas de potencial de produção e de consumo de hidrogênio.
          </p>
        </div>


      </div>
      

      {/* Estilos de responsividade para mobile */}
      <style>
        {`
          /* Responsividade para telas pequenas */
          @media (max-width: 768px) {
            .about-logo {
              display: none; /* Remove a imagem completamente no mobile */
            }

            div > div {
              flex-direction: column; /* Coloca a imagem e o texto em coluna */
              align-items: center; /* Centraliza o conteúdo */
              width: 100%; /* Garante que a largura ocupe 100% da tela */
            }

            div > div > div {
              width: 100%; /* O texto deve ocupar toda a largura disponível */
            }

            .about-text {
              font-size: 1rem; /* Diminui o tamanho da fonte */
              line-height: 1.6; /* Ajusta o espaçamento entre linhas */
              padding: 10px; /* Diminui o padding para ajustar melhor */
              width: 100%; /* Faz o texto ocupar toda a largura da tela */
            }

            h1 {
              font-size: 1.5rem; /* Reduz o título */
            }

            p {
              font-size: 1rem; /* Reduz o tamanho do texto no mobile */
              line-height: 1.6; /* Ajusta o espaçamento para mobile */
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
