import React from "react";
import "./About.css";
import ME from "../../assets/About_Me.jpg";

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about Imge" />
          </div>
        </div>

        <div className="about_content">
          <p>
            I'm Deimantė, front-end developer in
            <span style={{ fontWeight: "bold" }}>Lithuania</span>. I describe
            myself as a passionate developer who loves{" "}
            <span style={{ fontWeight: "bold" }}>
              coding, and the web platform ❤️
            </span>
          </p>

          <a href="#Contacts" className="btn btn-primaary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
