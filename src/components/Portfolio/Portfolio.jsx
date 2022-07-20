import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

function Portfolio() {
  return (
    <section id="Portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="img1" />
            <h3>Weather</h3>
            <div className="portfolio_item-cta">
              <a href={"Weather"} className="btn">
                Weather
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="img2" />
            <h3>Item PAVADINIMAS</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                // target="_blank"
                // // ATKREIPTI DEMESI
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="img3" />
            <h3>Item PAVADINIMAS</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                // target="_blank"
                // // ATKREIPTI DEMESI
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="img4" />
            <h3>Item PAVADINIMAS</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                // target="_blank"
                // // ATKREIPTI DEMESI
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="img5" />
            <h3>Item PAVADINIMAS</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                // target="_blank"
                // // ATKREIPTI DEMESI
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="img6" />
            <h3>Item PAVADINIMAS</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
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
