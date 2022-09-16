import GMAIL from "../../assets/icons/Gmail.png";
import GITHUB from "../../assets/icons/GitHub.png";
import LINKEDIN from "../../assets/icons/LinkedIn.png";
import ContactForm from "./contact-form/ContactForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact app-style">
      <div className="title">Contact</div>
      <ContactForm />
      <div className="content">
        <a href="mailto: mugurel.maftei95@gmail.com">
          <img src={GMAIL} alt="GMAIL" />
          Send Email
        </a>
        <a
          href="https://www.linkedin.com/in/maftei-mugurel-a53b891a8/"
          target="_blank"
        >
          <img src={LINKEDIN} alt="LINKEDIN" />
          LinkedIn
        </a>
        <a href="https://github.com/MafteiMugurel" target="_blank">
          <img src={GITHUB} alt="GITHUB" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
