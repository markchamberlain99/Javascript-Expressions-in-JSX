import React from "react";
import ReactDOM from "react-dom";

const fname = "Johnny Boy";
const lname = "Doe";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>My lucky number is: {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
