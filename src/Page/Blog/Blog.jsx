import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../assets/Image/blog.png";
import Footer from "../../component/Footer/Footer";
import Banner from "../../component/HomeBanner/HomeBanner";
import Nav1 from "../../component/Nav/Nav1";

export default function Blog({ t, changeLn, selectedLanguage }) {
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
        <meta property="og:url" content="https://www.techknowgram.com/blog" />

        <meta property="url" content="https://www.techknowgram.com/blog" />
        <meta property="twitter:description" content="TechKnowGram Limited" />
        <meta
          property="twitter:card"
          content="Solution | Performance | Comfort"
        />
        <meta
          property="twitter:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />

        <link rel="canonical" href="https://www.techknowgram.com/blog" />
      </Helmet>
      <Nav1 t={t} changeLn={changeLn} selectedLanguage={selectedLanguage} />
      <Banner image={logo} header={"Blog"} />

      <Footer t={t} />
    </div>
  );
}
