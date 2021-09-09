import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about--text">
          <h2>
            I love building websites that are responsive, accessible and more
            importantly user-friendly.
          </h2>
          <button className="btn about--text__cta">About me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
