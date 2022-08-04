import React from "react";
const Card = ({ cardClass, image }) => {
  return (
    <div
      className={`card transition-opacity cursor-pointer  ${cardClass} bg-base-100 shadow-xl   rounded-xl image-full `}
    >
      <figure>
        <img src={image} alt="place" className="h-full object-cover" />
      </figure>
      <div className="flex justify-end flex-col text-white absolute z-[999] bottom-4 left-4 overlay-card ">
        <h2 className=" font-semibold">Hawai</h2>
        <p className="font-extralight">1264 Stay</p>
      </div>
    </div>
  );
};

export default Card;

// <div
//   className={` ${cardClass}  rounded-xl shadow-md  md:h-full md:w-full object-cover bg-cover  flex flex-col justify-end relative overflow-hidden  `}
// >
//   <div className="absolute z-[0] top-0 bottom-0 right-0 left-0">
//     <img
//       src={image}
//       className=" object-fill "
//       alt=""
//     />
//   </div>

//   <div className="z-[1] text-white">
//     <h1>Hello World</h1>
//     <p>112 Stays</p>
//   </div>
// </div>
