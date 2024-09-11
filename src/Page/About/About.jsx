import React, { useState } from "react";
import { Helmet } from "react-helmet";
import homeBanner from "../../assets/Image/aboutCover.jpg";
import Footer from "../../component/Footer/Footer";
import Banner from "../../component/HomeBanner/HomeBanner";
import Members from "../../component/MemberShip/Menber";
import Nav1 from "../../component/Nav/Nav1";

import "./About.css";

const membershipLogo = [
  {
    src: require("../../assets/Image/membership/logo.png"),
  },
  {
    src: require("../../assets/Image/membership/fbcci.png"),
  },
  {
    src: require("../../assets/Image/membership/logo2.png"),
  },
  {
    src: require("../../assets/Image/membership/logo5.png"),
  },
  {
    src: require("../../assets/Image/membership/logo3.png"),
  },
  {
    src: require("../../assets/Image/membership/logo6.png"),
  },
  {
    src: require("../../assets/Image/she.png"),
  },
];

export default function About({ t, changeLn, selectedLanguage }) {
  const [about, setAbout] = useState(false);
  const [aboutBabuSan, setAboutBabuSan] = useState(false);

  const toggleAbout = () => {
    setAbout(!about);
  };

  const toggleAboutBabuSan = () => {
    setAboutBabuSan(!aboutBabuSan);
  };

  return (
    <div>
      <Helmet>
        <title>
          TechKnowGram Limited Leading software & AI company in Bangladesh{" "}
        </title>
        <meta
          name="description"
          content="TechKnowGram Limited is a leading software company specializing in cutting-edge solutions for businesses. We provide innovative software development, web development, and mobile app development services tailored to meet our clients' needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TechKnowGram Limited Leading software & AI company in Bangladesh"
        />
        <meta
          property="og:description"
          content="TechKnowGram Limited is a leading software company specializing in cutting-edge solutions for businesses. We provide innovative software development, web development, and mobile app development services tailored to meet our clients' needs."
        />
        <meta
          property="og:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />
        <meta property="og:url" content="https://www.techknowgram.com/about" />
        <meta property="url" content="https://www.techknowgram.com/about" />
        <meta property="twitter:description" content="TechKnowGram Limited" />
        <meta
          property="twitter:card"
          content="Solution | Performance | Comfort"
        />
        <meta
          property="twitter:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />
        <link rel="canonical" href="https://www.techknowgram.com/about" />
      </Helmet>
      <Nav1 t={t} selectedLanguage={selectedLanguage} changeLn={changeLn} />
      <Banner image={homeBanner} header={t("Aboutus")} />
      <div className="container">
        <div>
          <h1 className="text-center" style={{ margin: "20px" }}>
            {t("Abouttechknowgram")}
          </h1>
          <p>
            {t("AboutTechKnowGramLimited")}
            {!about && "..."}
            {about && t("AboutTechKnowGramLimitedReadMore")}
            <span
              onClick={toggleAbout}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {about ? ` ${t("readless")}` : ` ${t("readmore")}`}
            </span>
          </p>
        </div>
        <div className="owner-profile">
          <img
            src={require("../../assets/Image/Cuting.png")}
            alt="TechKnowGram Limited: Solution | Performance | Comfort"
          />
          <h2>Ahmedul Islam BABU</h2>
          <h3>Founder and CEO</h3>
          <p className="description" style={{ textAlign: "start" }}>
            {t("AboutBabuSan")}
            {!aboutBabuSan && "..."}
            {aboutBabuSan && t("AboutBabuSanReadmore")}
            <span
              onClick={toggleAboutBabuSan}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {aboutBabuSan ? ` ${t("readless")}` : ` ${t("readmore")}`}
            </span>
          </p>
        </div>
        <div>
          <h1
            className="text-center"
            style={{ margin: "20px", fontFamily: "auto" }}
          >
            {t("Leadership")}
          </h1>
          <Members />
        </div>
        <h1
          className="text-center"
          style={{ margin: "20px", fontFamily: "auto" }}
        >
          {t("Member")}
        </h1>
        <div
          className="rowGrid"
          style={{
            margin: "10px",
            borderBottom: "2px solid",
            textAlign: "center",
          }}
        >
          {membershipLogo.map((item) => (
            <div className="col-grid" key={item.src}>
              <img
                className="membershiblogo"
                src={item.src}
                alt="TechKnowGram Limited: Solution | Performance | Comfort"
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-7"></div>
          <div
            className="col-md-2"
            style={{ display: "flex", alignItems: "center" }}
          ></div>
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
}
