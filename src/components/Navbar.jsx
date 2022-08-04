import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white/25 backdrop-blur-md fixed left-0 right-0 z-[99999] ">
      <nav className="w-[85%] mx-auto  flex items-center justify-between font-[Poppins] p-3 ">
        <div className="">
          <ul className="flex items-center gap-x-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center gap-x-3">
            <li>
              {" "}
              <Link to="/auth">Sign In</Link>
            </li>
            <li>
              {" "}
              <Link
                to="/auth"
                className="bg-primary text-white rounded-xl px-3 py-2 "
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
