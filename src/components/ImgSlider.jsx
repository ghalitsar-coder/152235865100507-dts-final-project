// import React, { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { DateRange } from "react-date-range";
// import imagesHeader from "../assets";
// import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// import { FaCalendarAlt } from "react-icons/fa";
// import { format } from "date-fns";

// const HeaderSearch = () => {
//   const [showDates, setShowDates] = useState(false);
//   const [options, setOptions] = useState({ adult: 1, children: 1, room: 1 });
//   const [dates, setDates] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const handleOptions = (name, type) => {
//     console.log(name);
//     setOptions((prev) => ({
//       ...prev,
//       [name]:
//         type === "inc" ? prev[name] + 1 : prev[name] === 0 ? 0 : prev[name] - 1,
//     }));
//   };

//   return (
//     <form className="hidden md:flex justify-between absolute items-center bottom-3 ">
//       <div className="form-control cursor-pointer  w-full">
//         <input
//           type="text"
//           className="input bg-transparent  placeholder:text-base-200 text-base-200  focus:outline-none   rounded focus:bg-transparent pl-1 font-[Poppins]  "
//           placeholder="Where are you going"
//         />
//       </div>
//       <div className="form-control cursor-pointer  w-full dropdown relative">
//         <label
//           className="text-sm flex items-center cursor-pointer "
//           tabIndex="0"
//           // onClick={() => setShowDates((prev) => !prev)}
//         >
//           <span className="mr-2">
//             <FaCalendarAlt />
//           </span>
//           {format(dates[0].startDate, "MM/dd/yyyy")} to{" "}
//           {format(dates[0].endDate, "MM/dd/yyyy")}{" "}
//         </label>

//         <DateRange
//           editableDateInputs={true}
//           onChange={(item) => setDates([item.selection])}
//           moveRangeOnFirstSelection={false}
//           ranges={dates}
//           tabIndex="0"
//           className={`absolute dropdown-content z-[100] top-10 ${
//             !showDates && "invisible"
//           } bg-red-500`}
//         />
//       </div>
//       <div className="form-control cursor-pointer  dropdown w-full  ">
//         <span tabIndex="0">
//           {options.adult} Adults {options.children} children {options.room} Room{" "}
//         </span>
//         <ul
//           tabIndex="0"
//           className="dropdown-content grid rounded gap-y-5 bg-primary w-56 translate-y-6 h-max p-3"
//         >
//           <ListPerson
//             type="adult"
//             value={options.adult}
//             handleFunction={handleOptions}
//           />
//           <ListPerson
//             type="children"
//             value={options.children}
//             handleFunction={handleOptions}
//           />
//           <ListPerson
//             type="room"
//             value={options.room}
//             handleFunction={handleOptions}
//           />
//         </ul>
//       </div>
//       <div className="form-control cursor-pointer w-full md:w-auto">
//         <button className="btn  rounded-lg">Search</button>
//       </div>
//     </form>
//   );
// };

// const ListPerson = ({ type, value = 0, handleFunction }) => (
//   <li className="flex items-center justify-between">
//     <p className="font-[Poppins] ">{type}</p>
//     <div className="flex items-center gap-x-2">
//       <span
//         onClick={() => handleFunction(type, "dec")}
//         className="rounded-lg grid place-items-center cursor-pointer bg-secondary text-lg font-semibold  shadow-md w-10 h-10"
//       >
//         -
//       </span>
//       <span className="font-semibold">{value}</span>
//       <span
//         onClick={() => handleFunction(type, "inc")}
//         className="rounded-lg grid place-items-center cursor-pointer bg-accent text-lg font-semibold  shadow-md w-10 h-10"
//       >
//         +
//       </span>
//     </div>
//   </li>
// );

// const SliderContent = ({ image }) => (
//   <div className="rounded-xl relative h-full w-full grid place-items-center focus:outline-none    ">
//     <img
//       src={image}
//       alt="banner"
//       className="w-[100%]  h-[100%]   object-cover  "
//     />
//     <div className="absolute top-[13%] grid place-content-center p-5 gap-y-4 font-[Poppins] text-center text-4xl  text-white ">
//       <h1 className="font-light">
//         The Greatest <br /> Outdoors{" "}
//       </h1>
//       <p className="font-extralight text-sm  ">Wishlist curated by Evel</p>
//       <button className="btn btn-outline rounded-xl  ">Join Us</button>
//     </div>
//     {/* <HeaderSearch /> */}
//   </div>
// );

// const ImgSlider = ({ children }) => {
//   // <HiOutlineChevronRight />
//   const PrevArrow = ({ onClick, style }) => (
//     <HiOutlineChevronLeft
//       onClick={onClick}
//       className="absolute text-2xl top-[50%] left-0 z-[2] w-7 h-7 text-white bg-white/25 backdrop-blur-md p-1 rounded-full  "
//     />
//   );
//   const NextArrow = ({ onClick, style }) => (
//     <HiOutlineChevronRight
//       onClick={onClick}
//       className="absolute text-2xl top-[50%] right-0 w-7 h-7 p-1 text-white bg-white/25 backdrop-blur-md rounded-full  "
//     />
//   );
//   // <HiOutlineChevronLeft />
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     adaptiveHeight: false,
//     // responsive: responsive,
//   };
//   return (
//     <div className="w-[90%] lg:container mx-auto  ">
//       <Slider
//         {...settings}
//         className="[&>.slick-list]:overflow-visible cursor-pointer [&>button]:z-[1] [&>.slick-list>.slick-track]:flex [&>.slick-list>.slick-track]:gap-x-5  max-h-[420px] "
//       >
//         {imagesHeader.map((item, idx) => (
//           <SliderContent image={item} key={idx} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImgSlider;
