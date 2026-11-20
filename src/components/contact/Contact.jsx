import Section from "../section/Section";
import ContactForm from "./contact-form/ContactForm";
import Icon from "../icons/Icon";
import "./Contact.scss";

const channels = [
  {
    icon: "mail",
    label: "Email",
    value: "mugurel.maftei95@gmail.com",
    href: "mailto:mugurel.maftei95@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "in/maftei-mugurel",
    href: "https://www.linkedin.com/in/maftei-mugurel-a53b891a8/",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "MafteiMugurel",
    href: "https://github.com/MafteiMugurel",
  },
];

const Contact = () => {
  return (
    <Section id="contact" path="contact" title="Let's connect">
      <div className="contact">
        <div className="contact-info">
          <p>
            I'm looking for opportunities in <strong>L2/L3 IT support</strong>,{" "}
            <strong>system/network administration</strong> and{" "}
            <strong>junior DevOps</strong> roles. If you have an opening or
            just want to talk infrastructure, my inbox is open.
          </p>
          <div className="contact-channels">
            {channels.map((c) => (
              <a
                key={c.label}
                className="contact-channel card"
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div className="contact-channel-icon">
                  <Icon name={c.icon} />
                </div>
                <div>
                  <div className="contact-channel-label mono">{c.label}</div>
                  <div className="contact-channel-value">{c.value}</div>
                </div>
                <Icon name="arrowUpRight" className="contact-channel-arrow" />
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
