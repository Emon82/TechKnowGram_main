import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Image/headerlogo.jpg";
import "./Nav.css";

function Nav1({ changeLn, t, selectedLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [search, setSearch] = useState("d-none");

  const navigate = useNavigate();

  const handelInpurSearch = () => {
    setSearch((search) => (search === "d-none" ? "d-block" : "d-none"));
  };

  const goToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const goToAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  const goToClient = (e) => {
    e.preventDefault();
    navigate("/client");
  };

  const goToProduct = (e) => {
    e.preventDefault();
    navigate("/product");
  };

  const goToJob = (e) => {
    e.preventDefault();
    navigate("/job");
  };

  const goToBlog = (e) => {
    e.preventDefault();
    navigate("/blog");
  };

  const goToNews = (e) => {
    e.preventDefault();
    navigate("/news");
  };

  const goToContact = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  const goToProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  // const handleDownload = () => {

  //   const pdfUrl = require("../../assets/Image/PDF/profile.pdf");
  //   const pdfName = "profile.pdf";
  //   saveAs(pdfUrl, pdfName);

  // };

  const handleLanguageChange = (e) => {
    changeLn(e.target.value);
  };

  const navref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    console.log("scrolled", navref);
    if (scrolled && !isMobile) {
      navref.current.classList.add("scrolled");
    } else {
      navref.current.classList.remove("scrolled");
    }
  }, [scrolled, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      navref.current.classList.remove("scrolled");
    }
  }, [isMobile]);

  return (
    <Navbar ref={navref} bg="" expand="lg">
      <a onClick={goToHome} href="/">
        <img
          className="logonav"
          src={logo}
          alt="TechKnowGram Limited: Solution | Performance | Comfort"
        />
      </a>
      <Container className="dunno">
        {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="mxy-auto">
            <Nav.Link href="/" onClick={goToHome}>
              {t("home")}
            </Nav.Link>
            <Nav.Link href="about" onClick={goToAbout}>
              {t("Aboutus")}
            </Nav.Link>
            <Nav.Link href="client" onClick={goToClient}>
              {t("Clientspartners")}
            </Nav.Link>
            <Nav.Link href="product" onClick={goToProduct}>
              {t("ProductsServices")}
            </Nav.Link>
            <Nav.Link href="job" onClick={goToJob}>
              {t("Jobs")}{" "}
            </Nav.Link>
            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item href="blog" onClick={goToBlog}>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="news" onClick={goToNews}>
                {t("News")}
              </NavDropdown.Item>
              <NavDropdown.Item href="profile" onClick={goToProfile}>
                Profile
              </NavDropdown.Item>
              {/* <NavDropdown.Item onClick={handleDownload}>
                {" "}
                Profile{" "}
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="contact" onClick={goToContact}>
              {t("Contact")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form
        className="d-flex leora"
        style={{ padding: "5px", marginRight: "25px" }}
      >
        <Form.Control
          type="search"
          placeholder="Search"
          className={"me-2 " + search}
          aria-label="Search"
        />
        <Button variant="outline-success" onClick={handelInpurSearch}>
          <i className="fas fa-search"></i>
        </Button>
      </Form>
      <select
        className="language"
        name="language"
        id="language"
        onChange={handleLanguageChange}
      >
        <option value="en" selected={selectedLanguage === "en"}>
          English
        </option>
        <option value="jp" selected={selectedLanguage === "jp"}>
          Japanese
        </option>
      </select>
    </Navbar>
  );
}

export default Nav1;

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../assets/Image/navlogo.png'
// import './Nav.css'

// function NavScrollExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
