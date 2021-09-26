import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about--text">
          <h2 className="about--text__title">About me.</h2>
          <p className="about--text__info">
            I love building websites that are responsive, accessible and more
            importantly user-friendly.
          </p>
          <button className="btn about--text__cta">More About Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
