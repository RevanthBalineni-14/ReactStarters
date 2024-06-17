import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import headshot from "../images/HeadShot.jpeg";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header-photo"
        src={headshot}
        alt="Revanth Balineni's Photo"
      />
      <h1 className="header-name">Revanth Balineni</h1>
      <h2 className="header-role">Software Developer & Machine Learning Engineer</h2>
      <a
        href="https://revanthbalineni-14.github.io/"
        className="header-website"
        target="_blank"
      >
        <button className="button button-website">Portfolio</button>
      </a>
      <a
        href="mailto:revanthbalineni14@gmail.com"
        className="header-email"
        target="_blank"
      >
        <button className="button button-mail">
          <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
          Email
        </button>
      </a>
    </div>
  );
}
