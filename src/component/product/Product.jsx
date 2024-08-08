import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./product.css";

function ProductItem({ item, t }) {
  const [expanded, setExpanded] = useState(false);
  const isBMS = item.title === "BMS"; 
  const isfreelanching = item.title === "Freelanching Patshala"; 
  const ismadeinbangladesh = item.title === "Made In Bangladesh"; 


  const getImageStyle = () => {
    if (item.title === "Sobjanta") {
      return { height: "93px",width:"215px" };
    }
    // Add other conditional styles here if needed
    return {};
  };
  const getImageStyleForBms = () => {
    if (item.title === "BMS") {
      return { height: "145px",width:"177px" };
    }
    // Add other conditional styles here if needed
    return {};
  };
  const getImageStyleFormadeinbangladesh = () => {
    if (item.title === "Made In Bangladesh") {
      return { height: "120px",width:"175px" };
    }
    // Add other conditional styles here if needed
    return {};
  };
  const getImageStyleForfreelanching = () => {
    if (item.title === "Freelanching Patshala") {
      return { height: "120px",width:"222px" };
    }
    // Add other conditional styles here if needed
    return {};
  };
  const getImageStyleForKhoz = () => {
    if (item.title === "KHOZ") {
      return { height: "112px", };
    }
    // Add other conditional styles here if needed
    return {};
  };

  const getImageStyleForErp = () => {
    if (item.title === "TKGL ERP") {
      return { height: "104px", };
    }
    // Add other conditional styles here if needed
    return {};
  };


  return (
    <div className="col-md-3">
      <Card className="lara1" style={{ height: expanded ? "auto" : "" }}>
        <div className="">
        <Card.Img
          variant="top"
          src={item.src}
          style={{
            // height: isBMS ? "175px" : "auto",
            // width: isSobjanta ? "200px" : "auto",
            ...getImageStyle(),
            ...getImageStyleForBms(),
            ...getImageStyleFormadeinbangladesh(),
            ...getImageStyleForfreelanching(),
            ...getImageStyleForKhoz(),
            ...getImageStyleForErp(),

            padding: "25px 40px",
          }}
          alt="TechKnowGram Limited: Solution | Performance | Comfort"
          
        />
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
            <a
              style={{ textDecoration: "none" }}
              href={item.link}
              target=""
              rel="noreferrer"
            >
              {" "}
              {item.title}{" "}
            </a>
          </Card.Title>
          
          <Card.Text>
            {item.text} {expanded && <>{item.text1} </>}{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? t("readless") : t("readmore")}
            </span>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function ServiceItem({ item }) {
  const [servics, setSetservice] = useState(false);
  const Chatbot = item.title === "Chatbot"; 

  const getImageForChatbot = () => {
    if (item.title === "Chatbot") {
      return { marginTop: "18px", background: "black",height:"77px",width:"136px",borderRadius:"10px", padding: "20px 0px", };
    }
    return {};
  };

  const getImageForCustome = () => {
    if (item.title === "Custom Solution Development") {
      return { marginTop: "20px", height:"70px",width:"130px",borderRadius:"10px" };
    }
    return {};
  };

  const getImageForSkill = () => {
    if (item.title === "Skill Migration Education Investment to Japan, Malaysia") {
      return { marginTop: "20px", height:"70px",width:"130px",borderRadius:"10px" };
    }
    return {};
  };

  const getImageForAi = () => {
    if (item.title === "AI AR VR Big Data Robotics IOT") {
      return { marginTop: "20px",height:"70px",width:"130px",borderRadius:"10px" };
    }
    return {};
  };

  

  return (
    <div className="col-md-3">
      <Card className="services" style={{ height: servics ? "auto" : "" }}>
      <div className="">
        <Card.Img
          variant="top"
          src={item.src}
          alt="TechKnowGram Limited: Solution | Performance | Comfort"
          style={{
            ...getImageForChatbot(),
            ...getImageForCustome(),
            ...getImageForSkill(),
            ...getImageForAi(),
           

          }}
        />
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
            {item.title}
          </Card.Title>
          <Card.Text>
            {item.text} {servics && <>{item.text1}</>}{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setSetservice(!servics)}
            >
              {servics ? "Readless" : "...Readmore"}
            </span>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function ProductSlide({ t }) {
  const product = [

    {
      link: "https://sobjanta.ai",
      title: "Sobjanta",
      text: t("Sobjanta Is A Generative AI-Based Personal Assistant. It also known as a conversational AI or chatbot"),
      text1: t("    trained to be informative and comprehensive. It can able to communicate and generate human-like text in response to a wide range of prompts and questions."),
      src: require("../../assets/Image/Product/sobjanta2.jpg"),
    },
    {
      link: "https://madeinbangladesh.info/",
      title: "Made In Bangladesh",
      text: t("Made In Bangladesh aims to bridge the gap between local producers and  "),
      text1: t(" international consumers by offering a curated selection of high-quality, authentic Bangladeshi goods. We are dedicated to promoting sustainable practices, preserving cultural heritage, and supporting the growth of small businesses across Bangladesh."),
      src: require("../../assets/Image/Product/madeinbangladesh bg.png"),
    },
    {
      link: "https://freelancingpathshala.com/",
      title: "Freelanching Patshala",
      text: t("Our mission is to empower freelancers by providing a robust "),
      text1: t(" platform where they can showcase their skills, connect with clients, and build sustainable careers. We strive to offer clients access to a diverse pool of talented professionals, ensuring that every project is met with expertise and dedication."),
      src: require("../../assets/Image/Product/freelanching.png"),
    },
    {
      link: "#",
      title: "BMS",
      text: t("BMS"),
      text1: t("BMS2"),
      src: require("../../assets/Image/Product/BMS .png"),
    },
    {
      link: "https://tkgerp.com/",
      title: "TKGL ERP",
      text: t("TechknowGramLimitedoffers"),
      text1: t("TechknowGramLimitedoffers2"),
      src: require("../../assets/Image/erp1.png"),
    },
    {
      link: "https://quizwin.xyz/",
      title: "QuizWin     ",
      text: t("QuizWin"),
      text1: t("QuizWin2"),
      src: require("../../assets/Image/quiz1.png"),
    },
    {
      link: "http://prostuti.net/",
      title: "Prostuti",
      text: t("Prostuti"),
      text1: t("Prostuti2"),
      src: require("../../assets/Image/prostuti1.png"),
    },
    {
      link: "#",
      title: "KHOZ",
      text: t("Khoz"),
      text1: t("Khoz2"),
      src: require("../../assets/Image/khoz1.png"),
    },
  ];

  const services = [
    {
      title: "Chatbot",
      text: t("Chatbot"),
      text1: t("Chatbot2"),
      src: require("../../assets/Image/Services/chatbot.png"),
    },
    {
      title: t("CustomSolutionDevelopmentTitle"),
      text: t("CustomSolutionDevelopment"),
      text1: t("CustomSolutionDevelopment2"),
      src: require("../../assets/Image/Services/services3.jpeg"),
    },
    {
      title: t("SkillMigrationTitle"),
      text: t("SkillMigration"),
      text1: t("SkillMigration2"),
      src: require("../../assets/Image/Services/services4.jpg"),
    },
    {
      title: t("AIARVRTitle"),
      text: t("AIARVR"),
      text1: t("AIARVR2"),
      src: require("../../assets/Image/Services/Ai.png"),
    },
  ];

  return (
    <div className="">
      <h1 className="text-center" style={{ margin: "20px" }}>
        {t("Products")}{" "}
      </h1>
      <div className="row">
        {product.map((item, key) => (
          <ProductItem t={t} item={item} key={key} />
        ))}
      </div>

      <h1 className="text-center" style={{ margin: "20px" }}>
        {t("Services")}{" "}
      </h1>
      <div className="row">
        {services.map((item, key) => (
          <ServiceItem item={item} key={key} />
        ))}
      </div>
    </div>
  );
}

export default ProductSlide;
