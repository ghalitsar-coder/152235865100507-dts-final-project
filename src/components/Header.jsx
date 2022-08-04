import React, { useCallback, useState } from "react";

import { DateRange } from "react-date-range";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setOptionsTravel } from "../redux/bookingSlice";
import ListPerson from "./ListPerson";

const HeaderSearch = () => {
  const [showDates, setShowDates] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 1, room: 1 });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const { form, optionsTravel } = useSelector((state) => state.booking);
  const navigate = useNavigate();

  const handleOptions = async (name, type, value) => {
    dispatch(setOptionsTravel({ name, type }));
  };

  const dispatch = useDispatch();
  const handleSearch = () => {
    navigate("/places");
  };

  const handleDate = (item) => {
    setDates(item);
    console.log("DATES ->", item[0].startDate);
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
  const fillForm = useCallback(
    (key, value) => {
      dispatch(setForm({ [key]: value }));
    },
    [dispatch]
  );

  return (
    <form
      onSubmit={handleSearch}
      className="flex lg:flex-row flex-col gap-y-7 lg:gap-y-0 justify-between  lg:items-center lg:w-[80%] w-[95%] rounded-xl  mx-auto bg-white/25 backdrop-blur-md p-1 justify-self-end "
    >
      <div className="form-control cursor-pointer  w-full">
        <input
          type="text"
          name="destination"
          value={form.destination ?? ""}
          onChange={(e) => fillForm("destination", e.target.value)}
          className="p-1 bg-transparent placeholder:text-base-200 text-base-200  focus:outline-none   rounded focus:bg-transparent pl-1 font-[Poppins]  "
          placeholder="Explore Now"
        />
      </div>
      <div className="form-control cursor-pointer  w-full dropdown relative">
        <label
          className="text-sm lg:mx-auto flex lg:items-center text-center cursor-pointer "
          tabIndex="0"
          // onClick={() => setShowDates((prev) => !prev)}
        >
          <span className="mr-2 lg:text-center">
            <FaCalendarAlt />
          </span>
          {/* {format(dates[0].startDate, "MM/dd/yyyy")} to{" "}
//           {format(dates[0].endDate, "MMM dd, yyyy")}{" "} */}
          {format(dates[0].startDate, "MMM dd, yyyy")} |{" "}
          {format(dates[0].endDate, "MMM dd, yyyy")}
        </label>

        <DateRange
          editableDateInputs={true}
          onChange={(item) => handleDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          tabIndex="0"
          minDate={new Date()}
          className={`absolute dropdown-content z-[100] top-10 ${
            !showDates && "invisible"
          } bg-red-500`}
        />
      </div>
      <div className="form-control cursor-pointer  dropdown w-full  ">
        <span tabIndex="0" className="text-start lg:mx-auto">
          {optionsTravel?.adult} Adults {optionsTravel?.children} children{" "}
          {optionsTravel?.room} Room{" "}
        </span>
        <ul
          tabIndex="0"
          className="dropdown-content grid rounded gap-y-5 bg-primary w-56 translate-y-10 h-max p-3"
        >
          <ListPerson
            type="adult"
            value={optionsTravel?.adult || 0}
            handleFunction={handleOptions}
          />
          <ListPerson
            type="children"
            value={optionsTravel?.children || 0}
            handleFunction={handleOptions}
          />
          <ListPerson
            type="room"
            value={optionsTravel?.room || 0}
            handleFunction={handleOptions}
          />
        </ul>
      </div>
      <div className="form-control cursor-pointer w-full md:w-auto">
        <button type="submit" className="btn  rounded-lg">
          <BiSearch fontSize={21} />
        </button>
      </div>
    </form>
  );
};

const Header = ({ searchBar, bg }) => {
  return (
    <div
      className={`md:w-[90%]  mb-14 rounded-xl w-full relative z-[9999]  mx-auto  lg:h-[50vh] h-[70vh] px-4 md:px-0 ${
        searchBar && "mt-14"
      }  `}
    >
      <div
        className={`banner flex flex-col justify-around   text-white  place-content-center text-center  rounded-xl h-full `}
      >
        <div className="    drop-shadow-xl    grid gap-y-8   shadow-white/25 rounded-xl">
          <h1 className="md:text-7xl text-4xl font-light  ">
            Plan your <span className="font-semibold text-primary "> Trip</span>
            <br />
            with <span className="font-semibold text-primary ">HayuIn</span>
          </h1>
          <p className="text-sm font-light  ">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspirations from us
          </p>
          <button className="btn w-max mx-auto    rounded-lg shadow-md">
            <Link to="/places">Travel Now</Link>
          </button>
        </div>
        {searchBar && <HeaderSearch bg={bg} />}
      </div>
    </div>
  );
};

export default Header;
