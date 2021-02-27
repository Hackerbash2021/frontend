import React, { Component } from "react";
import RegisterSvg from "./Register.svg";
import { Link } from "react-router-dom";
import $ from "jquery";
import { register } from "../../services/auth";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
    };
  }
  // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
  validatePassword = (password) =>
    password.match(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

  handleChange = (ev) => {
    ev.preventDefault();
    this.setState({ [ev.target.name]: ev.target.value }, () => {
      if (ev.target.name === "password") {
        if (this.validatePassword(ev.target.value)) {
          $("#password").addClass("is-valid");
          $("#password").removeClass("is-invalid");
          $("#password_error").fadeOut();
        } else {
          $("#password").removeClass("is-valid");
          $("#password").addClass("is-invalid");
          $("#password_error").fadeIn();
        }
      }
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.validatePassword(this.state.password)) {
      if (this.state.confirm_password === this.state.password) {
        $("#reason").fadeOut("fast");
        register(this.state.email, this.state.password)
          .then(({ user }) => {
            user
              .sendEmailVerification()
              .then(() => {
                this.setState({ code: "accountCreated" }, () => {
                  $("#reason").fadeIn("fast");
                });
              })
              .catch((err) => {
                this.setState({ code: "sendMailError" }, () => {
                  $("#reason").fadeIn("fast");
                });
              });
          })
          .catch(({ code }) => {
            this.setState({ code: code }, () => {
              $("#reason").fadeIn("fast");
            });
          });
      }
    } else {
    }
  };

  render() {
    return (
      <div className="min-vh-100 d-flex flex-row-">
        {/* Image */}
        <div className="d-flex align-items-center justify-content-center col-7">
          <img
            src={RegisterSvg}
            alt="Register"
            className="w-100 img-responsive p-3"
          />
        </div>

        {/* Form */}
        <div className="d-flex flex-column justify-content-center col-5 p-5">
          <form
            method="post"
            onSubmit={this.handleSubmit}
            autoComplete="off"
            className="w-100 mx-auto"
          >
            {/* Title */}
            <h1 className="text-center pb-4">Hackerbash</h1>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                type="email"
                name="email"
                id="email"
                className="form-control"
                // placeholder="Enter your E-mail"
              />
            </div>

            {/* Password */}
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
              <small
                id="password_error"
                className="text-danger form-text"
                style={{ display: "none" }}
              >
                Password should have:
                <ul>
                  <li>at least 1 lowercase character</li>
                  <li>at least 1 uppercase character</li>
                  <li>at least 1 numeric character</li>
                  <li>at least one special character</li>
                  <li>must be must be eight characters or longer.</li>
                </ul>
              </small>
            </div>

            {/* Confirm password */}
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                onChange={this.handleChange}
                disabled={this.state.password === "" ? true : false}
                type="password"
                name="confirm_password"
                id="comfirm_password"
                className="form-control"
                // placeholder="Re-enter your Password"
                aria-describedby="passwordHelpText"
              />

              {this.state.confirm_password === this.state.password &&
              this.state.password !== "" ? (
                <small className="form-text text-success">
                  Password matched
                </small>
              ) : this.state.confirm_password !== "" ? (
                <small className="form-text text-danger">
                  Passwords do not match
                </small>
              ) : (
                ""
              )}
            </div>

            {/* Messages */}
            <div className="form-group" id="reason">
              {this.alertRegister()}
            </div>
            <div className="form-group d-flex justify-content-between align-items-center">
              <button type="submit" className="btn btn-primary my-2">
                Register
              </button>
              <Link to="/login" className="form-text text-muted">
                Already a member?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  alertRegister() {
    if (this.state.code === "auth/email-already-in-use")
      return (
        <div className="alert alert-warning shadow d-flex justify-content-between align-items-center">
          <small>User already exists</small>
          <Link to="/login">Login</Link>
        </div>
      );
    else if (this.state.code === "auth/weak-password")
      return (
        <div className="alert alert-warning shadow d-flex justify-content-between align-items-center">
          <small>Please enter a stronger password</small>
        </div>
      );
    else if (this.state.code === "auth/invalid-email")
      return (
        <div className="alert alert-warning shadow d-flex justify-content-between align-items-center">
          <small>Invalid email</small>
        </div>
      );
    else if (this.state.code === "accountCreated")
      return (
        <div className="alert alert-success shadow d-flex justify-content-between align-items-center">
          <small>Account created. Verify email to continue</small>
        </div>
      );
    else if (this.state.code === "sendMailError")
      return (
        <div className="alert alert-danger shadow d-flex justify-content-between align-items-center">
          <small>Error sending verification mail</small>
        </div>
      );
  }
}
export default Register;
