import React from "react";
import "./About.css";
import ME from "../../assets/About_Me.jpg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

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
          <div className="about_cards">
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Experience</h5>
              <small>Experience</small>
            </article>
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Experience</h5>
              <small>Experience</small>
            </article>
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Experience</h5>
              <small>Experience</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            architecto ut. Maiores atque rerum, sunt minus nostrum temporibus.
            Quae doloremque asperiores exercitationem ex hic repellat nesciunt
            tenetur eos eligendi inventore?
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
