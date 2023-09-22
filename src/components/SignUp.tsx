import React from "react";
import { NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { OtherWays } from "./OtherWays";

export const SignUp = () => {
  return (
    <div className="insideBox insideRight">
      <div className="signup-container">
        <div className="signup-header">
          <p className="signup-title">注册</p>
          <p className="has-account">
            已有账号？
            <NavLink style={{ textDecoration: "none" }} to="/">
              <a href="" className="link">
                点此登陆
              </a>
            </NavLink>
          </p>
        </div>
        <div className="signup-body">
          <SignUpForm />
        </div>
        <OtherWays />
      </div>
    </div>
  );
};
