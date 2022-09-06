import CVFile from "../../assets/CV.pdf";
import "./Header.scss";

const Header = () => {
  return (
    <div className="nav-bar app-style">
      <a href="#">MafteiMugurel</a>
      <div className="nav-bar-list">
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
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
