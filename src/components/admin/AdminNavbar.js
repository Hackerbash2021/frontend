import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminNavbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand">
            <h1 className="font-weight-bold">Hackerbash</h1>
          </div>
          <div
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#adminNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </div>

          <button class="btn">
            <span class="badge badge-success">Public</span>
          </button>

          <div className="w-50 mx-auto d-flex justify-content-center align-items-center">
            <p className="m-0 p-0">
              <b>Secret 👉</b> <span className="pr-2"></span>{" "}
              <span>ASFHI23</span>
            </p>
          </div>

          <div className="collapse navbar-collapse" id="adminNavbar">
            <div className="navbar-nav ml-auto">
              <div className="nav-item pl-2">
                <Link to="/" className="nav-link font-weight-bold">
                  Dashboard
                </Link>
              </div>
              <div className="nav-item pl-2">
                <Link to="/" className="nav-link font-weight-bold">
                  Manage
                </Link>
              </div>
              <div className="nav-item pl-2">
                <Link to="/" className="nav-link font-weight-bold text-danger">
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
