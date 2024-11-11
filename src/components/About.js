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
        margintop: "0", // Remove margens externas
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
        {/* Espaço para o logo */}
        <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center" }}>
          <img src="logo-completo.png" alt="HBR Logo" style={{ maxWidth: "100%" }} />
        </div>

        {/* Seção de texto */}
        <div style={{ flex: "1", minWidth: "0", margin: "0" }}>
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#333",
              margin: "0 0 0.5rem 0",
              textAlign: "center",
            }}
          >
            Quem somos?
          </h1>
          <div
            style={{
              padding: "20px 40px", // Adiciona 40px de padding à esquerda e direita
              margin: "0 auto",      // Centraliza a div com margens automáticas
              maxWidth: "1200px",    // Define uma largura máxima para manter o texto mais legível em telas grandes
              backgroundColor: "#f9f9f9", // Exemplo de cor de fundo leve
              borderRadius: "8px",   // Bordas arredondadas para uma aparência mais suave
            }}
          >
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
              A <strong style={{ color: "#007bff" }}>HBR - Hidrogênio Brasil</strong> é uma empresa de inteligência de mercado sediada em Florianópolis, dedicada a capacitar empresas e investidores no setor de hidrogênio. Combinamos tecnologia de ponta e análises detalhadas para fornecer soluções que ajudam nossos clientes a tomar decisões informadas e estratégicas em um setor complexo e em rápida evolução.

              Nossas ferramentas incluem mapas interativos e plataformas analíticas que oferecem uma visão abrangente e atualizada do mercado de hidrogênio. Trabalhamos para tornar os dados acessíveis e acionáveis, permitindo que nossos clientes acompanhem tendências, identifiquem oportunidades e minimizem riscos.

              Na HBR, acreditamos que conhecimento e clareza são fundamentais para a competitividade. Nosso compromisso é ser o recurso de confiança para empresas que buscam liderança e sucesso no mercado de hidrogênio.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default About;
