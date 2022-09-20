import "./Recommendations.scss";

const Recommendations = () => {
  return (
    <div className="recommendations app-style">
      <div className="title">Recommendations</div>
      <div className="recommendations-content">
        <div className="recommendations-content-recommendation">
          <div className="recommendations-content-recommendation-text">
            Mugurel is a fast learner. Being motivated and confident, in a
            suitable environment he can reach exceptional abilities both when it
            comes to programming and soft skills. He demonstrated in his
            personal projects qualities both related to the design and the clean
            code he wrote. I believe that if he is given the chance and the
            necessary resources, he can create great things and has a bright
            future in IT.
          </div>
        </div>
        <div className="recommendations-content-recommendation-author">
          Madalina-Eleonora Gheorghe, Frontend Developer at Deloitte Digital
          (June 18, 2022)
        </div>
      </div>
      <div className="recommendations-content">
        <div className="recommendations-content-recommendation">
          <div className="recommendations-content-recommendation-text">
            Mugurel is very ambitions and I could see him grow a lot in the last
            couple of months. He treated all of his projects seriously and even
            when things got challenging he did not give up but tried to solve
            the issues himself. He is not afraid to ask for help and also had a
            positive attitude when receiving feedback on his code. He still has
            a long way to go but he’s enthusiasm and eagerness to evolve are
            clear indicators to me that he will do great wherever he goes.
          </div>
        </div>
        <div className="recommendations-content-recommendation-author">
          Narcisa-Elena Badea, Frontend Developer at IBM (September 19, 2022)
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
