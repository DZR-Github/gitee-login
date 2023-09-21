import React from "react";
import notFoundImg from "./assets/imgs/404.png";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found-img" src={notFoundImg} alt="404" />
      <p style={{ fontWeight: "bolder" }}>你所访问的页面不存在!</p>
      <p>
        <NavLink style={{ textDecoration: "none" }} to="/">
          点击这里
        </NavLink>
        返回首页
      </p>
    </div>
  );
};
