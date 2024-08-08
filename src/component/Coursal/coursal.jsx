import React from "react";
// import './jabad.css'

function Coursal() {
  const logo = [
    {
      logo: require("../../assets/Image/Mdaward.jpg"),
    },
    {
      logo: require("../../assets/Image/md2.png"),
    },

    {
      logo: require("../../assets/Image/cover2.png"),
    },
    {
      logo: require("../../assets/Image/side6.jpg"),
    },
  ];
  return (
    <>
      <div className="">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            {logo.map((item, i) => (
              <div class={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img
                  class="d-block "
                  src={item.logo}
                  alt="TechKnowGram Limited: Solution | Performance | Comfort"
                />
              </div>
            ))}
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {logo.map((item, i) => (
            <div class={`carousel-item ${i===0 ? "active":""}`}>
              <img class="d-block " src={item.logo} alt="First slide" />
            </div>
          ))}
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
    </>
  );
}
export default Coursal;
