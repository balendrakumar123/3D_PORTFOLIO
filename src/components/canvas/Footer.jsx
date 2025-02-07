import React from "react";
import { useEffect, useState } from "react";
import "./Footer.css";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {AiOutlineInstagram} from "react-icons/ai";
import {BiLinkAlt} from "react-icons/bi";
import "../Hero.scss";
const Footer = () => {

    return (
        <div className="footer text-center">
            <div className="link1">        
        <a
          href="https://github.com/shinchancode" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aarti-rathi-a6031814b/" target="_blank">
          <ImLinkedin />
        </a>
        <a
          href="https://www.instagram.com/aarti.rathiii" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://linktr.ee/rathi17" target="_blank">
          <BiLinkAlt />
        </a>

            </div>
        <p> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://shinchancode.github.io/3d-react-portfolio/" target="_blank">
            {" "}
            Balendra Paraste
          </a>
          😎
        </p>
        <p className="pink-text-gradient">No. of Visitors | <img className="visitcounter" src="https://hitwebcounter.com/counter/counter.php?page=9795911&style=0025&nbdigits=5&type=page&initCount=459" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></p>

      </div>
    );
  };
  
  export default Footer;