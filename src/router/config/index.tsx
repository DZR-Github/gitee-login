import { Login } from "@/components/Login";
import { SignUp } from "@/components/SignUp";
import { useRoutes } from "react-router-dom";
import Main from "@/main";
import { NotFound } from "@/404";
import React from "react";

export const RouterConfig = () => {
  return useRoutes([
    {
      path: "",
      element: <Main />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
