import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { bg1, bg2, bg3, bg4, bg5, bg6, image1 } from "../assets";

const ImgSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // nextArrow: <></>,
    // prevArrow: <></>,
    adaptiveHeight: false,
    // responsive: responsive,
  };
  return (
    <div className="w-[90%] mx-auto ">
      <Slider {...settings}>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img
            src={bg2}
            alt="banner"
            className="w-[100%] h-[100%] object-cover  "
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img
            src={bg4}
            alt="banner"
            className="w-[100%] h-[100%] object-cover  "
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img
            src={bg5}
            alt="banner"
            className="w-[100%] h-[100%] object-cover  "
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img
            src={bg1}
            alt="banner"
            className="w-[100%] h-[100%] object-cover  "
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img
            src={bg3}
            alt="banner"
            className="w-[100%] h-[100%] object-cover  "
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;
