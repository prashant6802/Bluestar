import React from "react";

import "./carousel.css";

function Carousel() {
  return (
    <>
      {
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id="home">
    <div className="carousel-item active akka">
      <div className="showimg"><img src={require("./images/spiderman.jpg")} className="d-block w-100" alt="..." height="690vh"/></div>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="showmess">BLUESTAR INTERACTIVE</h1>
        <p className="showmess">Image Source: Spiderman</p>
      </div>
    </div>
    <div className="carousel-item akka">
    <div className="showimg"><img src={require("./images/valoranta.jpg")} className="d-block w-100" alt="..." height="690vh"/></div>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="showmess">BLUESTAR INTERACTIVE</h1>
        <p className="showmess">Image Source: Valorant</p>
      </div>
    </div>
    <div className="carousel-item akka">
    <div className="showimg"><img src={require("./images/pubg3.jpg")} className="d-block w-100" alt="..." height="690vh"/></div>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="showmess">BLUESTAR INTERACTIVE</h1>
        <p className="showmess">Image Source: PUBG</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
}
    </>
  );
}

export default Carousel;
