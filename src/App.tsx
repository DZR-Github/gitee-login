import React from "react";
import { LeftCard } from "./components/LeftCard";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { SignUp } from "./components/SignUp";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <NavLink to=""></NavLink>
      
      <div className="box">
        <LeftCard />

        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        {/* </BrowserRouter> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
