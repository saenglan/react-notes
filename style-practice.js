//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();

let state = {};
const morning = {
  color: "red"
};
const afternoon = {
  color: "green"
};
const night = {
  color: "blue"
};

console.log(currentTime.getHours());

if (currentTime.getHours() < 12) {
  state = morning;
} else if (currentTime.getHours() > 12 && currentTime.getHours() <= 18) {
  state = afternoon;
} else {
  state = night;
}

ReactDOM.render(
  <div>
    <h1 style={state}>Good Morning</h1>
  </div>,
  document.getElementById("root")
);
