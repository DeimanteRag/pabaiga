import React from "react";
import "./Footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo"></a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#About">About</a>
        </li>
        <li>
          {" "}
          <a href="#Experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#Contacts">Contacts</a>
        </li>
        <li>
          {" "}
          <a href="#Portfolio">Portfolio</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <AiOutlineFacebook />
        </a>

        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; DRagauskaite </small>
      </div>
    </footer>
  );
}

export default Footer;
