import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [
        {
          name: "name",
          description: "This is an exam",
          in_days: 10,
        },
      ],
    };
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                HackerBash
              </Link>
            </li>
            <li class="nav-item active">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/my-exams">
                My Exams
              </Link>
            </li>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-bell"></i>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {this.state.notifications.map((notif) => {
                  return (
                    <li>
                      <div className="d-flex row">
                        <div className="d-flex flex-col col-9">
                          <p>{notif.name}</p>
                          <p>{notif.description}</p>
                          <p>{notif.in_days}</p>
                        </div>
                        <div
                          className="col-3"
                          onClick={() => {
                            // remove notif
                          }}
                        >
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
