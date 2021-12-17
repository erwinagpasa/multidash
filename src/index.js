import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

$(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#menu-shrink").toggleClass("shrink");
  });
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
