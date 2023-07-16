import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/profolio/DRT_480x360.jpeg";
import IMG2 from "../../assets/profolio/React_Native_480x360.png";
import IMG3 from "../../assets/profolio/Django_React_Ecommerce_480x360.jpeg";
import IMG4 from "../../assets/profolio/techpolaris.png";
import IMG5 from "../../assets/profolio/Credit_Scoring_Data_Science_Project.jpeg_480x360.webp";
import IMG6 from "../../assets/profolio/Data Jupyeter.png";
import IMG7 from "../../assets/profolio/ThreeJS_Portfolio_Website_480x360.png";
import IMG8 from "../../assets/profolio/Rest_API_Web_Services_480x360.webp";
import IMG9 from "../../assets/profolio/fast.png";
import IMG10 from "../../assets/Screenshot_2023-01-05_at_1.32.50_PM_480x360.png";
import IMG11 from "../../assets/profolio/peronal.png";
import IMG12 from "../../assets/profolio/amazon.png";
import IMG13 from "../../assets/profolio/INSTA.png";
import IMG14 from "../../assets/profolio/Spotify_API_480x360.png";
import IMG15 from "../../assets/profolio/Google_Maps_Geocoding_and_Places_API_480x360.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Full Stack Website Django React TaliwindCSS ",
    github:
      "https://github.com/Fareslharbi/DjangoRestFramework-ReactPortfolioWebsite-Tailwindcss",
    demo:
      "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 2,
    image: IMG2,
    title: "Jana Company React Native Mobile App",
    github: "https://github.com/Fareslharbi/React-Native",
  },
  {
    id: 3,
    image: IMG3,
    title: "Jana E-Commerce Full Stack Website React-Django-TailwindCSS",
    github: "https://github.com/Fareslharbi/JanaEcom",
  },
  {
    id: 4,
    image: IMG4,
    title: "TechPolaris Company Full Stack Website React-Bootstrap-Django",
    github: "https://github.com/Fareslharbi/TechPolaris-Company-Website",
  },
  {
    id: 5,
    image: IMG5,
    title: "Credit Scoring Data Science Project",
    github:
      "https://github.com/Fareslharbi/DATA-SCIENCE-PROJECT-Credit-Scoring-",
  },
  {
    id: 6,
    image: IMG6,
    title: "Data Science + Website App with Jupyter Pandas FastAPI",
    github:
      "https://github.com/Fareslharbi/Data-Science-Pipeline-with-Jupyter-Pandas-FastAPI-",
  },
  {
    id: 7,
    image: IMG7,
    title: "ThreeJS Portfolio Website",
    github: "https://github.com/Fareslharbi/ThreeJS-portfolio-website",
  },
  {
    id: 8,
    image: IMG8,
    title: "Rest API Web Services",
    github: "https://github.com/Fareslharbi/Using-a-REST-API-Service---Python",
  },
  {
    id: 9,
    image: IMG9,
    title: "Web App with Flask, FastAPI, ngrok, and Invictify-",
    github:
      "https://github.com/Fareslharbi/Web-App-with-Flask-FastAPI-ngrok-and-Invictify---Python-",
  },
  {
    id: 10,
    image: IMG10,
    title: "Admin Dashboard",
    github: "https://github.com/Fareslharbi/Admin_Dashboard",
  },
  {
    id: 11,
    image: IMG11,
    title: "Personal Portfolio Website ReactJs",
    github: "https://github.com/Fareslharbi/PersonalWebSite",
  },
  {
    id: 12,
    image: IMG12,
    title: "Price Tracking And Monitoring on Amazon Web Scraping",
    github:
      "https://github.com/Fareslharbi/Price-Tracking-Monitoring-on-Amazon-Python-",
  },

  {
    id: 13,
    image: IMG13,
    title:
      "Scrape-Automate-behind-Password-Protected-Apps-with-Selenium-Python",
    github:
      "https://github.com/Fareslharbi/Scrape-Automate-behind-Password-Protected-Apps-with-Selenium-Python",
  },

  {
    id: 14,
    image: IMG14,
    title: "Spotify API",
    github: "https://github.com/Fareslharbi/The-Spotify-API---Python",
  },
  {
    id: 15,
    image: IMG15,
    title: "Google Maps Geocoding and Places API",
    github:
      "https://github.com/Fareslharbi/Using-Google-Maps-Geocoding-and-Places-API---Python-",
    demo:
      "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];
export const lang_change_portfolio = () => {
  var data0 = {
    English: {
      title: "My Recent Work",
    },
    Arabic: {
      title: "أعمالي الأخيره",
    },
  };
  var data1 = {
    English: {
      title: "Portfolio",
    },
    Arabic: {
      title: "مَلَفّ",
    },
  };
  const x0 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_work").textContent =
        data0[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
  const x1 = document
    .querySelector("#togBtn")
    .addEventListener("input", (event) => {
      document.querySelector(".lang_portfolio").textContent =
        data1[event.currentTarget.checked ? "Arabic" : "English"].title;
    });
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="lang_work">My Recent Work</h5>
      <h2 className="lang_portfolio">Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="lang_title">{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                {/* <a href={demo} className='btn  btn-primary'rel="noopener noreferrer" target='_blank'>Live Demo</a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
