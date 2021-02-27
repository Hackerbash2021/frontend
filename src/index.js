import React from "react";
import RD from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

RD.render(
  <BrowserRouter>
    <Route component={App}></Route>
    <NotificationContainer />
  </BrowserRouter>,
  document.getElementById("app")
);
