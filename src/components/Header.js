import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        padding: "20px",
        backgroundColor: "transparent",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center" }}>
        <img
          src="logo-hbr.png"
          alt="HBR Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxWidth: "120px", // Reduz o tamanho do logo no mobile
          }}
        />
      </div>

      <nav
        style={{
          width: "100%", // Faz com que o menu ocupe toda a largura disponível no mobile
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", // Permite que os itens se ajustem para a linha seguinte se necessário
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            flexDirection: "row", // Mantém o menu horizontal por padrão
            justifyContent: "center",
            width: "100%", // Garante que a lista ocupe a largura completa do nav
            flexWrap: "wrap", // Permite que os itens se ajustem para baixo em telas pequenas
          }}
        >
          <li style={{ marginRight: "20px", marginBottom: "10px" }}>
            <button
              onClick={() => scrollToSection("about")}
              style={{
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                padding: "10px",
              }}
            >
              Sobre nós
            </button>
          </li>
          <li style={{ marginRight: "20px", marginBottom: "10px" }}>
            <button
              onClick={() => scrollToSection("product")}
              style={{
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                padding: "10px",
              }}
            >
              Nossas Soluções
            </button>
          </li>
          <li style={{ marginRight: "20px", marginBottom: "10px" }}>
            <button
              onClick={() => scrollToSection("ContactUs")}
              style={{
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                padding: "10px",
              }}
            >
              Fale Conosco
            </button>
          </li>
        </ul>
      </nav>

      {/* Responsividade para telas menores */}
      <style>
        {`
          @media (max-width: 768px) {
            header {
              padding: 10px;
            }

            nav ul {
              flex-direction: row;
              align-items: center;
              margin: 0;
              padding: 0;
              justify-content: space-between; /* Garantindo que os itens fiquem lado a lado no mobile */
            }

            nav ul li {
              margin-right: 0;
              margin-bottom: 0;
            }

            nav ul li button {
              font-size: 14px; /* Reduz o tamanho da fonte */
              padding: 8px; /* Ajusta o padding para melhor exibição no mobile */
            }

            .logo img {
              max-width: 100px; /* Reduz ainda mais o tamanho do logo */
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
