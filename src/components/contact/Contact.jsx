import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="title">Contact</div>
      <div className="content">
        <a href="mailto: mugurel.maftei95@gmail.com">Send Email</a>
        <a
          href="https://www.linkedin.com/in/maftei-mugurel-a53b891a8/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/MafteiMugurel" target="_blank">
          {" "}
          GitHub{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
