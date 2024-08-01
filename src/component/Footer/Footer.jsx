import React, { useState } from "react";
import "./Footer.css";

const certification = [
  {
    src: require("../../assets/Image/Certification/c1.png"),
  },
  { src: require("../../assets/Image/Certification/c2.png") },
  { src: require("../../assets/Image/Certification/c3.png") },
];

function Footer({ t }) {
  const [about, setAbout] = useState(false);

  const goToabout = (e) => {
    setAbout(!about);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>{t("abus")}</h4>
            <p>
              {t("FooterAboutOne")}
              {!about && ".."}
              {about && <p>{t("FooterAboutTwo")}</p>}{" "}
              <p
                onClick={goToabout}
                style={{ color: "aquamarine", cursor: "pointer" }}
              >
                {about ? t("readless") : t("readmore")}
              </p>
            </p>
          </div>
          <div className="col-md-3">
            <a href="/" style={{ textDecoration: "none" }}>
              <h3
                className="techknow"
                style={{ color: "white", cursor: "pointer" }}
              >
                TechKnowGram Limited
              </h3>
            </a>
            <p>
              {t("AddressLineOne")}
              <br /> {t("AddressLineTwo")}
              <br />
              {t("AddressContact")}
              <br /> {t("AddressMobileWhatsApp")} <br />
              {t("AddressEmail")}
            </p>
          </div>
          <div className="col-md-3">
            <a href="/" style={{ textDecoration: "none" }}>
              <h3
                className="techknow"
                style={{ color: "white", cursor: "pointer" }}
              >
                合同会社TechKnowGram
              </h3>
            </a>
            <p>
              東京都世田谷区尾山台
              <br /> 1丁目10番4号, 日本
              <br />
              {t("AddressContact")}
              <br /> {t("AddressMobileWhatsApp")} <br />
              {t("AddressEmail")}
            </p>
          </div>
          <div className="col-md-3">
            <h4>{t("cont")}</h4>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/TechKnowGramLTD">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/techknowgram.ltd/">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/techknowgram/?trk=similar-pages&originalSubdomain=bd">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <div className="row">
              {certification.map((src) => (
                <div className=" certification">
                  <img
                    style={{ borderRadius: "10px", height: "50px" }}
                    src={src.src}
                    alt="TechKnowGram Limited: Solution | Performance | Comfort"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            <p>&copy; {t("cop")}</p>
            <a href="/">
              <img
                alt="TechKnowGram Limited: Solution | Performance | Comfort"
                src={require("../../assets/Image/headerlogo.jpg")}
                width="100"
                height="35"
                style={{ marginLeft: "5px", marginBottom: "17px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
