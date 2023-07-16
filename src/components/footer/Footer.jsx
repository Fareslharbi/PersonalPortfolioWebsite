import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const lang_change_footer = () => {
  var data0 = {
    English: {
      title: "FARES",
    },
    Arabic: {
      title: "فارس",
    },
  };
  var data1 = {
    English: {
      title: "Home",
    },
    Arabic: {
      title: "الصفحة الرئيسية",
    },
  };
  var data2 = {
    English: {
      title: "About",
    },
    Arabic: {
      title: "عن",
    },
  };
  var data3 = {
    English: {
      title: "Experience",
    },
    Arabic: {
      title: "الخبرة",
    },
  };
  var data4 = {
    English: {
      title: "Services",
    },
    Arabic: {
      title: "الخدمات",
    },
  };
  var data5 = {
    English: {
      title: "Portfolio",
    },
    Arabic: {
      title: "المحفظة",
    },
  };
  var data6 = {
    English: {
      title: "Testimonials",
    },
    Arabic: {
      title: "التوصيات",
    },
  };
  var data9 = {
    English: {
      title: "Certification",
    },
    Arabic: {
      title: "الشهادات",
    },
  };
  var data7 = {
    English: {
      title: "Contact",
    },
    Arabic: {
      title: "التواصل",
    },
  };
  var data8 = {
    English: {
      title: "FARES. All right reserved.",
    },
    Arabic: {
      title: ".فارس. جميع الحقوق محفوظة",
    },
  };
  const x0 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".footer__logo").textContent =
        data0[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x1 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_home").textContent =
        data1[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x2 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_about").textContent =
        data2[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x3 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_exp").textContent =
        data3[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x4 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_ser").textContent =
        data4[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x5 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_portfo").textContent =
        data5[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x6 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_testttt").textContent =
        data6[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x7 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_con").textContent =
        data7[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x8 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_rights").textContent =
        data8[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x9 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_certification11").textContent =
        data9[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
};
const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        FARES
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#" className="lang_home">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="lang_about">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="lang_exp">
            Experience
          </a>
        </li>
        <li>
          <a href="#services" className="lang_ser">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="lang_portfo">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#testimonials" className="lang_testttt">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#certifications" className="lang_certification11">
            Certification
          </a>
        </li>
        <li>
          <a href="#contact" className="lang_con">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://twitter.com/FaresLharbi">
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small className="lang_rights">&copy; FARES. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
