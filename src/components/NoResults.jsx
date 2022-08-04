import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="no-result overflow-hidden min-h-screen grid place-items-center">
      <div className="rounded-md bg-white/25 backdrop-blur-sm shadow-md mt-40 p-14 text-center ">
        <h1 className="font-semibold text-8xl ">404 Not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
