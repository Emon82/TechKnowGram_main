import Card from "react-bootstrap/Card";
import "./Menber.css";
const MemberShays = [
  {
    text: " Chairman",
    title: "Sahera Islam",
    src: require("../../assets/Image/chirman.jpg"),
  },
  {
    text: " Founder & CEO",
    title: "AKM Ahmedul Islam",
    src: require("../../assets/Image/babusir.jpeg"),
  },
  {
    text: " Director",
    title: "Zinat Humaira Khanam",
    src: require("../../assets/Image/madam.jpg"),
  },
  {
    text: "  Director",
    title: "Ayumu Takahashi",
    src: require("../../assets/Image/member2.jpg"),
  },
  {
    text: "Director ",
    title: "Dr. Mahmud Zubayer",
    src: require("../../assets/Image/sir.jpg"),
  },
  {
    text: "  Director",
    title: "Md. Ariful Alam",
    src: require("../../assets/Image/arif.jpg"),
  },
  {
    text: "  Advisor",
    title: "Ray Daud",
    src: require("../../assets/Image/leader5.jpg"),
  },
  {
    text: "  Advisor",
    title: "Jean-Marc Pelletier",
    src: require("../../assets/Image/member3.jpg"),
  },
];
function Members({ t }) {
  return (
    <>
      <div className="row">
        {MemberShays.map((item, key) => (
          <div className=" col-6 col-md-3">
            <Card className="lara">
              <Card.Img
                variant="top"
                style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                src={item.src}
                alt="TechKnowGram Limited: Solution | Performance | Comfort"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Members;
