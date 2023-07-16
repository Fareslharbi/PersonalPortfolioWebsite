import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export const lang_change_services = () => {
  var data = {
    English: {
      title: "What I Offer",
    },
    Arabic: {
      title: " ما أُقدمه من",
    },
  };
  var data1 = {
    English: {
      title: "Services",
    },
    Arabic: {
      title: "خدمات",
    },
  };
  var data2 = {
    English: {
      title: "Web Development",
    },
    Arabic: {
      title: "تطوير المواقع",
    },
  };
  var data3 = {
    English: {
      title:
        "Adding multimedia features like sound, animation and video if applicable",
    },
    Arabic: {
      title:
        "إضافة ميزات الوسائط المتعددة مثل الصوت والرسوم المتحركة والفيديو إن أمكن",
    },
  };
  var data4 = {
    English: {
      title:
        "Ensuring the site is responsive, to render properly on all devices",
    },
    Arabic: {
      title: "التأكد من استجابة الموقع ، ليتم عرضه بشكل صحيح على جميع الأجهزة",
    },
  };
  var data5 = {
    English: {
      title:
        "Testing and improving the functionality and rendering of the site",
    },
    Arabic: {
      title: "اختبار وتحسين وظائف وتقديم الموقع",
    },
  };
  var data6 = {
    English: {
      title: "Uploading the site to a designated server",
    },
    Arabic: {
      title: "تحميل الموقع على خادم معين",
    },
  };
  var data7 = {
    English: {
      title: "Excellent problem-solving skills, Strong communication skills.",
    },
    Arabic: {
      title: "مهارات ممتازة في حل المشكلات ، ومهارات اتصال قوية",
    },
  };
  var data8 = {
    English: {
      title: "Data Analysis",
    },
    Arabic: {
      title: "تحليل البيانات",
    },
  };
  var data9 = {
    English: {
      title: "knowledgeable in mathematics and algorithms.",
    },
    Arabic: {
      title: "لدي دراية بالرياضيات والخوارزميات.",
    },
  };
  var data10 = {
    English: {
      title: "Proficient in various programming languages.",
    },
    Arabic: {
      title: "أتقن لغات برمجة مختلفه",
    },
  };
  var data11 = {
    English: {
      title: "Good Understanding of data structures.",
    },
    Arabic: {
      title: "فهم جيد لهياكل البيانات",
    },
  };
  var data12 = {
    English: {
      title: "Good Understanding in Data Visualization: Power Bi, Matplotlib",
    },
    Arabic: {
      title: "فهم جيد في تصور البيانات: Power Bi ، Matplotlib",
    },
  };
  var data13 = {
    English: {
      title: "Good Understanding in Data Analysis Tools: SQL, Pandas, NumPy.",
    },
    Arabic: {
      title: "فهم جيد في أدوات تحليل البيانات: SQL ، Pandas ، NumPy.",
    },
  };
  var data14 = {
    English: {
      title: "Embedded Systems Development",
    },
    Arabic: {
      title: "تطوير الأنظمة المدمجة",
    },
  };
  var data15 = {
    English: {
      title:
        "knowledge to integrate the hardware and software in an embedded system.",
    },
    Arabic: {
      title: "معرفة لدمج الأجهزة والبرامج في نظام مضمن",
    },
  };
  var data16 = {
    English: {
      title:
        "understanding of programming languages, device drivers, and real-time operating systems.",
    },
    Arabic: {
      title:
        "فهم لغات البرمجة وبرامج تشغيل الأجهزة وأنظمة التشغيل في الوقت الفعلي",
    },
  };
  var data17 = {
    English: {
      title:
        "Basic understanding of Internet of Things (IoT) and internet-based technologies",
    },
    Arabic: {
      title:
        "الفهم الأساسي لإنترنت الأشياء (IoT) والتقنيات القائمة على الإنترنت",
    },
  };
  var data18 = {
    English: {
      title: "Microcontrollers programming, Assembly programming language.",
    },
    Arabic: {
      title: "برمجة المتحكمات الدقيقة ، لغة برمجة التجميع",
    },
  };
  var data19 = {
    English: {
      title: "Ability to read a schematic",
    },
    Arabic: {
      title: "القدرة على قراءة الوثائق",
    },
  };

  const x = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_offer").textContent =
        data[event.currentTarget.checked ? "Arabic" : "English"].title;
    });

  const x1 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_serv").textContent =
        data1[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x2 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_dev").textContent =
        data2[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x3 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_dev1").textContent =
        data3[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x4 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_dev2").textContent =
        data4[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x5 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_dev3").textContent =
        data5[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x6 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_dev4").textContent =
        data6[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x7 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_dev5").textContent =
        data7[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x8 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ai").textContent =
        data8[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x9 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ai1").textContent =
        data9[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x10 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ai2").textContent =
        data10[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x11 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ai3").textContent =
        data11[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x12 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ai4").textContent =
        data12[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x13 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ai5").textContent =
        data13[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x14 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_es").textContent =
        data14[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x15 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_es1").textContent =
        data15[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x16 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_es2").textContent =
        data16[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x17 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_es3").textContent =
        data17[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x18 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_es4").textContent =
        data18[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x19 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_es5").textContent =
        data19[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
};

const Services = () => {
  return (
    <section id="services">
      <h5 className="lang_offer">What I Offer</h5>
      <h2 className="lang_serv">Services</h2>
      <div className="container services__container">
        {/*Start of Web development*/}
        <article className="service">
          <div className="service__head">
            <h3 className="lang_dev">Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_dev1">
                Adding multimedia features like sound, animation and video if
                applicable
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_dev2">
                Ensuring the site is responsive, to render properly on all
                devices
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_dev3">
                Testing and improving the functionality and rendering of the
                site
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_dev4">
                Uploading the site to a designated server
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_dev5">
                Excellent problem-solving skills, Strong communication skills.
              </p>
            </li>
          </ul>
        </article>
        {/*End of Web development*/}

        {/*Start of artificial intelligence*/}
        <article className="service">
          <div className="service__head">
            <h3 className="lang_ai">Data Analysis</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_ai1">
                knowledgeable in mathematics and algorithms.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_ai2">
                Proficient in various programming languages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_ai3">Good Understanding of data structures.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_ai4">
                Good Understanding in Data Visualization: Power Bi, Matplotlib
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_ai5">
                Good Understanding in Data Analysis Tools: SQL, Pandas, NumPy.
              </p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX*/}

        {/*Start of Content Creation*/}
        <article className="service">
          <div className="service__head">
            <h3 className="lang_es">Embedded Systems Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_es1">
                knowledge to integrate the hardware and software in an embedded
                system.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_es2">
                understanding of programming languages, device drivers, and
                real-time operating systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_es3">
                Basic understanding of Internet of Things (IoT) and
                internet-based technologies
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_es4">
                Microcontrollers programming, Assembly programming language.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p className="lang_es5">Ability to read a schematic</p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation*/}
      </div>
    </section>
  );
};

export default Services;
