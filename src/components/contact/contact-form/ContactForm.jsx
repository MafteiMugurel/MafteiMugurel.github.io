import { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "../../icons/Icon";
import "./ContactForm.scss";

const SERVICE_ID = "service_jq9adsj";
const TEMPLATE_ID = "template_cskyjuw";
const PUBLIC_KEY = "0fVzhdI6Lozxybc2r";

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const errors = {
    name: !form.name.trim() ? "Please enter your name." : null,
    email: !isValidEmail(form.email) ? "Please enter a valid email." : null,
    message: !form.message.trim() ? "Please write a message." : null,
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const update = (field) => (event) =>
    setForm({ ...form, [field]: event.target.value });
  const touch = (field) => () => setTouched({ ...touched, [field]: true });

  const submit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    setStatus("sending");
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTouched({});
      })
      .catch(() => setStatus("error"));
  };

  const field = (name, label, props) => (
    <label className="form-field">
      <span className="form-label mono">{label}</span>
      {props.textarea ? (
        <textarea
          value={form[name]}
          onChange={update(name)}
          onBlur={touch(name)}
          placeholder={props.placeholder}
          rows={5}
        />
      ) : (
        <input
          type={props.type || "text"}
          value={form[name]}
          onChange={update(name)}
          onBlur={touch(name)}
          placeholder={props.placeholder}
        />
      )}
      {touched[name] && errors[name] && (
        <span className="form-error">{errors[name]}</span>
      )}
    </label>
  );

  return (
    <form className="form card" onSubmit={submit} noValidate>
      <div className="form-head mono">
        <span>$</span> send-message --to mugurel
      </div>
      {field("name", "name", { placeholder: "Jane Doe" })}
      {field("email", "email", {
        type: "email",
        placeholder: "jane@company.com",
      })}
      {field("message", "message", {
        textarea: true,
        placeholder: "Hi Mugurel, we have an opening for…",
      })}
      <button
        className="btn btn-primary form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        <Icon name="send" />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <div className="form-status form-status-ok mono">
          ✓ Message delivered. I'll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="form-status form-status-err mono">
          ✗ Something went wrong. Please email me directly.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
