import React from "react";
import RD from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";

RD.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById("app")
);
