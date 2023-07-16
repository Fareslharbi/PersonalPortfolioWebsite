import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const lang_change_experience = () => {
  var data_exp = {
    English: {
      title: "Experienced",
    },
    Arabic: {
      title: "متمرس",
    },
  };
  var data_inter = {
    English: {
      title: "Intermediate",
    },
    Arabic: {
      title: "متوسط",
    },
  };
  var data_beg = {
    English: {
      title: "Beginner",
    },
    Arabic: {
      title: "مبتدئ",
    },
  };

  var data = {
    English: {
      title: "The Skills I Have",
    },
    Arabic: {
      title: "المهارات التي أمتلكها",
    },
  };
  var data1 = {
    English: {
      title: "My Experience",
    },
    Arabic: {
      title: "خبرتي",
    },
  };
  var data2 = {
    English: {
      title: "Frontend Development",
    },
    Arabic: {
      title: "تطوير الواجهة الأمامية",
    },
  };
  var data3 = {
    English: {
      title: "Backend Development",
    },
    Arabic: {
      title: "التطوير الخلفي للمواقع",
    },
  };
  var data4 = {
    English: {
      title: "Data Analysis",
    },
    Arabic: {
      title: "تحليل البيانات",
    },
  };
  var data5 = {
    English: {
      title: "General",
    },
    Arabic: {
      title: "عام",
    },
  };

  const exp_1 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector("#lang_exp").textContent =
        data_exp[event.currentTarget.checked ? "Arabic" : "English"].title;
    });

  const inter_1 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector("#lang_inter").textContent =
        data_inter[event.currentTarget.checked ? "Arabic" : "English"].title;
    });

  const beg_1 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector("#lang_beg").textContent =
        data_beg[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const d = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_skill").textContent =
        data[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const e = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_experience").textContent =
        data1[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const f = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_front").textContent =
        data2[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const g = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_backend").textContent =
        data3[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const h = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ml").textContent =
        data4[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const i = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_general").textContent =
        data5[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
};
const Experience = () => {
  return (
    <section id="experience">
      <h5 className="lang_skill">The Skills I Have</h5>
      <h2 className="lang_experience">My Experience</h2>

      <div className="container experience__container">
        {/* start of frontend */}
        <div className="experience__frontend">
          <h3 className="lang_front">Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_html">HTML & CSS</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_jq">Tailwind CSS</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_javascript">Javascript</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_react">ReactJS</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_bootstrap">Bootstrap</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_tkinter">VueJS</h4>
                <small id="lang_inter" className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        {/* start of backend */}
        <div className="experience__backend">
          <h3 className="lang_backend">Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_python">Python</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_django">Django</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_django">FireBase</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_mysql">SQL</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_javascript">REST API</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_django">.NET</h4>
                <small id="lang_beg" className="text-light">
                  Beginner
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* end of backend */}
        {/* start of AI */}
        <div className="experience__frontend">
          <h3 className="lang_ml">Data Analysis</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_scrape">Selenium</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_pd">Pandas</h4>

                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_re">Regular Expressions</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_opencv">Matplotlib</h4>

                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_tf">Power Bi</h4>

                <small id="lang_inter" className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_cnn">NumPy</h4>

                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_npy">SQL</h4>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_scipy">Scikit-Learn</h4>
                <small id="lang_inter" className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* end of AI */}
        {/* start of basics */}
        <div className="experience__frontend">
          <h3 className="lang_general">General</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_ms">Embedded Systems</h4>
                <h5 className="lang_raz">Raspberry Pi & Arduino</h5>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_api">3D Design & 3D Printing</h4>
                <h5 className="lang_apis">Fusion 360, TinkerCAD</h5>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4 className="lang_mo">Microsoft Office</h4>
                <h5 className="lang_mos">Excel, Word, PowerPoint</h5>
                <small id="lang_exp" className="text-light">
                  Experienced
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* end of basics */}
      </div>
    </section>
  );
};

export default Experience;
