import { Component } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
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
      <nav class="navbar navbar-expand-lg shadow- bg-white navbar-light">
        <div className="navbar-brand">
          <h2 className="p-0 m-0 font-weight-bold">Hackerbash</h2>
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
            <li class="nav-item pl-2 active">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li class="nav-item pl-2">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            <li class="nav-item pl-2">
              <Link className="nav-link" to="/my-exams">
                Subscriptions
              </Link>
            </li>

            {/* bell */}
            <li class="">
              <div
                style={{
                  position: "fixed",
                  bottom: "1em",
                  left: "1em",
                  zIndex: "1039",
                  width: "2.8em",
                  height: "2.8em",
                  borderRadius: "1.4em",
                }}
                role="button"
                className="dropup p-1 shadow-lg rounded-circle bg-dark d-flex justify-content-center align-items-center"
                data-toggle="dropdown"
              >
                <div class="fa fa-bell fa- text-white"></div>
                <div
                  className="dropdown-menu my-2 border-0 dropdown-menu"
                  style={{
                    height: "60vh",
                    width: "35vw",
                    borderRadius: ".446em",
                    overflow: "hidden",
                  }}
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
                                <small className="">
                                  In {notif.in_days} days
                                </small>
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
            </li>
            {/* <li className="nav-item pl-2">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li> */}
            <li class="nav-item pl-2">
              <span className="nav-link text-danger" role="button">
                Sign out
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
          data-toggle="modal"
          data-target="#addOrganizationButton"
          role="button"
          className="shadow-lg bg-dark d-flex justify-content-center align-items-center"
        >
          <div
            style={{ fontSize: "1.3em" }}
            className="fa fa-plus  text-white p-0 m-0"
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
            <div class="modal-content border-0">
              <div class="modal-header border-0">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Enter the code
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">⛔</span>
                </button>
              </div>
              <form method="post" onSubmit={this.handleSubmit}>
                <div class="modal-body border-0">
                  <input
                    id="code"
                    type="text"
                    name="code"
                    className="form-control"
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
