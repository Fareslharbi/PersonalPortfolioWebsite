import React from "react";
import "./about.css";
import ME from "../../assets/IMG_0398 copy.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const lang_change_about = () => {
  var data = {
    English: {
      title: "Get To Know",
    },
    Arabic: {
      title: "أعرف ",
    },
  };
  var data1 = {
    English: {
      title: "About Me",
    },
    Arabic: {
      title: "عني",
    },
  };
  var data2 = {
    English: {
      title: "Experience",
    },
    Arabic: {
      title: "الخبرة",
    },
  };
  var data3 = {
    English: {
      title: "4+ Years",
    },
    Arabic: {
      title: "٤ سنوات خبرة",
    },
  };
  var data4 = {
    English: {
      title: "Projects",
    },
    Arabic: {
      title: "المشاريع",
    },
  };
  var data5 = {
    English: {
      title: "55+ Completed",
    },
    Arabic: {
      title: "٥٥+ مكتمل",
    },
  };
  var data6 = {
    English: {
      title: "Clients",
    },
    Arabic: {
      title: "العملاء",
    },
  };
  var data7 = {
    English: {
      title: "15+ Worldwide",
    },
    Arabic: {
      title: "١٥+ عالمياً",
    },
  };
  var data8 = {
    English: {
      title:
        "Fusing the power of data analysis and engineering with web development expertise, I am a dynamic professional poised to revolutionize online experiences. With a strong foundation in crafting visually stunning websites and web applications, my true passion lies in harnessing data to drive informed decision-making. Proficient in data analysis techniques and experienced in designing robust data pipelines, I excel at transforming complex datasets into actionable insights. By seamlessly integrating front-end and back-end technologies, I create interactive platforms that captivate users while ensuring efficient data processing and storage. With a keen eye for detail and a commitment to excellence, I am dedicated to delivering cutting-edge solutions that optimize user experiences and propel businesses to new heights.",
    },
    Arabic: {
      title:
        "بدمج قوة تحليل البيانات والهندسة مع خبرة تطوير مواقع الويب ، أنا محترف ديناميكي مستعد لإحداث ثورة في التجارب عبر الإنترنت. مع وجود أساس قوي في بناء مواقع الويب وتطبيقات الويب المذهلة بصريًا ، يكمن شغفي الحقيقي في تسخير البيانات لدفع عملية صنع القرار المستنير. بارع في تقنيات تحليل البيانات وخبرة في تصميم خطوط بيانات قوية ، أتفوق في تحويل مجموعات البيانات المعقدة إلى رؤى قابلة للتنفيذ. من خلال دمج تقنيات الواجهة الأمامية والخلفية بسلاسة ، أقوم بإنشاء منصات تفاعلية تجذب المستخدمين مع ضمان معالجة البيانات وتخزينها بكفاءة. مع الحرص على التفاصيل والالتزام بالتميز ، أنا مكرس لتقديم حلول متطورة تعمل على تحسين تجارب المستخدمين ودفع الأعمال إلى آفاق جديدة.",
    },
  };
  var data9 = {
    English: {
      title: "Let's Talk",
    },
    Arabic: {
      title: "لنتحدث",
    },
  };

  const a = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_get_to_know").textContent =
        data[event.currentTarget.checked ? "Arabic" : "English"].title;
    });

  const b = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_about_me").textContent =
        data1[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const c = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_experiance").textContent =
        data2[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const d = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_exp_years").textContent =
        data3[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const e = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_projects").textContent =
        data4[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const f = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_num_pro").textContent =
        data5[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const g = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_client").textContent =
        data6[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const h = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_num_client").textContent =
        data7[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const i = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_bio").textContent =
        data8[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const j = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector("#lang_let_talk").textContent =
        data9[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
};
const About = () => {
  return (
    <section id="about">
      <h5 className="lang_get_to_know">Get To Know</h5>
      <h2 className="lang_about_me">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5 className="lang_experiance">Experience</h5>
              <small className="lang_exp_years">4+ Years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5 className="lang_projects">Projects</h5>
              <small className="lang_num_pro">55+ Completed</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5 className="lang_client">Clients</h5>
              <small className="lang_num_client">15+ Worldwide</small>
            </article>
          </div>
          <p className="lang_bio">
            Fusing the power of data analysis and engineering with web
            development expertise, I am a dynamic professional poised to
            revolutionize online experiences. With a strong foundation in
            crafting visually stunning websites and web applications, my true
            passion lies in harnessing data to drive informed decision-making.
            Proficient in data analysis techniques and experienced in designing
            robust data pipelines, I excel at transforming complex datasets into
            actionable insights. By seamlessly integrating front-end and
            back-end technologies, I create interactive platforms that captivate
            users while ensuring efficient data processing and storage. With a
            keen eye for detail and a commitment to excellence, I am dedicated
            to delivering cutting-edge solutions that optimize user experiences
            and propel businesses to new heights.
          </p>
          <a href="#contact" id="lang_let_talk" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
