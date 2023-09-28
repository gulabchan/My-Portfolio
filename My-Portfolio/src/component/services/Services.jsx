import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designed the user interface for a new e-commerce website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Created wireframes and prototypes for a mobile app.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Conducted user research and usability testing.</p>
            </li>
          </ul>
        </article>

        {/* End of the UX UI */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developed a website using React and Node.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrated a payment gateway into a website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Built a mobile app using Flutter.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implemented a user-friendly interface with a simple navigation
                system to browse and read news articles.• Users can browse news
                articles by category, keyword, or location.
              </p>
            </li>
          </ul>
        </article>

        {/* End of the Web Development */}

        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wrote blog posts about web development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Created marketing materials for a new product launch.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Edited and proofread technical documentation.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
