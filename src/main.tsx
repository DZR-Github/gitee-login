import React from "react";
import { LeftCard } from "./components/LeftCard";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { SignUp } from "./components/SignUp";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import { ViewRouter } from "./router/ViewRouter";

const Main = () => {
  return (
    <div className="main">
      <div className="box">
        <LeftCard />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
