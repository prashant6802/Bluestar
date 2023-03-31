import React from "react";
import Carousel from "./components/Carousel.js";
import Genres from "./components/Genres.js";
import Publishers from "./components/Publishers.js";
import Footer from "./components/Footer.js";

const Landing = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Carousel id="Home"/>
        <Genres id="Genres"/>
        <Publishers id="Publishers"/>
        <Footer id="Contact"/>
      </div>
    </div>
  );
};

export default Landing;
