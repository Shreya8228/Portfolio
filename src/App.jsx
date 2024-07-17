// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experiance from "./component/Experiance";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
