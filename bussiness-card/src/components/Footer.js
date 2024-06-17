import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <a href = "https://github.com/RevanthBalineni-14"
            target = "_blank">
                <FontAwesomeIcon icon={faGithubSquare} className="footer-icon"/>
            </a>
            <a href = "https://www.linkedin.com/in/revanthb14/"
            target = "_blank">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
            </a>
        </div>
    )
}