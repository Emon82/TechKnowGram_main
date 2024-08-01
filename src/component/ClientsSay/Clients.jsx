import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo from "../../assets/Image/clint1.jpg";
import logo2 from "../../assets/Image/clint2.jpg";
import logo1 from "../../assets/Image/man2.jpeg";
import logo3 from "../../assets/Image/man4.jpeg";
import "./clints.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <h2 className="text-center" style={{ margin: "30px" }}>
          {this.props.t("WHATCLIENTSSAYS")}
        </h2>
        <Slider {...settings}>
          <div className="lawra">
            <img
              style={{ height: "150px", width: "150px", borderRadius: "50%" }}
              src={logo}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
            <h3>{this.props.t("KentaKato")}</h3>
            <p className="text-center">{this.props.t("KentaKatoDesc")}</p>
          </div>

          <div className="lawra">
            <img
              style={{ height: "150px", width: "150px", borderRadius: "50%" }}
              src={logo1}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
            <h3>{this.props.t("HirokazuYoshida")}</h3>
            <p className="text-center">{this.props.t("HirokazuYoshidaDesc")}</p>
          </div>

          <div className="lawra">
            <img
              style={{ height: "150px", width: "150px", borderRadius: "50%" }}
              src={logo2}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
            <h3>{this.props.t("KinyaIshii")}</h3>
            <p className="text-center">{this.props.t("KinyaIshiiDesc")}</p>
          </div>

          <div className="lawra">
            <img
              style={{ height: "150px", width: "150px", borderRadius: "50%" }}
              src={logo3}
              alt="TechKnowGram Limited: Solution | Performance | Comfort"
            />
            <h3>{this.props.t("MalligaSubramanium")}</h3>
            <p className="text-center">
              {this.props.t("MalligaSubramaniumDesc")}
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
