import "./about.css";
import TechSkills from "../../common/skills.jsx";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <p>
            <span className="first-letter">I </span>
            started in the programming world through Henry Bootcamp, which
            allowed me to develop as a Full Stack Developer. Currently, I am focus on projects to reinforce
            acquired concepts and learn new technologies.
            <br /> I am motivated to work in teams and seek new challenges where I can add value and grow professionally.
          </p>
        </div>
      </div>
      <div className="about-bottom">
        <h4>Skills</h4>
        <TechSkills />
      </div>
    </div>
  );
};

export default About;
