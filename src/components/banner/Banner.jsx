import IMAGE_ME from "../../assets/image-me.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner app-style">
      <div className="banner-left">
        <div>Hello,</div>
        <div className="banner-left-name">I'm Mugurel</div>
        <div className="banner-left-sub-name">Frontend Developer</div>
        <a className="app-button">Hire Me</a>
      </div>
      <img src={IMAGE_ME} alt="image" />
    </div>
  );
};

export default Banner;
