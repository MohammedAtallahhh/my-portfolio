import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./Navbar.css";
import { motion } from "framer-motion";
import useScreenSize from "../Utils/useScreenSize";

function Navbar() {
  const [navState, setNavState] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const screenWidth = useScreenSize().width;

  useEffect(() => {
    setNavState(navState && screenWidth < 768);
    setIsMobile(screenWidth < 768);
  }, [screenWidth, navState]);

  const menuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      display: "none",
      transition: {
        ease: "easeIn",
        type: "tween",
        duration: 0.4,
        display: {
          delay: 0.4,
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
        duration: 0.4,
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

  return isMobile ? (
    <nav className={`header--nav ${navState ? "open" : ""}`}>
      <div className="container">
        <div className="nav--logo">
          <h2>OGLU.</h2>
        </div>

        {/*------------ Navbar menu -------------*/}
        <motion.ul
          className={`nav--list`}
          variants={menuVariants}
          animate={navState ? "shown" : "hidden"}
        >
          <motion.h4 className="nav--list__label" variants={labelVariants}>
            Menu
          </motion.h4>

          {/* Item */}
          <li className="nav--list__item">
            <motion.a
              href="#about"
              className="nav--list__link"
              variants={linkVariants}
              onClick={() => setNavState(false)}
            >
              about
            </motion.a>
          </li>

          {/* item */}
          <li className="nav--list__item">
            <motion.a
              href="#work"
              className="nav--list__link"
              variants={linkVariants}
              onClick={() => setNavState(false)}
            >
              Work
            </motion.a>
          </li>

          {/* item */}
          <li className="nav--list__item">
            <motion.a
              href="#contact"
              className="nav--list__link"
              variants={linkVariants}
              onClick={() => setNavState(false)}
            >
              Contact
            </motion.a>
          </li>

          {/* Contact links */}
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

          {/* Oglu label */}
          <motion.div className="nav--oglu">Oglu</motion.div>
        </motion.ul>

        {/*--------- Toggler --------*/}
        <button className="nav--toggler" onClick={() => setNavState(!navState)}>
          <motion.span
            className="nav--toggler__bar"
            animate={navState ? { rotate: "45deg" } : { rotate: 0, y: "-50%" }}
            transition={{ duration: 0.2, type: "tween" }}
          ></motion.span>
          <motion.span
            className="nav--toggler__bar"
            animate={navState ? { rotate: "-45deg" } : { rotate: 0, y: "-50%" }}
            transition={{ duration: 0.2, type: "tween" }}
          ></motion.span>
        </button>
      </div>
    </nav>
  ) : (
    <nav className="header--nav">
      <div className="container">
        <div className="nav--logo">
          <h2>OGLU.</h2>
        </div>

        <ul className="nav--list">
          <li className="nav--list__item">
            <a href="#about" className="nav--list__link">
              About
            </a>
          </li>
          <li className="nav--list__item">
            <a href="#work" className="nav--list__link">
              Work
            </a>
          </li>
          <li className="nav--list__item">
            <a href="#contact" className="nav--list__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
