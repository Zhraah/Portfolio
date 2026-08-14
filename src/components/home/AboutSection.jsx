import { aboutTraits } from "../../data/about.js";
import Icon from "../ui/Icon.jsx";

function AboutCanvas({ revealCount }) {
  return (
    <section className="about-stage" aria-label="About me">
      <div className="about-sticky">
        <section className="about-copy" data-scroll-reveal="up">
          <p className="section-label">[ About Me ]</p>
          <h2>
            <span>Designing with</span>
            <span>
              <strong>Creativity</strong> &amp; <strong>Purpose</strong>
            </span>
          </h2>
          <p>
            I'm a Product Designer with a background in Software Engineering, focused on creating meaningful digital
            experiences across B2B, B2C, and C2C products.
          </p>
          <p>
            I combine user-centered design, strategic thinking, and technical awareness to bridge the gap between user
            needs and business goals. Working closely with developers, product managers, and stakeholders, I enjoy
            transforming complex challenges into intuitive and engaging solutions.
          </p>
          <p>
            Driven by curiosity and continuous growth, I'm always exploring new technologies, design approaches, and
            innovative ways to create products that make a lasting impact.
          </p>
        </section>

        <div
          className={`about-lines ${revealCount >= 1 ? "show-top-line" : ""} ${
            revealCount >= 2 ? "show-bottom-line" : ""
          }`}
          aria-hidden="true"
        />
        <div className="about-traits">
          {aboutTraits.map((trait, index) => {
            const leftLineStep = 3 + index * 2;
            const rightLineStep = leftLineStep + 1;
            return (
              <div
                className={`about-trait ${revealCount >= leftLineStep ? "show-left-line show-row-line" : ""} ${
                  revealCount >= rightLineStep ? "show-right-line is-visible" : ""
                }`}
                key={trait.title}
              >
                <span className="about-trait-row-lines" aria-hidden="true" />
                <div className="about-trait-box">
                  <Icon src={trait.icon} className="about-trait-icon" />
                </div>
                <p>{trait.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutCanvas;
