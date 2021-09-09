import React from "react";
import Playspace from "./playspace clone.png";
import Manage from "./manage.png";
import "./Work.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

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

              <div className="project--details__links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MohammedAtallahhh/playspace-clone"
                  className="code"
                >
                  <FiGithub />
                </a>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://playspace-clone.netlify.app/"
                  className="demo"
                >
                  <FiExternalLink />
                </a>
              </div>

              <div className="project--details__tags">
                <span className="react">React</span>{" "}
                <span className="styled-components">styled-components</span>{" "}
                <span className="framer-motion">framer-motion</span>
              </div>
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

              <div className="project--details__links">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/MohammedAtallahhh/manage-landing-page"
                  className="code"
                >
                  <FiGithub />
                </a>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://manage2.netlify.app/"
                  className="demo"
                >
                  <FiExternalLink />
                </a>
              </div>

              <div className="project--details__tags">
                <span className="html">HTML</span>{" "}
                <span className="css">CSS</span>{" "}
                <span className="javascript">Javascript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
