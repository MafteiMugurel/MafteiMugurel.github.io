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
          Madalina-Eleonora Gheorghe, Frontend Developer in Deloitte Digital
          (June 18, 2022)
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
