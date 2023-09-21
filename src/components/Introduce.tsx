import React from "react";
import { data } from "../constants";

interface dataType {
  name: String;
  title: String;
  introduce: String;
}

export const Introduce = () => {
  let index = 7;
  const Data: dataType = data[index];
  return (
    <div style={{ width: "100%" }}>
      <div style={{ color: "#97a0ad" }}>
        <p style={{ display: "inline-block" }}>{Data.name} </p>
        <p style={{ display: "inline-block", marginLeft: "20px" }}>
          {" "}
          {Data.title}
        </p>
      </div>
      <p>{Data.introduce}</p>
    </div>
  );
};
