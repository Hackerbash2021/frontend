import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import voca from "voca";
import LoginSvg from "./Login.svg";
import { login, signOut } from "../../services/auth";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (voca.isEmpty(this.state.email) || voca.isEmpty(this.state.password)) {
      NotificationManager.error("Don't mess around 🥱");
    } else {
      NotificationManager.success("Welcome 🐱‍👤");
    }

    // let u = login(this.state.email, this.state.password);
    // NotificationManager.info("Verify account to proceed");
    // NotificationManager.error(e.message);
  };

  render() {
    return (
      <div>
        <div className="min-vh-100 d-flex">
          {/* Image */}
          <div className="d-flex align-items-center justify-content-center col-7">
            <img
              src={LoginSvg}
              alt="Login"
              className="w-100 img-responsive p-5"
            />
          </div>

          {/* Login Form */}
          <div className="d-flex flex-column w-100 justify-content-center col-5 p-5">
            <form method="post" onSubmit={this.handleSubmit} autoComplete="off">
              {/* Title */}
              <h1 className="text-center pb-4 animate__animated animate__tada animate__delay-2s">
                Hackerbash
              </h1>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  autoFocus
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  // placeholder="Enter your E-mail"
                />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  // placeholder="Enter your Password"
                />
              </div>

              {/* Action buttons */}
              <div className="form-group d-flex flex-row-reverse justify-content-between align-items-center">
                <div>
                  <button
                    disabled={
                      voca.isEmpty(this.state.email) ||
                      voca.isEmpty(this.state.password)
                    }
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-altblue"
                    data-target="auth-login-dropdown"
                    data-toggle="dropdown"
                  >
                    More
                  </button>
                  <div className="dropdown-menu my-2" id="auth-login-dropdown">
                    <Link to="/register" className="dropdown-item">
                      Register
                    </Link>
                    <Link to="/forgot" className="dropdown-item">
                      Forgot Password
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
