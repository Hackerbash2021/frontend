import {signOut} from '../../services/auth'
import $ from "jquery";
import "./Navbar.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: 0,
      notifications: [
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
        {
          name: "🐣 Approaching EDA Lab Assessment",

          in_days: 10,
        },
      ],
    };
  }
  componentDidMount() {}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // send code and add the new entry in student org class table
    // get the class id in return
    let id = 1;
    //  redirect to channel
    window.location.href = `/channel/${this.props.match.params.id}/exam/${id}`;
  };
  render() {
    return (
      <nav class="navbar navbar-expand-lg shadow- bg- navbar-light">
        <div className="navbar-brand">
          <h2
            className="p-0 m-0 font-weight-bold"
            data-toggle="tooltip"
            data-placement="top"
            title="Made with ❤ by booleanPundits"
          >
            Hackerbash
          </h2>
        </div>
        <div className="mx-auto d-lg-block d-none font-weight-bold w-50 text-center">
          <b>whoami? 👉</b> <u>nishavak.n@somaiya.edu</u>
        </div>
        <div class="notifications-button-container">
          <div
            style={{
              position: "fixed",
              bottom: "1em",
              left: "1em",
              zIndex: "1039",
            }}
            role="button"
            className="dropup"
            data-toggle="dropdown"
          >
            <div
              id="notifications-button"
              className="bg-dark d-flex justify-content-center align-items-center p-1 shadow-lg rounded-circle"
              style={{
                width: "2.8em",
                height: "2.8em",
                borderRadius: "1.4em",
              }}
            >
              <div
                class="fa fa-bell fa- text-white"
                data-toggle="tooltip"
                data-placement="top"
                title="Notifications"
                id="notifications-button-bell"
              ></div>
            </div>
            <div
              id="notifications-button-dropdown-menu"
              className=" dropdown-menu my-2 border-0 dropdown-menu"
            >
              <PerfectScrollbar
                className="d-flex flex-column"
                style={{ height: "54vh" }}
              >
                {this.state.notifications.map((notif) => {
                  return (
                    <div className="dropdown-item d-flex">
                      <div className="d-flex flex-column">
                        <div className="">
                          <b className="">{notif.name}</b>

                          <div className="text-muted">
                            <small className="">In {notif.in_days} days</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </PerfectScrollbar>
              <div
                className="pb-2 dropdown-item bg-light d-flex justify-content-center"
                onClick={() => {
                  // remove all notifs
                }}
              >
                Mark all as read
              </div>
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto font-weight-bold">
            {/* <div
              className="nav-item pl-2 d-flex justify-content-center align-items-center"
              role="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Toggle dark mode (Experimental)"
              onClick={() => {
                this.setState({ darkMode: !this.state.darkMode }, () => {
                  $("*").css(
                    "filter",
                    `invert(${this.state.darkMode ? 1 : 0})`
                  );
                });
              }}
            >
              <div
                className="p-0 m-0 d-flex justify-content-center align-items-center shadow"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  width: "2em",
                  height: "2em",
                  borderRadius: "1em",
                  zIndex: "1039",
                }}
              >
                <i
                  style={{ fontSize: "1.4em" }}
                  class="fa fa-sun-o"
                  aria-hidden="true"
                ></i>
              </div>
            </div> */}
            <li class="nav-item pl-2">
              <Link
                className="nav-link text-altblue"
                to="/"
                data-toggle="tooltip"
                data-placement="top"
                title="Go to dashboard"
              >
                🏠 Dashboard
              </Link>
            </li>
            <li class="nav-item pl-2">
              <Link
                className="nav-link text-altblue"
                to="/search"
                data-toggle="tooltip"
                data-placement="top"
                title="Find public organizations"
              >
                🔎 Search
              </Link>
            </li>
            <li class="nav-item pl-2 d-none">
              <Link
                className="nav-link text-altblue"
                to="/my-exams"
                data-toggle="tooltip"
                data-placement="top"
                title="Your subsribed exams brought together"
              >
                📃 Subscriptions
              </Link>
            </li>

            {/* bell */}

            {/* <li className="nav-item pl-2">
              <Link to="/profile" className="nav-link text-altblue">
                Profile
              </Link>
            </li> */}
            <li class="nav-item pl-2" onclick={() => signOut()}>
              <span className="nav-link text-danger" role="button">
                🔐 Sign out
              </span>
            </li>
          </ul>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "1em",
            right: "1em",
            width: "2.8em",
            height: "2.8em",
            borderRadius: "1.4em",
            zIndex: "1039",
          }}
          id="join-room-button"
          data-toggle="modal"
          data-target="#addOrganizationButton"
          role="button"
          className="shadow-lg bg-dark d-flex justify-content-center align-items-center"
        >
          <div
            style={{ fontSize: "1.3em" }}
            className="fa fa-plus  text-white p-0 m-0"
            data-toggle="tooltip"
            data-placement="top"
            title="Join Room"
          ></div>
        </div>

        <div
          class="modal fade"
          id="addOrganizationButton"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content border-0" style={{ borderRadius: "2em" }}>
              <div class="modal-header d-flex justify-content-center align-items-center border-0">
                <h2
                  class="modal-title font-weight-bold"
                  id="exampleModalLongTitle"
                >
                  Got a secret code? 😄
                </h2>
              </div>
              <form method="post" onSubmit={this.handleSubmit}>
                <div class="modal-body border-0">
                  <input
                    id="code"
                    type="text"
                    name="code"
                    className="form-control"
                    placeholder="Put it here"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                </div>
                <div class="modal-footer border-0 d-flext justify-content-center align-items-center">
                  <button type="submit" class="btn btn-primary shadow">
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
