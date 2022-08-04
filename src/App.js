import React from "react";
import { Footer, Header, Navbar, NoResults } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth, Detail, Home, List } from "./pages";
import { useSelector } from "react-redux";

const App = () => {
  const { authData: user } = useSelector(
    (state) => state.persistedReducer.user
  );
  return (
    <div>
      <Navbar />
      {user !== null ? (
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="auth" element={<Navigate to="/" />} />
            <Route path="places">
              <Route index element={<List />} />
              <Route path=":id" element={<Detail />} />
            </Route>
          </Route>
          <Route path="/*" element={<NoResults />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<NoResults />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
};

export default App;
