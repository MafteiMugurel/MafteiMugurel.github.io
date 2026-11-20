import Section from "../section/Section";
import "./Recommendations.scss";

const recommendations = [
  {
    text: "Mugurel is a fast learner. Being motivated and confident, in a suitable environment he can reach exceptional abilities both when it comes to programming and soft skills. He demonstrated in his personal projects qualities both related to the design and the clean code he wrote. I believe that if he is given the chance and the necessary resources, he can create great things and has a bright future in IT.",
    author: "Madalina-Eleonora Gheorghe",
    url: "https://madalinaeleonorag.github.io/",
    role: "Frontend Developer at Deloitte Digital",
    date: "June 2022",
  },
  {
    text: "Mugurel is very ambitious and I could see him grow a lot in the last couple of months. He treated all of his projects seriously and even when things got challenging he did not give up but tried to solve the issues himself. He is not afraid to ask for help and also had a positive attitude when receiving feedback on his code. He still has a long way to go but his enthusiasm and eagerness to evolve are clear indicators to me that he will do great wherever he goes.",
    author: "Narcisa-Elena Badea",
    role: "Frontend Developer at IBM",
    date: "September 2022",
  },
];

const Recommendations = () => {
  return (
    <Section id="recommendations" path="recommendations" title="Recommendations" alt>
      <div className="recs">
        {recommendations.map((rec) => (
          <figure className="recs-item card" key={rec.author}>
            <div className="recs-mark mono">“</div>
            <blockquote>{rec.text}</blockquote>
            <figcaption>
              <div className="recs-avatar mono">
                {rec.author
                  .split(/[\s-]/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="recs-author">
                  {rec.url ? (
                    <a href={rec.url} target="_blank" rel="noreferrer">
                      {rec.author}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    rec.author
                  )}
                </div>
                <div className="recs-role mono">
                  {rec.role} · {rec.date}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default Recommendations;
