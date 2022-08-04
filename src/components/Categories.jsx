import React from "react";
import { bg6, bg1 } from "../assets";
import { Link } from "react-router-dom";
import { MdWork, MdComputer, MdOutlineSettingsEthernet } from "react-icons/md";
import { VscSymbolArray } from "react-icons/vsc";
import { IoIosBrush } from "react-icons/io";
import { BsCreditCard2Front } from "react-icons/bs";

const Category = ({item}) => {
  return (
    <Link to={`/all-jobs/${item}`}>
      <div className="shadow-lg rounded-lg p-5 ">
        <div className="h-10 w-10 bg-cyan-300 shadow-lg rounded-lg flex ">
          <MdWork className="text-cyan-500 m-auto " fontSize={"small"} />
        </div>
        <h2 className="text-lg font-semibold my-2">
          Bussiness <br /> development
        </h2>
        <p className="font-sm text-slate-400">
          Lorem ipsum dolor sit amet consectetur...
        </p>
      </div>
    </Link>
  );
};

const Categories = () => {
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
            {["a", "b", "c", 1, 1,2].map((item,idx) => (
              <Category key={idx +"item"} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

{
  /* <Link to={"/all-jobs/software"}>
<div className="shadow-lg rounded-lg p-5 ">
  <div className="h-10 w-10 bg-yellow-200 shadow-lg rounded-lg flex ">
    <MdComputer
      className="text-orange-400 m-auto "
      fontSize={"small"}
    />
  </div>
  <h2 className="text-lg font-semibold my-2">
    Software <br /> Engineer
  </h2>
  <p className="font-sm text-slate-400">
    Lorem ipsum dolor sit amet consectetur...
  </p>
</div>
</Link>

<Link to={"/all-jobs/data-analyst"}>
<div className="shadow-lg rounded-lg p-5 ">
  <div className="h-10 w-10 bg-purple-300 shadow-lg rounded-lg flex ">
    <VscSymbolArray
      className="text-purple-500 m-auto "
      fontSize={"small"}
    />
  </div>
  <h2 className="text-lg font-semibold my-2">
    Data <br /> Analyst
  </h2>
  <p className="font-sm text-slate-400">
    Lorem ipsum dolor sit amet consectetur...
  </p>
</div>
</Link>

<Link to={"/all-jobs/ui-ux"}>
<div className="shadow-lg rounded-lg p-5 ">
  <div className="h-10 w-10 bg-green-300 shadow-lg rounded-lg flex ">
    <IoIosBrush
      className="text-green-500 m-auto "
      fontSize={"small"}
    />
  </div>
  <h2 className="text-lg font-semibold my-2">
    Designer <br /> UI/UX
  </h2>
  <p className="font-sm text-slate-400">
    Lorem ipsum dolor sit amet consectetur...
  </p>
</div>
</Link>

<Link to={"/all-jobs/frontend"}>
<div className="shadow-lg rounded-lg p-5 ">
  <div className="h-10 w-10 bg-red-300 shadow-lg rounded-lg flex ">
    <BsCreditCard2Front
      className="text-red-500 m-auto "
      fontSize={"small"}
    />
  </div>
  <h2 className="text-lg font-semibold my-2">
    Frontend <br /> Dev
  </h2>
  <p className="font-sm text-slate-400">
    Lorem ipsum dolor sit amet consectetur...
  </p>
</div>
</Link>

<Link to={"/all-jobs/frontend"}>
<div className="shadow-lg rounded-lg p-5 ">
  <div className="h-10 w-10 bg-sky-300 shadow-lg rounded-lg flex ">
    <MdOutlineSettingsEthernet
      className="text-sky-500 m-auto "
      fontSize={"small"}
    />
  </div>
  <h2 className="text-lg font-semibold my-2">
    Backend <br /> Dev
  </h2>
  <p className="font-sm text-slate-400">
    Lorem ipsum dolor sit amet consectetur...
  </p>
</div>
</Link> */
}
