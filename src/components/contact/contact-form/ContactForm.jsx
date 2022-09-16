import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_jq9adsj";
      const templateId = "template_cskyjuw";
      const userId = "0fVzhdI6Lozxybc2r";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(
        "Thank you for your message, we will be in touch in no time!"
      );
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChangeName = (event) => {
    if (!event.target.value) {
      setErrorName("Name can not be empty");
    } else {
      setErrorName(null);
    }
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    if (event.target.value && !isValidEmail(event.target.value)) {
      setErrorEmail("Email is invalid");
    } else {
      setErrorEmail(null);
    }
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    if (!event.target.value) {
      setErrorMessage("Message can not be empty");
    } else {
      setErrorMessage(null);
    }
    setMessage(event.target.value);
  };

  return (
    <div id="contact-form" className="contact-form">
      <input
        className="contact-form-name app-imput"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleChangeName}
      />
      {errorName && <h2 style={{ color: "red" }}>{errorName}</h2>}
      <input
        className="contact-form-email app-imput"
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={handleChangeEmail}
      />
      {errorEmail && <h2 style={{ color: "red" }}>{errorEmail}</h2>}
      <textarea
        className="contact-form-textarea app-imput"
        placeholder="Your message"
        value={message}
        onChange={handleChangeMessage}
      ></textarea>
      {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
      <button
        className="contact-form-button app-button"
        onClick={errorName || errorEmail || errorMessage ? null : submit}
        disabled={errorName || errorEmail || errorMessage}
      >
        Send Message
      </button>
      <span>{emailSent}</span>
    </div>
  );
};

export default ContactForm;
