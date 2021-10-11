import React from "react";
import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
// import { MdContacts } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="contact--title">
          {/* <span>
            <MdContacts />
          </span> */}
          Contact me.
        </h2>
        <ul className="contact--contact__links">
          <li className="contact__links--item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mohammad-atallah-86ba16215/"
              className="contact__links--link linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="contact__links--item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MohammedAtallahhh"
              className="contact__links--link github"
            >
              <FiGithub />
            </a>
          </li>
          <li className="contact__links--item">
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto: mohamedatallahh2017@gmail.com"
              className="contact__links--link google"
            >
              <FcGoogle />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
