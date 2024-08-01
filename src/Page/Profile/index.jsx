import { saveAs } from "file-saver";
import React from "react";
import { Helmet } from "react-helmet";
import homeBanner from "../../assets/Image/aboutCover.jpg";
import Footer from "../../component/Footer/Footer";
import Banner from "../../component/HomeBanner/HomeBanner";
import Nav1 from "../../component/Nav/Nav1";

import "./index.css";

// import logo from "../../assets/Image/membership/logo.png"
// import logo2 from "../../assets/Image/membership/logo.png"
// import logo3 from "../../assets/Image/membership/logo.png"
// import logo4 from "../../assets/Image/membership/logo.png"
// import logo5 from "../../assets/Image/membership/logo.png"

// const membershipLogo = [
//   {
//     src: require("../../assets/Image/membership/logo.png"),
//   },
//   {
//     src: require("../../assets/Image/membership/logo2.png"),
//   },
//   {
//     src: require("../../assets/Image/membership/logo5.png"),
//   },
//   {
//     src: require("../../assets/Image/membership/logo3.png"),
//   },
//   {
//     src: require("../../assets/Image/membership/logo6.png"),
//   },
//   {
//     src: require("../../assets/Image/she.png"),
//   },
// ];

export default function Profile({ t, changeLn, selectedLanguage }) {
  const handleDownload = () => {
    const pdfUrl = require("../../assets/Image/PDF/profile.pdf");
    const pdfName = "profile.pdf";
    saveAs(pdfUrl, pdfName);
  };
  return (
    <div>
      <Helmet>
        <title>TechKnowGram Limited Leading software company in Bangladesh </title>
        <meta
          name="description"
          content="TechKnowGram Limited is a leading software company specializing in cutting-edge solutions for businesses. We provide innovative software development, web development, and mobile app development services tailored to meet our clients' needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TechKnowGram Limited Leading software company in Bangladesh"
        />
        <meta
          property="og:description"
          content="TechKnowGram Limited is a leading software company specializing in cutting-edge solutions for businesses. We provide innovative software development, web development, and mobile app development services tailored to meet our clients' needs."
        />
        <meta
          property="og:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />
        <meta
          property="og:url"
          content="https://www.techknowgram.com/profile"
        />

        <meta property="url" content="https://www.techknowgram.com/profile" />
        <meta property="twitter:description" content="TechKnowGram Limited" />
        <meta
          property="twitter:card"
          content="Solution | Performance | Comfort"
        />
        <meta
          property="twitter:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />

        <link rel="canonical" href="https://www.techknowgram.com/profile" />
      </Helmet>
      <Nav1 t={t} changeLn={changeLn} selectedLanguage={selectedLanguage} />
      <Banner image={homeBanner} header={"TechKnowGram Profile"} />
      <div className="container">
        <div className="">
          <h1 className="text-center" style={{ margin: "20px" }}>
            Download TechKnowGram Profile from below:-
          </h1>
          {/* <p className="text-center">
            TechKnowGram Limited is a global solution provider led by experts
            having more than 25 years of professional experiences in both the
            local and global arena specially for Japan ICT market for last 20
            years as well as USA & Europe market. The company particularly
            provides web-based customized solutions on ERP, AI, Data Analytics,
            Robotics, Embedded Solutions with Beacon, AR, VR Applications and
            Gaming and Animation. TechKnowGram Limited is an ISO 9001: 2015, ISO
            14001: 2015 and ISO/IEC 27001: 2013 certified company and is a
            member of Bangladesh Association of Software BASIS, Bangladesh and
            Japan Chamber of Commerce & Industries (JBCCI), Bangladesh Computer
            Samity BCS, Bangladesh Association of Call Centers and Outsourcing
            BACCO, Ecommerce Association of Bangladesh e-CAB, CTO Forum of
            Bangladesh and SheTrades Commonwealth Program by International Trade
            Centre ITC.
          </p> */}
        </div>
        <div className="">
          <h1
            className="text-center pdf"
            style={{
              margin: "20px",
              fontFamily: "auto",
              cursor: "pointer",
              textDecoration: "underlined",
            }}
            onClick={handleDownload}
          >
            Download Japanese Version
          </h1>
        </div>

        <h1
          className="text-center pdf"
          style={{
            margin: "20px",
            fontFamily: "auto",
            cursor: "pointer",
            textDecoration: "underlined",
          }}
        >
          Download English Version
        </h1>

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
