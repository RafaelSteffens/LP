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
        position: "fixed",  
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
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <nav>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "50px" }}>
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
              }}
            >
              Sobre nós
            </button>
          </li>
          <li style={{ marginRight: "50px" }}>
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
              }}
            >
              Nossas Soluções 
            </button>
          </li>
          <li style={{ marginRight: "50px" }}>
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
              }}
            >
              Fale Conosco  
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
