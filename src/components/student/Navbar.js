import { Component } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

          in_days: 10,
        },
        {
          name: "name",

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
      <nav class="navbar navbar-expand-lg shadow-sm">
        <div className="navbar-brand">
          <h1>Examz</h1>
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

        <div
          style={{
            position: "fixed",
            bottom: "1em",
            right: "1em",
            width: "3.2em",
            height: "3.2em",
          }}
          data-toggle="modal"
          data-target="#addOrganizationButton"
          role="button"
          className="border shadow-lg rounded-circle p-0 m-0 d-flex justify-content-center align-items-center bg-dark"
        >
          <span
            style={{ fontSize: "1.3em" }}
            className="fa fa-plus p-0 m-0 text-white"
          ></span>
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
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Enter the code
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form method="post" onSubmit={this.handleSubmit}>
                <div class="modal-body">
                  <input
                    id="code"
                    type="text"
                    name="code"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/my-exams">
                My Exams
              </Link>
            </li>

            <li class="nav-item">
              <div
                role="button"
                className="dropdown p-1 border shadow-sm rounded-circle"
                data-toggle="dropdown"
              >
                <div class="nav-link fa fa-bell fa- text-primary"></div>
                <div
                  className="dropdown-menu my-2 border-0 dropdown-menu-right"
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
                              <div>{notif.name}</div>

                              <div className="text-muted">
                                <small>In {notif.in_days} days</small>
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
            <li class="nav-item">
              <span className="nav-link text-danger" role="button">
                Sign out
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
