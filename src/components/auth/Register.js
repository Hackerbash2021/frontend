import "cleave.js/dist/addons/cleave-phone.in";
import Cleave from "cleave.js/react";
import voca from "voca";
import React, { Component } from "react";
import RegisterSvg from "./Register.svg";
import Register2Svg from "./Register2.svg";
import { Link } from "react-router-dom";
import $ from "jquery";
// import { register } from "../../services/auth";
import { NotificationManager } from "react-notifications";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      organizationName: "",
      contact: "",
      image: RegisterSvg,
      organizationType: "",
      accessibility: "",
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
          if (this.state.password === this.state.confirm_password) {
            $("#confirm_password").addClass("is-valid");
            $("#confirm_password").removeClass("is-invalid");
          } else {
            $("#confirm_password").removeClass("is-valid");
            $("#confirm_password").addClass("is-invalid");
          }
        } else {
          $("#confirm_password").removeClass("is-valid");
          $("#confirm_password").removeClass("is-invalid");
          $("#password").removeClass("is-valid");
          $("#password").addClass("is-invalid");
          $("#password_error").fadeIn();
        }
      } else if (ev.target.name === "confirm_password") {
        if (this.validatePassword(this.state.password)) {
          if (this.state.password === this.state.confirm_password) {
            $("#confirm_password").addClass("is-valid");
            $("#confirm_password").removeClass("is-invalid");
          } else {
            $("#confirm_password").removeClass("is-valid");
            $("#confirm_password").addClass("is-invalid");
          }
        } else {
          $("#confirm_password").removeClass("is-valid");
          $("#confirm_password").removeClass("is-invalid");
        }
      }
    });
  };

  componentDidMount() {
    $("#isOrganizationMember").on("change", () => {
      if ($("#isOrganizationMember:checked").val()) {
        $("#organizationMember").slideDown();
        this.setState({ image: Register2Svg });
      } else {
        $("#organizationMember").slideUp();
        this.setState({ image: RegisterSvg });
      }
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.validatePassword(this.state.password)) {
      if (this.state.confirm_password === this.state.password) {
        if (!$("#isOrganizationMember:checked").val())
          NotificationManager.success("Account created 😄");
        else NotificationManager.success("Organization established 👏");
      }
    } else {
      NotificationManager.error("Don't mess around 🥱");
    }
  };

  render() {
    return (
      <div className="min-vh-100 d-flex">
        {/* Image */}
        <div className="d-flex align-items-center justify-content-center col-7">
          <img
            id="registrationIllustration"
            src={this.state.image}
            alt="Register"
            className="img-responsive p-3 w-100 vh-100"
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
            <h1 className="text-center pb-4 animate__animated animate__tada animate__delay-2s">
              Hackerbash
            </h1>

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
                disabled={
                  voca.isEmpty(this.state.password) ||
                  !this.validatePassword(this.state.password)
                }
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="form-control"
                // placeholder="Re-enter your Password"
              />
            </div>

            {/* contact */}
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <Cleave
                options={{ phone: true, phoneRegionCode: "{IN}" }}
                onChange={this.handleChange}
                name="contact"
                id="contact"
                className="form-control"
              />
            </div>

            {/* If organization */}
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="isOrganizationMember"
              />
              <label
                class="custom-control-label pl-2"
                for="isOrganizationMember"
              >
                Registering on behalf of an organization?
              </label>
            </div>

            <div id="organizationMember" style={{ display: "none" }}>
              <hr />
              <div className="form-group">
                <label htmlFor="organizationName">Organization name</label>
                <input
                  type="text"
                  className="form-control"
                  name="organizationName"
                  id="organizationName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="organizationType">Organization type</label>
                <select class="custom-select" id="organizationType">
                  <option
                    selected
                    value=""
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    -- 🏫 --
                  </option>
                  <option
                    value="school"
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    School
                  </option>
                  <option
                    value="college"
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    College
                  </option>
                  <option
                    value="other"
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    Other
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="accessibility">Accessibility</label>
                <select class="custom-select" id="accessibility">
                  <option
                    selected
                    value=""
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    -- 👇 --
                  </option>
                  <option
                    value="public"
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    Public
                  </option>
                  <option
                    value="private"
                    onClick={(ev) =>
                      this.setState({ organizationType: ev.target.value })
                    }
                  >
                    Private
                  </option>
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="form-group" id="reason">
              {/* {this.alertRegister()} */}
            </div>
            <div className="form-group d-flex justify-content-between align-items-center">
              <div className="dropdown">
                <button
                  className="btn btn-altblue"
                  data-target="auth-login-dropdown"
                  data-toggle="dropdown"
                >
                  More
                </button>
                <div className="dropdown-menu my-2" id="auth-login-dropdown">
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <Link to="/forgot" className="dropdown-item">
                    Forgot Password
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary my-2"
                disabled={
                  voca.isEmpty(this.state.email) ||
                  voca.isEmpty(this.state.password) ||
                  voca.isEmpty(this.state.confirm_password) ||
                  this.state.password !== this.state.confirm_password
                }
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // alertRegister() {
  //   if (this.state.code === "auth/email-already-in-use")
  //     return (
  //       <div className="alert alert-warning shadow d-flex justify-content-between align-items-center">
  //         <small>User already exists</small>
  //         <Link to="/login">Login</Link>
  //       </div>
  //     );
  //   else if (this.state.code === "auth/weak-password")
  //     return (
  //       <div className="alert alert-warning shadow d-flex justify-content-between align-items-center">
  //         <small>Please enter a stronger password</small>
  //       </div>
  //     );
  //   else if (this.state.code === "auth/invalid-email")
  //     return (
  //       <div className="alert alert-warning shadow d-flex justify-content-between align-items-center">
  //         <small>Invalid email</small>
  //       </div>
  //     );
  //   else if (this.state.code === "accountCreated")
  //     return (
  //       <div className="alert alert-success shadow d-flex justify-content-between align-items-center">
  //         <small>Account created. Verify email to continue</small>
  //       </div>
  //     );
  //   else if (this.state.code === "sendMailError")
  //     return (
  //       <div className="alert alert-danger shadow d-flex justify-content-between align-items-center">
  //         <small>Error sending verification mail</small>
  //       </div>
  //     );
  // }
}
export default Register;
