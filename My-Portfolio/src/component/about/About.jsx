import React from "react";
import "./about.css";
import ME2 from "../../assests/profile picture_.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ months Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>Happy clients 7+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Project</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Certification 10+</small>
            </article>
          </div>
          <p>
            Hi! I'm Gulabchand Kumar Gupta, a fourth-year undergraduate student
            at Lovely Professional University, pursuing a Bachelor of Technology
            in Computer Science and Engineering. I'm a full-stack developer with
            a passion for creating visually stunning and user-friendly web
            applications. I have a strong foundation in HTML, CSS, JavaScript,
            and React JS, and I'm proficient in a variety of other technologies,
            including Node.js, MySQL, and MongoDB. I'm also an active member of
            the open-source community and have contributed to several projects.
            I'm always looking to expand my skillset and stay up-to-date with
            the latest technologies. .{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talks
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
