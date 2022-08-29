import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">About Me</div>
      <div className="about-description">
        <div className="about-description-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived
        </div>
        <div className="about-description-buttons">
          <a href="#contact">Contact Me</a>
          <a href="./Assets/CV.pdf" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
