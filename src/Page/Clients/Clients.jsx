import React from "react";
import { Helmet } from "react-helmet";
import homeBanner from "../../assets/Image/client3.jpg";
import Footer from "../../component/Footer/Footer";
import Banner from "../../component/HomeBanner/HomeBanner";
import Nav1 from "../../component/Nav/Nav1";

// import clientProduct1 from "../../assets/Image/clientProduct (1).jpg";
// import clientProduct2 from "../../assets/Image/clientProduct (2).jpg";
// import clientProduct3 from "../../assets/Image/clientProduct (3).jpg";
// import clientProduct4 from "../../assets/Image/clientProduct (4).png";
// import clientProduct5 from "../../assets/Image/clientProduct (5).png";
// import clientProduct6 from "../../assets/Image/clientProduct (6).png";
// import clientProduct7 from "../../assets/Image/clientProduct (7).png";
// import clientProduct8 from "../../assets/Image/clientProduct (8).png";

// const clientProduct = [
//   {
//     src: require("../../assets/Image/01.png"),
//   },
//   {
//     src: require("../../assets/Image/02.png"),
//   },
//   {
//     src: require("../../assets/Image/03.png"),
//   },
//   {
//     src: require("../../assets/Image/04.png"),
//   },
//   {
//     src: require("../../assets/Image/05.png"),
//   },
//   {
//     src: require("../../assets/Image/06.png"),
//   },
//   {
//     src: require("../../assets/Image/07.png"),
//   },
//   {
//     src: require("../../assets/Image/08.png"),
//   },
//   {
//     src: require("../../assets/Image/09.png"),
//   },
//   {
//     src: require("../../assets/Image/010.png"),
//   },
//   {
//     src: require("../../assets/Image/011.png"),
//   },
//   {
//     src: require("../../assets/Image/012.png"),
//   },
//   {
//     src: require("../../assets/Image/013.png"),
//   },
//   {
//     src: require("../../assets/Image/014.png"),
//   },
//   {
//     src: require("../../assets/Image/015.png"),
//   },
//   {
//     src: require("../../assets/Image/016.png"),
//   },
//   {
//     src: require("../../assets/Image/017.png"),
//   },
//   {
//     src: require("../../assets/Image/018.png"),
//   },
//   {
//     src: require("../../assets/Image/019.png"),
//   },
//   {
//     src: require("../../assets/Image/020.png"),
//   },
//   {
//     src: require("../../assets/Image/021.png"),
//   },
//   {
//     src: require("../../assets/Image/022.png"),
//   },
//   {
//     src: require("../../assets/Image/023.png"),
//   },
//   {
//     src: require("../../assets/Image/024.jpg"),
//   },
//   {
//     src: require("../../assets/Image/025.png"),
//   },
//   {
//     src: require("../../assets/Image/026.png"),
//   },
//   {
//     src: require("../../assets/Image/027.png"),
//   },
//   {
//     src: require("../../assets/Image/028.png"),
//   },
//   {
//     src: require("../../assets/Image/029.png"),
//   },
//   {
//     src: require("../../assets/Image/030.png"),
//   },
//   {
//     src: require("../../assets/Image/031.png"),
//   },
//   {
//     src: require("../../assets/Image/032.png"),
//   },
//   {
//     src: require("../../assets/Image/033.png"),
//   },
//   {
//     src: require("../../assets/Image/034.png"),
//   },
//   {
//     src: require("../../assets/Image/035.png"),
//   },
//   {
//     src: require("../../assets/Image/036.png"),
//   },
//   {
//     src: require("../../assets/Image/037.png"),
//   },
//   {
//     src: require("../../assets/Image/038.png"),
//   },
//   {
//     src: require("../../assets/Image/039.jpg"),
//   },
//   {
//     src: require("../../assets/Image/040.png"),
//   },
//   {
//     src: require("../../assets/Image/041.png"),
//   },
//   {
//     src: require("../../assets/Image/042.png"),
//   },
//   {
//     src: require("../../assets/Image/043.png"),
//   },
//   {
//     src: require("../../assets/Image/044.png"),
//   },
//   {
//     src: require("../../assets/Image/045.png"),
//   },
//   {
//     src: require("../../assets/Image/046.png"),
//   },
//   {
//     src: require("../../assets/Image/047.png"),
//   },
//   {
//     src: require("../../assets/Image/048.png"),
//   },
//   {
//     src: require("../../assets/Image/049.png"),
//   },
//   {
//     src: require("../../assets/Image/050.png"),
//   },
//   {
//     src: require("../../assets/Image/051.png"),
//   },
//   {
//     src: require("../../assets/Image/052.png"),
//   },
//   {
//     src: require("../../assets/Image/053.png"),
//   },
//   {
//     src: require("../../assets/Image/054.png"),
//   },
//   {
//     src: require("../../assets/Image/055.png"),
//   },
//   {
//     src: require("../../assets/Image/056.png"),
//   },
//   {
//     src: require("../../assets/Image/057.png"),
//   },
//   {
//     src: require("../../assets/Image/058.png"),
//   },
//   {
//     src: require("../../assets/Image/059.png"),
//   },
//   {
//     src: require("../../assets/Image/060.png"),
//   },
// ];

