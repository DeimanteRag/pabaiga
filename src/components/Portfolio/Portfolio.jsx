import React from "react";
import "./Portfolio.css";
import IMG2 from "../../assets/Weather.png";

function Portfolio() {
  return (
    <section id="Portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="img2" />
            <h3>Weather APP</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/DeimanteRag/my-app.git"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://deimanterag.github.io/my-app/"
                className="btn btn-primary"
                // target="_blank"
                // // ATKREIPTI DEMESI
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
