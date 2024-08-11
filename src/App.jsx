import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Cursor from "./components/Cursor";
import Circle from "./components/Circle";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Education />
        <About />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <Cursor/>
      <Toaster />
      <Circle/>
    </>
  );
}

export default App;
