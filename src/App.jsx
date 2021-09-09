import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
    </>
  );
};

export default App;
