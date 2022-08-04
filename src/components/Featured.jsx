import React from "react";
import Card from "./Card";
import { bg2, bg4, h1, h2 } from "../assets";

const Featured = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="desc mb-5">
        <h1 className="text-6xl font-bold ">
          Search a{" "}
          <span className="font-[Poppins] bg-gradient-to-r  from-cyan-500 to-blue-500 text-transparent bg-clip-text ">
            {" "}
            best Place{" "}
          </span>
        </h1>
        <p className="text-slate-700 font-extralight ">
          Popular destination open to visitors{" "}
        </p>
      </div>

      <div className=" md:grid-rows-4 md:grid-flow-col gap-5 grid grid-rows-4 h-[700px] md:h-[450px]  ">
        <Card cardClass="md:row-start-1 md:row-end-5" image={h1} />
        <Card cardClass="md:row-start-1 md:row-end-3" image={bg2} />
        <Card cardClass="md:row-start-3 md:row-end-5" image={bg4} />
        <Card cardClass="md:row-start-1 md:row-end-5" image={h2} />
      </div>
    </div>
  );
};

export default Featured;
