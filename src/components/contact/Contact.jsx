import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const lang_change_contact = () => {
  var data = {
    English: {
      title: "Get In Touch",
    },
    Arabic: {
      title: "ابقى على تواصل",
    },
  };
  var data1 = {
    English: {
      title: "Contact Me",
    },
    Arabic: {
      title: "اتصل بي",
    },
  };
  var data2 = {
    English: {
      title: "Email",
    },
    Arabic: {
      title: "ايميل",
    },
  };
  var data3 = {
    English: {
      title: "Send A Message",
    },
    Arabic: {
      title: "ارسل رسالة",
    },
  };
  var data4 = {
    English: {
      title: "LinkedIn",
    },
    Arabic: {
      title: "لينكد ان",
    },
  };
  var data5 = {
    English: {
      title: "Send A Message",
    },
    Arabic: {
      title: "ارسل رسالة",
    },
  };
  var data6 = {
    English: {
      title: "Whatsapp",
    },
    Arabic: {
      title: "واتساب",
    },
  };
  var data7 = {
    English: {
      title: "Send A Message",
    },
    Arabic: {
      title: "ارسل رسالة",
    },
  };
  var data8 = {
    English: {
      title: "Send A Message",
    },
    Arabic: {
      title: "ارسل رسالة",
    },
  };
  const a = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_get").textContent =
        data[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const b = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_contact").textContent =
        data1[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const i = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_email").textContent =
        data2[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const c = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_send").textContent =
        data3[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const d = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_twitter").textContent =
        data4[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const e = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_send1").textContent =
        data5[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const f = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_whatsapp").textContent =
        data6[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const g = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_send2").textContent =
        data7[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const h = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector("#lang_send3").textContent =
        data8[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
};
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8eu9kns",
      "template_yun7l23",
      form.current,
      "-FbmD_D2NsGuPjKmD"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 className="lang_get">Get In Touch</h5>
      <h2 className="lang_contact">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4 className="lang_email">Email</h4>
            <h5>RealFaresLharbi@gmail.com</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:RealFaresLharbi@gmail.com"
              className="lang_send"
            >
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4 className="lang_twitter">LinkedIn</h4>
            <h5>FaresLharbi</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.linkedin.com/in/fareslharbi"
              className="lang_send1"
            >
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4 className="lang_whatsapp">Whatsapp</h4>
            <h5>+966560748481</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone00966560748481"
              className="lang_send2"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/*End of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" placeholder="Your Email" name="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Mesaage"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" id="lang_send3">
            Send Mesaage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
