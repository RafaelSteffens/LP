import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#343a40", color: "white", padding: "20px", textAlign: "center" }}>
      <p style={{ fontSize: "1rem" }}>© 2024 Hydrogen Market Intelligence. Todos os direitos reservados.</p>
      <div style={{ marginTop: "10px" }}>
        <a href="#facebook" style={{ color: "white", marginRight: "10px" }}>Facebook</a>
        <a href="#linkedin" style={{ color: "white", marginRight: "10px" }}>LinkedIn</a>
        <a href="#twitter" style={{ color: "white" }}>Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
