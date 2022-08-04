import React from "react";
import { Header, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Detail, Home, List } from "./pages";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="places">
            <Route index element={<List />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
