import React from "react";
import { Helmet } from "react-helmet";
import homeBanner from "../../assets/Image/headerBanner.jpg";
import ClientSay from "../../component/ClientsSay/Clients";
import Coursal from "../../component/Coursal/coursal";
import Footer from "../../component/Footer/Footer";
import HomeBanner from "../../component/HomeBanner/HomeBanner";
import Nav1 from "../../component/Nav/Nav1";
import ProductItem from "../../component/product/Product";

export default function Home({ t, changeLn, selectedLanguage }) {
  // const sectionRef = useRef(null)

  // useEffect(() => {

  //   sectionRef.current.scrollIntoView({behavior: 'smooth'})
  // }, [])


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
        <meta property="og:url" content="https://www.techknowgram.com/" />

        <meta property="url" content="https://www.techknowgram.com/" />
        <meta property="twitter:description" content="TechKnowGram Limited" />
        <meta
          property="twitter:card"
          content="Solution | Performance | Comfort"
        />
        <meta
          property="twitter:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />

        <link rel="canonical" href="https://www.techknowgram.com" />
      </Helmet>
      <Nav1 t={t} changeLn={changeLn} selectedLanguage={selectedLanguage} />
      <HomeBanner
        image={homeBanner}
        header={"TechKnowGram"}
        text={t("Solution | Performance | Comfort")}
      />
      <div className="container">
        <h1 className="text-center" style={{ margin: "20px" }}>
          {t("WhyTechKnowGram")}{" "}
        </h1>
        <div className="row">
          <div className="col-md-7">
            <li>{t("CostEffective")}</li>
            <li>{t("BetterProcess")}</li>
            <li>{t("DedicatedTeam")}</li>
            <li>{t("StrategicPartnership")}</li>
            <li> {t("ClientServiceManagement")}</li>
            <li>{t("PerformanceDrivenCulture")}</li>
            <li>{t("LatestTechnologyProcess")}</li>
            <li> {t("DedicatedandOutstandingServices")}</li>
            <li>{t("RoundtheClockandRoundtheYearService")}</li>
            <li>{t("DedicatedRandDTeamtoAdoptNewTechnologies")}</li>
            <li>{t("MaximizeBusinessSuccessThroughCostMinimization")}</li>
            <li>{t("FollowClientSuggestedProcessManagementandTimeZone")}</li>
            <li>
              {t("JapaneseLanguageTechnologyProcessandManagementSupport")}
            </li>
            <li>
              {t(
                "twentyFiveyearsofprofessionalandmanagementexperienceacrosstheglobe"
              )}
            </li>
          </div>
          <div className="col-md-5">
            <Coursal />
          </div>
        </div>

        <ProductItem t={t} />

        <ClientSay t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}
