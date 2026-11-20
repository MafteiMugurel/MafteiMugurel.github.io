const Section = ({ id, path, title, alt = false, children }) => (
  <section id={id} className={`section${alt ? " section-alt" : ""}`}>
    <div className="container reveal">
      <div className="section-eyebrow">
        <span>mugurel@portfolio:</span>~/{path}
        <i className="section-eyebrow-cursor" aria-hidden="true" />
      </div>
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;
