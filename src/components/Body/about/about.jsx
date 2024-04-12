import "./about.css";
import coding from "../../../assets/coding.png";
import SocialContact from "../../common/social-contact.jsx";
import TechSkills from "../../common/skills.jsx";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          {/* <span className='first-letter'>Hi there 👋</span> */}
          <p>
            <span className="first-letter">I </span>
            started in the programming world through Henry Bootcamp, which
            allowed me to develop as a Full Stack Web Developer. Currently, I
            focus on Front End development, working on projects to reinforce
            acquired concepts and learn new technologies.
            <br /> Motivated to work in teams and seeking new challenges where I
            can contribute value and grow professionally.
          </p>
          <SocialContact />
          {/* <h4>Skills</h4>
                    <TechSkills/> */}
        </div>
        <div className="about-photo">
          <img src={coding} className="picture" alt="Coding" />
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
