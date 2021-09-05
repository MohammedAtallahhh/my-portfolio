import React, { useEffect, useState, useRef } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [navState, setNavState] = useState(false);

  const menuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: {
        ease: "easeOut",
        type: "tween",
        x: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.35,
        },
      },
    },
    shown: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "tween",
        x: {
          duration: 0.35,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
      transition: {
        type: "tween",
      },
    },

    shown: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const contactVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },

    shown: {
      opacity: 1,
      x: 0,
    },
  };

  const labelVariants = {
    hidden: {
      opacity: 0,
    },

    shown: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
  };

  return (
    <nav className={`header--nav ${navState ? "open" : ""}`}>
      <div className="container">
        <div className="nav--logo">
          <h2>OGLU.</h2>
        </div>

        <motion.ul
          className={`nav--list`}
          variants={menuVariants}
          animate={navState ? "shown" : "hidden"}
        >
          <motion.h4 className="nav--list__label" variants={labelVariants}>
            Menu
          </motion.h4>
          <li className="nav--list__item">
            <motion.a
              href="#home"
              className="nav--list__link"
              variants={linkVariants}
            >
              Home
            </motion.a>
          </li>
          <li className="nav--list__item">
            <motion.a
              href="#work"
              className="nav--list__link"
              variants={linkVariants}
            >
              Work
            </motion.a>
          </li>
          <li className="nav--list__item">
            <motion.a
              href="#contact"
              className="nav--list__link"
              variants={linkVariants}
            >
              Contact
            </motion.a>
          </li>
          <div className="nav--contact">
            <motion.h4 className="nav--contact__label" variants={labelVariants}>
              Contact
            </motion.h4>
            <motion.a href="#a" className="twitter" variants={contactVariants}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#a" className="linkedin" variants={contactVariants}>
              <FaLinkedinIn />
            </motion.a>
            <motion.a href="#a" className="github" variants={contactVariants}>
              <FiGithub />
            </motion.a>
          </div>
          <motion.div className="nav--oglu">Oglu</motion.div>
        </motion.ul>

        <button className="nav--toggler" onClick={() => setNavState(!navState)}>
          <motion.span
            className="nav--toggler__bar"
            animate={navState ? { rotate: "45deg" } : { rotate: 0 }}
            transition={{ duration: 0.2, type: "tween" }}
          ></motion.span>
          <motion.span
            className="nav--toggler__bar"
            animate={navState ? { rotate: "-45deg" } : { rotate: 0 }}
            transition={{ duration: 0.2, type: "tween" }}
          ></motion.span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
