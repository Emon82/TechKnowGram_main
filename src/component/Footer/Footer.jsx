import React, { useState } from "react";
import "./Footer.css";
import flagbd from "../../assets/Image/Product/Flag/bangladesh.png"
import flagjp from "../../assets/Image/Product/Flag/japan.png";
import flagusa from "../../assets/Image/Product/Flag/united-states.png";

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
      <div className="container-fluid px-5">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <h6>{t("abus")}</h6>
            <p style={{ fontSize: "12px" }}>
              {t("FooterAboutOne")}
              {!about && ".."}
              {about && <span>{t("FooterAboutTwo")}</span>}{" "}
              <span
                onClick={goToabout}
                style={{
                  color: "aquamarine",
                  cursor: "pointer",
                  display: "inline",
                }}
              >
                {about ? t("readless") : t("readmore")}
              </span>
            </p>
          </div>
          <div className="col-md-2">
            <a href="/" style={{ textDecoration: "none" }}>
              <h6
                className="techknow"
                style={{ color: "white", cursor: "pointer" }}
              >
                TechKnowGram Ltd.{" "}
                <img
                  src={flagbd}
                  alt=""
                  style={{ height: "15px ", width: "15px" }}
                />
              </h6>
            </a>
            <p style={{ fontSize: "12px", lineHeight: "18px" }}>
              {t("AddressLineOne")}
              <br /> {t("AddressLineTwo")}
              <br />
              {/* {t("AddressContact")}
              <br /> {t("AddressMobileWhatsApp")} <br />
              {t("AddressEmail")} */}
            </p>
          </div>
          <div className="col-md-2">
            <a href="/" style={{ textDecoration: "none" }}>
              <h6
                className="techknow"
                style={{ color: "white", cursor: "pointer" }}
              >
                TechKnowGram 合同会社{" "}
                <img
                  src={flagjp}
                  alt=""
                  style={{ height: "15px ", width: "15px" }}
                />
              </h6>
            </a>
            <p style={{ fontSize: "12px" }}>
              東京都世田谷区尾山台
              <br /> 1丁目10番4号, 日本
              <br />
            </p>
          </div>
          <div className="col-md-2">
            <a href="/" style={{ textDecoration: "none" }}>
              <h6
                className="techknow"
                style={{ color: "white", cursor: "pointer" }}
              >
                TechKnowGram LLC{" "}
                <img
                  src={flagusa}
                  alt=""
                  style={{ height: "15px ", width: "15px" }}
                />
              </h6>
            </a>
            <p style={{ fontSize: "12px" }}>
              1209 Mountain Road PL NE, STE R,
              <br /> Albuquerque, NM 87110, USA
              <br />
              {/* {t("AddressContactForUSA")}
              <br /> {t("AddressMobileWhatsAppForUSA")} <br />
              {t("AddressEmail")} */}
            </p>
          </div>
          <div className="col-md-2 ">
            <h6 style={{ fontSize: "18px" }}>{t("cont")}</h6>
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
          </div>
          <div className="col-md-2">
            <div className="row">
              {certification.map((src) => (
                <div className=" certification">
                  <img
                    style={{ borderRadius: "10px", height: "35px" }}
                    src={src.src}
                    alt="TechKnowGram Limited: Solution | Performance | Comfort"
                  />
                </div>
              ))}
            </div>
            <div className="" style={{ fontSize: "12px", marginTop: "10px" }}>
              {t("AddressContact")} <br />
              {/* <br /> {t("AddressMobileWhatsApp")} <br /> */}
              {t("AddressEmail")}
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
