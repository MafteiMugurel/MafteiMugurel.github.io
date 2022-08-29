import CVFile from "../../assets/CV.pdf";
import "./Header.scss";

const Header = () => {
  return (
    <div className="nav-bar">
      <a href="#">MafteiMugurel</a>
      <div className="nav-bar-list">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#portofolio">Portofolio</a>
        <a href="#contact">Contact</a>
        <a href={CVFile} target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
