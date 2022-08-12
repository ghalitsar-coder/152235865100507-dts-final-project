import React from "react";
import { bg6, bg1 } from "../assets";
import { Link } from "react-router-dom";
import { MdWork, MdComputer, MdOutlineSettingsEthernet } from "react-icons/md";
import { VscSymbolArray } from "react-icons/vsc";
import { IoIosBrush } from "react-icons/io";
import { BsCreditCard2Front } from "react-icons/bs";

const Category = ({ item }) => {
  return (
    <Link to={`/places`}>
      <div className="shadow-lg rounded-lg p-5 ">
        <div className={`h-10 w-10 ${item.color} shadow-lg rounded-lg flex `}>
          <p className="text-lg font-semibold m-auto ">{item.icon}</p>
        </div>
        <h2 className="text-lg font-semibold my-2">{item.name}</h2>
        <p className="font-sm text-slate-400">{item.desc}</p>
      </div>
    </Link>
  );
};

const Categories = () => {
  const cat = [
    {
      name: "Hotels",
      desc: "Diam suspendisse sagittis dapibus nunc facilisis augue mollis congue",
      icon: <MdWork />,
      color: "bg-red-400",
    },
    {
      name: "Mountain",
      desc: "Libero bibendum tincidunt diam odio a mattis proin",
      icon: <MdComputer />,
      color: "bg-pink-400",
    },
    {
      name: "Beach",
      desc: "Sed posuere volutpat luctus accumsan justo scelerisque consectetur fermentum",
      icon: <MdOutlineSettingsEthernet />,
      color: "bg-green-400",
    },
    {
      name: "Lake",
      desc: "Ultricies sit lorem sagittis eros viverra ex suscipit",
      icon: <VscSymbolArray />,
      color: "bg-sky-400",
    },
    {
      name: "Travel",
      desc: "Scelerisque adipiscing sodales nostra lobortis nullam cubilia mus montes",
      icon: <IoIosBrush />,
      color: "bg-purple-400",
    },
    {
      name: "Stay",
      desc: "Risus mus penatibus ridiculus morbi curae nostra sed mi",
      icon: <BsCreditCard2Front />,
      color: "bg-orange-400",
    },
  ];
  return (
    <div className="my-56">
      <div className="container mx-auto  flex flex-col md:flex-row  md:gap-20 p-4 ">
        <div className="flex-[.50]  relative">
          <img
            src={bg6}
            alt="Category"
            className="object-cover w-full h-[450px] md:-translate-y-40 rounded-lg shadow-md overflow-hidden "
          />
          <img
            src={bg1}
            alt="Category"
            className="hidden md:block object-cover w-full h-[455px] lg:h-[355px]  md:-translate-y-40 rounded-lg shadow-md overflow-hidden absolute -left-20 sm:bottom-28 lg:-bottom-24 "
          />
        </div>
        <div className="flex-1  ">
          <h1 className="text-[45px] font-semibold font-[Poppins] my-9 md:my-5 ">
            Explore <br /> by category
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.map((item, idx) => (
              <Category key={idx + "item"} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
 