export default function Clients({ t, changeLn, selectedLanguage }) {
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
        <meta property="og:url" content="https://www.techknowgram.com/client" />

        <meta property="url" content="https://www.techknowgram.com/client" />
        <meta property="twitter:description" content="TechKnowGram Limited" />
        <meta
          property="twitter:card"
          content="Solution | Performance | Comfort"
        />
        <meta
          property="twitter:image"
          content="https://www.techknowgram.com/static/media/navlogo.af0c3c7e6269ac45867d.png"
        />

        <link rel="canonical" href="https://www.techknowgram.com/client" />
      </Helmet>
      <Nav1 selectedLanguage={selectedLanguage} t={t} changeLn={changeLn} />
      <Banner image={homeBanner} header={t("Clientspartners")} />
      <div className="container">
        <h1 className="text-center" style={{ margin: "20px" }}>
          {t("MajorClientsPartners")}
        </h1>
        <div className="row d-flex align-items-center">
          {/* {clientProduct.map ((val, key) => (
            <div className="col-6 col-md-2 text-center">
              <img className="img-fluid w-60" src={val.src} alt="TechKnowGram Limited: Solution | Performance | Comfort" />
            </div>
          ))} */}
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "80px", width: "150px" }}
              src={require("../../assets/Image/01.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "80px", width: "170px" }}
              src={require("../../assets/Image/02.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/03.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "80px", width: "80px" }}
              src={require("../../assets/Image/04.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "90px", width: "90px" }}
              src={require("../../assets/Image/05.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/06.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/07.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/08.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/09.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/010.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/011.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/012.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/013.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "150px", width: "150px" }}
              src={require("../../assets/Image/014.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "150px", width: "150px" }}
              src={require("../../assets/Image/015.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "170px", width: "170px" }}
              src={require("../../assets/Image/016.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "150px", width: "150px" }}
              src={require("../../assets/Image/017.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "150px", width: "150px" }}
              src={require("../../assets/Image/018.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/019.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "130px", width: "130px" }}
              src={require("../../assets/Image/020.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/021.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "160px", width: "140px" }}
              src={require("../../assets/Image/022.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/023.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/024.jpg")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/025.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/026.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/027.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "170px", width: "170px" }}
              src={require("../../assets/Image/028.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/029.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/030.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/031.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/032.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/033.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/034.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/035.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/036.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/037.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "160px", width: "160px" }}
              src={require("../../assets/Image/038.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "130px", width: "130px" }}
              src={require("../../assets/Image/039.jpg")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "130px", width: "130px" }}
              src={require("../../assets/Image/040.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/041.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/042.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "130px", width: "130px" }}
              src={require("../../assets/Image/043.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/044.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "130px", width: "120px" }}
              src={require("../../assets/Image/045.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/046.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/047.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/048.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "80px", width: "80px" }}
              src={require("../../assets/Image/049.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "120px" }}
              src={require("../../assets/Image/050.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/051.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "100px", width: "100px" }}
              src={require("../../assets/Image/052.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "130px", width: "150px" }}
              src={require("../../assets/Image/053.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "120px", width: "150px" }}
              src={require("../../assets/Image/054.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "110px", width: "110px" }}
              src={require("../../assets/Image/jobaar.jpg")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "170px", width: "180px" }}
              src={require("../../assets/Image/056.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "150px", width: "150px" }}
              src={require("../../assets/Image/057.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "160px", width: "160px" }}
              src={require("../../assets/Image/058.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "160px", width: "160px" }}
              src={require("../../assets/Image/059.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
          <div className="col-6 col-md-2 text-center">
            <img
              style={{ heigth: "160px", width: "160px" }}
              src={require("../../assets/Image/060.png")}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
          </div>
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
}
