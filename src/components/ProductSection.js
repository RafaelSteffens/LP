import React, { useState } from "react";

function ProductSection() {
  const products = [
    {
      title: "Mapa Interativo de Hidrogênio",
      description: "Descubra e monitore os principais projetos de hidrogênio no Brasil com nosso mapa interativo. Acompanhe o progresso e a localização de cada projeto em tempo real.",
      id: 1,
      price: "Grátis",
      link: "https://hydrogen-map.vercel.app/",
      image: "hydrogen-map.png",
    },
    {
      title: "Potencial de Produção de Hidrogênio no Brasil",
      description: "Explore uma análise detalhada sobre o vasto potencial de produção de hidrogênio no Brasil, destacando as principais regiões e oportunidades para investidores.",
      id: 2,
      price: "Consultar",
      image: "potencial-fotovoltaico.png",
    },
    {
      title: "Potencial de Consumo de Hidrogênio no Brasil",
      description: "Saiba mais sobre o consumo de hidrogênio no Brasil e as oportunidades no setor industrial e de transporte, com projeções sobre a demanda futura.",
      id: 3,
      price: "Consultar",
      image: "mapa-eolico.png",
    },
  ];

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Estamos construindo essa funcionalidade. Entre em contato conosco para entrar na fila de espera. WhatsApp: 48 99 11 2929 7");
    }
  };

  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f1f4f8" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", color: "#333", fontWeight: "bold" }}>Nossas Soluções</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
            style={{
              position: "relative",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "15px",
              width: "300px",
              boxShadow: hoveredProductId === product.id ? "0px 20px 40px rgba(0, 0, 0, 0.2)" : "0px 4px 15px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: hoveredProductId === product.id ? "scale(1.05) translateY(-5px)" : "scale(1)",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: "1",
                height: "200px", // Tamanho fixo da imagem
                width: "100%",
                overflow: "hidden",
                borderRadius: "15px",
                transition: "transform 0.5s ease-out",
                transform: hoveredProductId === product.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  transform: hoveredProductId === product.id ? "scale(1.1)" : "scale(1)",
                }}
              />
            </div>
            <div style={{ position: "relative", zIndex: "1", marginTop: "15px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                  color: "#007bff",
                  transition: "color 0.3s ease",
                  fontWeight: "600",
                }}
              >
                {product.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  marginBottom: "20px",
                  color: "#555",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  transition: "color 0.3s ease",
                }}
              >
                {product.description}
              </p>
              <button
                onClick={() => handleRedirect(product.link)}
                style={{
                  padding: "10px 20px",
                  fontSize: "0.9rem",
                  color: "white",
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                Ver Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
