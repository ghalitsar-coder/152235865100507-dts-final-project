import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import imagesHeader from "../assets";

const PopularChoice = ({ image }) => {
  return (
    <div className=" rounded-xl max-h-[313px]  shadow-md overflow-hidden font-[Poppins]  ">
      <div className="max-h-[215px]">
        <img src={image} className="object-cover w-full h-full " alt="" />
      </div>
      <div className="p-5 xl:pt-7">
        <h2 className="font-semibold text-sm ">Tampomas Montain</h2>
        <p className="font-light text-xs ">Nature, Hiking</p>
      </div>
    </div>
  );
};

const Cards = () => {
  const PrevArrow = ({ onClick, style }) => (
    <HiOutlineChevronLeft
      onClick={onClick}
      className="absolute text-2xl top-[31%] left-0 z-[2] w-7 h-7 text-white bg-white/25 backdrop-blur-md p-1 rounded-full  "
    />
  );
  const NextArrow = ({ onClick, style }) => (
    <HiOutlineChevronRight
      onClick={onClick}
      className="absolute text-2xl top-[31%] right-0 w-7 h-7 p-1 text-white bg-white/25 backdrop-blur-md rounded-full  "
    />
  );
  // <HiOutlineChevronLeft />
  const responsive = [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: responsive,
  };
  return (
    <div className="">
      <Slider
        {...settings}
        className="[&>.slick-list>.slick-track]:flex [&>.slick-list>.slick-track]:gap-x-5 [&>.slick-list]:overflow-visible   cursor-pointer  "
      >
        {imagesHeader.map((item, idx) => (
          <PopularChoice image={item} key={idx} />
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
// * CODE SLICE OVERFLOW
// [&>.slick-list]:overflow-visible cursor-pointer [&>button]:z-[1] [&>.slick-list>.slick-track]:flex [&>.slick-list>.slick-track]:gap-x-5  max-h-[420px]
