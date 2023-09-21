import React from "react";
import { LoginForm } from "./LoginForm";
import { OtherWays } from "./OtherWays";
import { NavLink } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <div className="insideBox insideRight">
      <div className="insideRightMiddle">
        <div className="login_header">
          <p
            className="login-title"
          >
            登陆
          </p>
          <p style={{ display: "inline-block", lineHeight: "4.5rem",color:"#40485b" }}>
            没有账号？
            <NavLink style={{textDecoration:"none"}} to="/signup">
            <a className="link" href="/">
            点此注册
            </a>
            </NavLink>
          </p>
        </div>
        <div className="login_middle">
          <LoginForm />
        </div>
        <OtherWays />
      </div>
    </div>
  );
};
