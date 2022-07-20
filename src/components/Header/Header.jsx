import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="containerr">
        <span className="text1"> Front-end Developer </span>
        <span className="text2"> Deimantė </span>
        <CTA />
        <HeaderSocials />
        <a href="#Contacts" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
