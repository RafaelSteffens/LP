import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="product">
        <ProductSection />
      </div>
      <div id="ContactUs">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}


export default App;
