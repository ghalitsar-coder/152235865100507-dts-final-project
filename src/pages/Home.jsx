import React from "react";
import { Categories, Featured, Header } from "../components";

const Home = () => {
  return (
    <div className="grid gap-y-32 pt-14 min-h-screen   ">
      <Header searchBar  />
      <Featured />
      <Categories />
    </div>
  );
};

export default Home;
