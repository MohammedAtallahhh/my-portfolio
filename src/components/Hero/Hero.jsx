import React from "react";
import "./Hero.css";

import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero--email">mohamedatallahh2017@gmail.com</div>
      <div className="hero--contact-links">
        <a href="#a" className="twitter">
          <FaTwitter />
        </a>
        <a href="#a" className="linkedin">
          <FaLinkedinIn />
        </a>
        <a href="#a" className="github">
          <FiGithub />
        </a>
      </div>
      <div className="container">
        <div className="hero--text">
          <h2 className="hero--text__hello">Hello, I am</h2>
          <h1 className="hero--text__mohammed">Mohammed</h1>
          <h1 className="hero--text__Atallah">Atallah</h1>
          <h2 className="hero--text__title">Front-end Web developer.</h2>

          <button className="hero--text__cta">let's talk</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
