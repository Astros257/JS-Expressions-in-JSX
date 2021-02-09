import React from "react";
import ReactDOM from "react-dom";

const name = "Jose";
const lName = "Alvarez";
const number = 21;

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {lName}!
    </h1>
    <p> My lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);
