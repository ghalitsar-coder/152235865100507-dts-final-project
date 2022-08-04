import React from "react";

const ListPerson = ({ type, value = 0, handleFunction }) => (
  <li className="flex items-center justify-between">
    <p className="font-[Poppins] ">{type}</p>
    <div className="flex items-center gap-x-2">
      <span
        onClick={() => handleFunction(type, "dec", value)}
        className="rounded-lg option grid place-items-center cursor-pointer bg-secondary text-lg font-semibold  shadow-md w-10 h-10"
      >
        -
      </span>
      <span className="font-semibold">{value}</span>
      <span
        onClick={() => handleFunction(type, "inc", value)}
        className="rounded-lg option grid place-items-center cursor-pointer bg-accent text-lg font-semibold  shadow-md w-10 h-10"
      >
        +
      </span>
    </div>
  </li>
);

export default ListPerson;
