import React, { useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, ListPerson } from "../components";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { DateRange } from "react-date-range";
import { setForm, setOptionsTravel } from "../redux/bookingSlice";
import { a8, a7 } from "../assets";

const ResultItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="border rounded-lg font-[Poppins] shadow-md p-3 flex flex-col lg:flex-row  gap-4  items-stretch ">
      <div className="flex-1 shrink-0 ">
        <img
          src={a7}
          alt=""
          className="object-cover w-full h-full rounded-lg shadow-md"
        />
      </div>
      <div className="flex-[2]">
        <h1 className="text-xl font-semibold ">Jl. Senopati Dayeuh kolot</h1>
        <p className="font-light text-slate-500  ">500m from center</p>
        <p className="p-1 pl-2 bg-primary text-white  font-semibold text-sm mt-2 mb-2 w-max rounded-md ">
          Free Breakfast till 09:00
        </p>

        <div className="grid gap-y-3">
          <p className="font-bold">Hotel Senopati with large pool</p>
          <p className="text-slate-600">Lovely view and good weather</p>
          <p className="font-bold">Free cancellation</p>
          <p className="font-light text-slate-500">
            You can cancel later, so lock in this great price today
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between ">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold font-[Poppins]  ">Excellent</h1>
          <p className="p-1 bg-primary font-bold rounded-md text-white">8.9</p>
        </div>

        <div className="flex flex-col text-right justify-end">
          <h2 className="font-bold">$112</h2>
          <p className="text-slate-600 font-light">Includes taxes and fees</p>
          <button
            className="p-2 bg-primary text-white rounded-md"
            onClick={() => navigate(`/places/${item}`)}
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

const List = () => {
  const location = useLocation();
  const { form, optionsTravel } = useSelector((state) => state.booking);
  const [showDates, setShowDates] = useState(false);
  const arrDates = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
      return `${format(new Date(form?.dates?.startDate), "MMM dd")}
     - ${format(new Date(form?.dates?.endDate), "MMM dd")}`;
    }
    return `${format(new Date(), "MMM dd")}
 - ${format(new Date(), "MMM dd")}`;
  };

  const handleOptions = async (name, type, value) => {
    dispatch(setOptionsTravel({ name, type }));
  };

  const dispatch = useDispatch();
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
  return (
    <div className="grid gap-y-14">
      <div className="h-[95vh] w-full">
        <div className="bannerList   bg-gradient-to-r from-gray-900 to-transparent flex items-center   ">
          <div className="w-[80%] mx-auto">
            <h1 className="md:text-8xl text-7xl -translate-y-32 text-center md:text-left md:-translate-y-0 text-transparent bg-gradient-to-r from-slate-500 to-slate-100 bg-clip-text     font-bold ">
              Explore <br /> your place <br /> to stay{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen gap-x-3 flex flex-col md:flex-row container mx-auto">
        <div className=" flex-1  shadow-md md:sticky h-max top-[70px] p-2 rounded-xl  ">
          <h1 className="text-2xl font-semibold font-[Poppins] ">Search</h1>
          <form className="grid gap-y-4  ">
            <div className="grid gap-y-2 mt-5 ">
              <label className=""> Destination </label>
              <div className="flex border rounded-lg  items-center  p-2 ">
                <span className="mr-2 lg:text-center">
                  <MdLocationOn fontSize={25} />
                </span>
                <input
                  type="text"
                  placeholder={form?.destination ? form?.destination : "Tokyo "}
                  className="placeholder:capitalize  focus:outline-none rounded-lg w-full"
                />
              </div>
            </div>
            <div className="grid gap-y-2 dropdown relative">
              <label className="" tabIndex="0">
                {" "}
                CheckIn | Checkout{" "}
              </label>
              <div className="flex p-2  border rounded-lg items-center">
                <span className="mr-2 lg:text-center">
                  <FaCalendarAlt fontSize={21} />
                </span>
                <input
                  type="text"
                  placeholder={solveDatePlaceHolder()}
                  className=" w-full focus:outline-none  rounded-lg   "
                />
              </div>
              {form.dates !== void 0 && (
                <DateRange
                  onChange={(item) => handleDate([item.selection])}
                  ranges={solveDate()}
                  tabIndex="0"
                  minDate={new Date()}
                  className={`absolute dropdown-content z-[100] top-10 ${
                    !showDates && "invisible"
                  } bg-red-500`}
                />
              )}
            </div>
            <div className="grid gap-y-2">
              <ul className=" grid  border rounded-xl border-primary [&>li>div>span.option]:text-white gap-y-5 w-full h-max p-3">
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
            <div className="grid gap-y-2">
              <label className=""> Min Price $ </label>
              <div className="flex border rounded-lg  items-center  p-2 ">
                <span className="mr-2 lg:text-center">
                  <BiDollarCircle fontSize={25} />
                </span>
                <input
                  type="text"
                  placeholder={"Rp. 300.000"}
                  className="  focus:outline-none rounded-lg w-full"
                />
              </div>
            </div>
            <div className="grid gap-y-2">
              <label className=""> Max Price $ </label>
              <div className="flex border rounded-lg  items-center  p-2 ">
                <span className="mr-2 lg:text-center">
                  <BiDollarCircle fontSize={25} />
                </span>
                <input
                  type="text"
                  placeholder={"Rp. 2.100.000"}
                  className="  focus:outline-none rounded-lg w-full"
                />
              </div>
            </div>
            <button className="btn btn-outline rounded-lg">Search</button>
          </form>
        </div>
        <div className=" flex-[3] grid gap-y-9 ">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ResultItem key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
