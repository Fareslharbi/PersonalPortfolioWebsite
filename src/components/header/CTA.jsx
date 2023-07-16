import React from "react";
import CV from "../../assets/Fares_CV_Main_Updated.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn" id="lang_cv">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" id="lang_talk">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
