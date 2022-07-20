import React from "react";
import "./Nav.css";
import { BiHomeHeart } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { GiLoveLetter } from "react-icons/gi";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeHeart />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#Experience"
        onClick={() => setActiveNav("#Experience")}
        className={activeNav === "#Experience" ? "active" : ""}
      >
        <BsFillBookmarkHeartFill />
      </a>

      <a
        href="#Contacts"
        onClick={() => setActiveNav("#Contacts")}
        className={activeNav === "#Contacts" ? "active" : ""}
      >
        <GiLoveLetter />
      </a>
    </nav>
  );
}

export default Nav;
