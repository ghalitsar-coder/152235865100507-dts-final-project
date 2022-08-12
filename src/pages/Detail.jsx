import { format } from "date-fns";
import React, { useCallback, useMemo, useState } from "react";
import { DateRange } from "react-date-range";
import { FaBed, FaCalendarAlt, FaBath, FaWifi, FaWind } from "react-icons/fa";
import { BsFillLampFill } from "react-icons/bs";
import { MdRamenDining } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { bg4, bg2, bg3 } from "../assets";
import { setForm } from "../redux/bookingSlice";
import { Cards } from "../components";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// const Facility = (second) => (

// )

const Detail = () => {
  const { form, optionsTravel } = useSelector((state) => state.booking);
  const [showDates, setShowDates] = useState(false);
  const [night, setNight] = useState(1);
  const [openGallery, setOpenGallery] = useState(false);
  const [price, setPrice] = useState(65);
  const dispatch = useDispatch();
  const arrDates = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];
  const handleStay = (type) => {
    console.log("TYPE ->", type);
    if (type === "inc") {
      return setNight((prev) => prev + 1);
    }
    return setNight((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const solveDate = () => {
    if (form?.dates !== undefined) {
      return [
        {
          ...form?.dates,
          startDate: new Date(form.dates.startDate),

          endDate: new Date(form.dates.endDate),
        },
      ];
    }
    return arrDates;
  };
  const solveDatePlaceHolder = () => {
    if (form?.dates !== undefined) {
      return `${format(new Date(form?.dates?.startDate), "MMM dd")} - ${format(
        new Date(form?.dates?.endDate),
        "MMM dd"
      )}`;
    }
    return `${format(new Date(), "MMM dd")}
 - ${format(new Date(), "MMM dd")}`;
  };

  const handleDate = (item) => {
    console.log("DATES ->", item);
    dispatch(
      setForm({
        dates: {
          ...item[0],
          startDate: String(item[0].startDate),
          endDate: String(item[0].endDate),
        },
      })
    );
  };

  console.log(openGallery);

  const facility = [
    { amount: 2, name: "bedroom", icon: <FaBed /> },
    { amount: 1, name: "living room", icon: <BsFillLampFill /> },
    { amount: 3, name: "bathroom", icon: <FaBath /> },
    { amount: 1, name: "diningroom", icon: <MdRamenDining /> },
    { amount: 100, name: "mb/s", icon: <FaWifi /> },
    { amount: 2, name: "units ready", icon: <FaWind /> },
    { amount: 2, name: "refrigator", icon: <CgSmartHomeRefrigerator /> },
    { amount: 1, name: "television", icon: <GrPersonalComputer /> },
  ];

  const GallerySlider = () => {
    const PrevArrow = ({ onClick, style }) => (
      <HiOutlineChevronLeft
        onClick={onClick}
        className="absolute text-2xl top-[50%]  z-[2] -left-5 md:-left-16   w-7 h-7 text-white cursor-pointer bg-white/25 backdrop-blur-md p-1 rounded-full  "
      />
    );
    const NextArrow = ({ onClick, style }) => (
      <HiOutlineChevronRight
        onClick={onClick}
        className="absolute text-2xl top-[50%]  z-[2] -right-5 md:-right-16 w-7 h-7 p-1 text-white cursor-pointer bg-white/25 backdrop-blur-md rounded-full  "
      />
    );
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
 
    return (
      <Slider
        {...settings}
        className="w-[80vw]  m-auto  md:h-[80vh] p-5  [&>.slick-list]:h-full [&>.slick-list>.slick-track]:h-full [&>.slick-list>.slick-track>*]:h-full  [&>.slick-list>.slick-track>.slick-slide>div]:h-full   [&>.slick-list>.slick-track>.slick-slide>div>div]:h-full"
      >
        {[bg4, bg2, bg3].map((item, idx) => (
          <div className="   focus:outline-none  w-full">
            <img
              src={item}
              alt=""
              key={idx}
              className="h-full w-full  focus:outline-none    object-cover "
            />
          </div>
        ))}
      </Slider>
    );
  };
  return (
    <>
        {openGallery && (
          <div className=" sticky   left-0 top-0 right-0 bottom-0  bg-black/25 z-[99] min-h-screen    flex flex-col   transition    ">
            <GallerySlider />
            <AiFillCloseCircle
              onClick={() => setOpenGallery(false)}
              className="bottom-12 cursor-pointer absolute right-[50%] text-2xl "
            />
          </div>
        )}
      <div className=" px-4 md:px-0 pt-32 relative  min-h-screen ">
        <div className="container mx-auto flex flex-col gap-y-14 ">
          <div className="grid gap-y-4  place-items-center ">
            <h1 className="text-3xl   font-semibold">Village Elfaris</h1>
            <p className="text-slate-500 font-light">Bogor, Indonesia</p>
          </div>

          <div className="md:h-[450px] h-fit   container gap-7 flex flex-col md:flex-row ">
            <div className="flex-[1.3] cursor-pointer hover:scale-105 transition   flex flex-col max-h-full   ">
              <img
                src={bg2}
                alt=""
                onClick={() => setOpenGallery((prev) => !prev)}
                className="w-full h-full shadow-xl hover:shadow-2xl transition object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 h-full flex flex-col gap-y-4   ">
              <div className="md:h-[50%]    h-full cursor-pointer hover:scale-105 transition  w-full    ">
                <img
                  src={bg3}
                  alt=""
                  onClick={() => setOpenGallery((prev) => !prev)}
                  className="w-full h-full shadow-xl hover:shadow-2xl transition md:translate-x-4 md:translate-y-4   object-cover rounded-xl"
                />
              </div>

              {/* md:translate-x-4 md:translate-y-4 */}
              <div className="md:h-[50%] cursor-pointer hover:scale-105 transition h-full w-full   ">
                <img
                  src={bg4}
                  alt=""
                  onClick={() => setOpenGallery((prev) => !prev)}
                  className="w-full h-full shadow-xl hover:shadow-2xl transition   md:-translate-x-4 md:translate-y-7 object-cover rounded-xl"
                />
              </div>

              {/* md:-translate-x-4 md:translate-y-4 */}
            </div>
          </div>
          {/* mt-[500px] */}
          <div className="flex md:mt-28 flex-col gap-y-8 items-baseline  z-[10]  gap-x-12  md:flex-row">
            <div className="flex-[1.3] flex flex-col gap-y-4    ">
              <h1 className="font-semibold text-xl  font-[Poppins]">
                About the place
              </h1>
              <p className="text-slate-400 font-light">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                recusandae obcaecati at voluptates officiis facilis numquam.
                Maxime corrupti quae quibusdam atque fugit aspernatur.
                Voluptatibus odio quod dolorum rerum soluta rem!{" "}
              </p>
              <p className="text-slate-400 font-light">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                recusandae obcaecati at voluptates officiis facilis numquam.
                Maxime corrupti quae quibusdam atque fugit aspernatur.
                Voluptatibus odio quod dolorum rerum soluta rem!{" "}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-2 my-10 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {facility.map((item) => (
                  <div className="text-lg">
                    {item.icon}
                    <div className="">
                      {" "}
                      <span className="font-semibold">{item.amount}</span>{" "}
                      <span className="font-light"> {item.name} </span>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 font-[Poppins] w-full  z-[11] border rounded-xl p-10 grid grid-place-items-center gap-y-5 ">
              <h2 className="text-lg font-semibold ">Start Booking</h2>
              <div className="flex items-baseline  gap-x-2 ">
                <p className="font-semibold translate-y-[2px] text-lg ">
                  ${price}
                </p>
                <p className="">per night</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleStay("dec")}
                  className="btn rounded-md "
                >
                  -
                </button>
                <span>{night} night</span>
                <button
                  onClick={() => handleStay("inc")}
                  className="btn rounded-md "
                >
                  +
                </button>
              </div>
              <div className="grid gap-y-2 dropdown relative">
                <label className="" tabIndex="0">
                  {" "}
                  Pick a Date
                </label>
                <div className="flex p-2  border rounded-lg items-center">
                  <span className="mr-2 lg:text-center bg-primary rounded p-1">
                    <FaCalendarAlt fontSize={21} color="white" />
                  </span>
                  <input
                    type="text"
                    placeholder={solveDatePlaceHolder()}
                    className=" w-full focus:outline-none placeholder:text-center rounded-lg   "
                  />
                </div>
                {/* {form.dates !== void 0 && ( */}
                <DateRange
                  onChange={(item) => handleDate([item.selection])}
                  ranges={solveDate()}
                  tabIndex="0"
                  minDate={new Date()}
                  className={`absolute dropdown-content z-[11] top-10 ${
                    !showDates && "invisible"
                  } bg-red-500`}
                />
                {/* // )} */}
              </div>
              <p>
                You will pay{" "}
                <span className="font-bold"> ${price * night} USD </span> for{" "}
                {night} night{" "}
              </p>
              <button className="btn">Continue to book</button>
            </div>
          </div>
          <div className=" grid gap-y-6 my-14">
            <h2 className="font-semibold text-xl">Recommended for You</h2>
            <div className="container mx-auto    p-5 overflow-x-hidden ">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
