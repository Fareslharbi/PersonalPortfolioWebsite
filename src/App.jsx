import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.css";
import { lang_change_header } from "./components/header/Header";
import { lang_change_about } from "./components/about/About";
import { lang_change_experience } from "./components/experience/Experience";
import { lang_change_services } from "./components/services/Services";
import { lang_change_portfolio } from "./components/portfolio/Portfolio";
import { lang_change_testimonials } from "./components/testimonials/Testimonials";
import { lang_change_certification } from "./components/certification/Certification";
import { lang_change_contact } from "./components/contact/Contact";
import { lang_change_footer } from "./components/footer/Footer";

const App = () => {
  const change_language = () => {
    lang_change_header();
    lang_change_about();
    lang_change_experience();
    lang_change_services();
    lang_change_portfolio();
    lang_change_testimonials();
    lang_change_certification();
    lang_change_contact();
    lang_change_footer();
  };
  return (
    <div className="techPolarisFounder">
      <label class="switch">
        <input type="checkbox" id="togBtn" onClick={change_language} />
        <div class="slider round">
          <span language="Arabic" class="on">
            ARB
          </span>
          <span language="English" class="off">
            ENG
          </span>
        </div>
      </label>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
