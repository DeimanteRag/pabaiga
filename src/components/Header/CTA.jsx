import React from "react";
import CV from "../../assets/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contacts" className="btn btn-primary">
        {" "}
        Contact me{" "}
      </a>
    </div>
  );
}

export default CTA;
