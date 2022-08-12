import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { authLogout } from "../redux/userRedux";

const Navbar = () => {
  const { authData: user } = useSelector(
    (state) => state.persistedReducer.user
  );
  console.log("USER ->", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(authLogout());
        navigate("/auth");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const location = useLocation();

  return (
    <div className="bg-white/25 py-1 backdrop-blur-md fixed left-0 right-0 z-[99999] ">
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
          {user === null ? (
            <ul className="flex items-center gap-x-3">
              <li>
                {" "}
                <Link to="/auth">Sign In</Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/auth"
                  className="bg-primary text-white rounded-md px-3 py-2 "
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            location.pathname !== "/auth" && (
              <button
                onClick={handleLogout}
                className="bg-primary text-white rounded-md px-3 py-2 "
              >
                Logout
              </button>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
