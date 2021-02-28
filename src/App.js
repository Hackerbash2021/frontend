import React, { Component } from "react";
import Loading from "./components/shared/Loading";
import { adminRoutes, studentRoutes, authRoutes } from "./router.js";
import api from "./axios";
import { NotificationManager } from "react-notifications";
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    this.__userType = undefined;
    this.__authenticated = false;
  }
  componentDidUpdate(prevProps, prevState) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    api
      .get("whoAmI/")
      .then(({ data }) => {
        this.__userType = data.userType;
        this.__authenticated = true;
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) return <Loading />;
    if (!this.__authenticated) return authRoutes;
    else {
      if (this.__userType === "student") return studentRoutes;
      else if (this.__userType === "orgadmin") return adminRoutes;
    }
  }
}
