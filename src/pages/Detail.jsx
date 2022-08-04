import React from "react";
import { bg4, bg2, bg3 } from "../assets";
const Detail = () => {
  return (
    <div className="container px-4 md:px-0 mx-auto pt-32 flex flex-col gap-y-14">
      <div className="grid gap-y-4 place-items-center ">
        <h1 className="text-3xl   font-semibold">Village Elfaris</h1>
        <p className="text-slate-500 font-light">Bogor, Indonesia</p>
      </div>

      <div className="h-[450px] bg-green-500 container gap-7 flex flex-col md:flex-row ">
        <div className="flex-[1.3] max-h-full bg-red-500 ">
          <img
            src={bg2}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 max-h-full lg:h-[50%] flex flex-col gap-5 bg-blue-500 ">
          <img
            src={bg3}
            alt=""
            className="w-full h-full md:translate-x-4 md:translate-y-4 object-cover rounded-xl"
          />
          <img
            src={bg4}
            alt=""
            className="w-full h-full md:-translate-x-4 md:translate-y-4 object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex   md:flex-row">
        <div className="flex-[1.3]  grid gap-y-4 ">
          <h1 className="font-semibold mb-5 font-[Poppins]">About the place</h1>
          <p className="text-slate-400 font-light">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            recusandae obcaecati at voluptates officiis facilis numquam. Maxime
            corrupti quae quibusdam atque fugit aspernatur. Voluptatibus odio
            quod dolorum rerum soluta rem!{" "}
          </p>
          <p className="text-slate-400 font-light">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            recusandae obcaecati at voluptates officiis facilis numquam. Maxime
            corrupti quae quibusdam atque fugit aspernatur. Voluptatibus odio
            quod dolorum rerum soluta rem!{" "}
          </p>
        </div>
        <div className="flex-1 "></div>
      </div>
    </div>
  );
};

export default Detail;
