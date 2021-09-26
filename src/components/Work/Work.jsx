import React from "react";
import Playspace from "./playspace clone.png";
import Manage from "./manage.png";
import "./Work.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../Projects";

const Work = () => {
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

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
          {projects.map(({ name, img, tags, codeLink, demoLink }) => (
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

                <motion.img src={img} alt="playspace clone project" />
              </motion.div>

              <div className="project--details">
                <h3 className="project--details__name">{name}</h3>

                <div className="project--details__links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={codeLink}
                    className="code"
                  >
                    <FiGithub />
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={demoLink}
                    className="demo"
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <div className="project--details__tags">
                  {tags.map((tag) => (
                    <span className={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Project */}
          {/* <div ref={ref2} className="work--projects__project">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
