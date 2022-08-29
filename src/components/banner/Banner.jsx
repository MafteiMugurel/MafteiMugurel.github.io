import IMAGE_ME from "../../assets/image-me.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <div>Hello</div>
        <div className="banner-left-name">I'm Mugurel</div>
        <div>Frontend Developer</div>
        <button className="banner-left-button">Hire Me</button>
      </div>
      <img src={IMAGE_ME} alt="image" />
    </div>
  );
};

export default Banner;
