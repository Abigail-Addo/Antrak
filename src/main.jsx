import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Router from "./Router/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);
