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
  const [isMobile, setIsMobile] = useState(false);
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
    if (scrolled && !isMobile) {
      navref.current.classList.add("scrolled");
    } else {
      navref.current.classList.remove("scrolled");
    }
  }, [scrolled, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
    <Navbar
      ref={navref}
      bg="light"
      expand="lg"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand
          onClick={goToHome}
          href="/"
          className="d-flex align-items-center"
        >
          <img
            className="logonav"
            src={logo}
            alt="TechKnowGram Limited: Solution | Performance | Comfort"
            // style={{ maxHeight: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fontsize">
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
              {t("Jobs")}
            </Nav.Link>
            <NavDropdown title={t("News")} id="basic-nav-dropdown">
              <NavDropdown.Item href="blog" onClick={goToBlog}>
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="news" onClick={goToNews}>
                {t("News")}
              </NavDropdown.Item>
              <NavDropdown.Item href="profile" onClick={goToProfile}>
                Profile
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact" onClick={goToContact}>
              {t("Contact")}
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className={`me-2 ${search}`}
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handelInpurSearch}>
              <i className="fas fa-search"></i>
            </Button>
          </Form> */}
          <select
            className="language ms-3"
            name="language"
            id="language"
            onChange={handleLanguageChange}
            defaultValue={selectedLanguage}
          >
            <option value="en">English</option>
            <option value="jp">Japanese</option>
          </select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;
