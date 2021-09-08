import React from "react";
import Playspace from "./playspace clone.png";
import Manage from "./manage.png";
import "./Work.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Work = () => {
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  console.log(useInView());
  console.log(inView);
  return (
    <section className="work">
      <div className="container">
        <div className="work--title">
          <h2 className="title">
            <span>Selected </span>
            <span>Work.</span>
          </h2>
        </div>

        <div className="work--projects">
          {/* Project */}
          <div className="work--projects__project">
            <motion.div
              ref={ref}
              className={`project--image ${inView ? "active" : ""}`}
            >
              <motion.div
                className="overlay"
                animate={inView ? { height: 0 } : {}}
                transition={{ duration: 0.6 }}
              />

              <motion.img src={Playspace} alt="playspace clone project" />
            </motion.div>

            <div className="project--details">
              <h3 className="project--details__name">Playspace clone</h3>

              <p className="project--details__description">
                This project is a clone to the{" "}
                <a href="https://play.space" className="link">
                  play space
                </a>{" "}
                website.
              </p>
            </div>
          </div>

          {/* Project */}
          <div ref={ref2} className="work--projects__project">
            <div className="project--image">
              <motion.div
                className="overlay"
                animate={inView2 ? { height: 0 } : {}}
                transition={{ duration: 0.6 }}
              />
              <img src={Manage} alt="mange landing page project" />
            </div>

            <div className="project--details">
              <h3 className="project--details__name">Manage langing page</h3>

              <p className="project--details__description">
                This website is a challenge on frontend mentor website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
