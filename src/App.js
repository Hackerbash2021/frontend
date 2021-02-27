import React, { Component } from "react";
import Loading from "./components/shared/Loading";
// import api from "./axios";
import { adminRoutes, studentRoutes, authRoutes } from "./router.js";
import api from "./axios";
import { NotificationManager } from "react-notifications";
import $ from "jquery";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
    this.__userType = "student";
    this.__authenticated = true;
  }
  componentDidUpdate(prevProps, prevState) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    // api
    //   .get("whoAmI/")
    //   .then(({ data }) => {
    //     this.__userType = data;
    //     this.__authenticated = true;
    //     this.setState({ loading: false });
    //   })
    //   .catch((err) => {
    //     this.setState({ loading: false });
    //   });
  }

  render() {
    // return (
    //   <div>
    //     <form
    //       method="post"
    //       onSubmit={(event) => {
    //         event.preventDefault();
    //         api
    //           .post("login/", {
    //             email: "nishavak.n@somaiya.edu",
    //             password: "my Secret password!!!",
    //           })
    //           .then((res) => NotificationManager.success(res.data.message))
    //           // .catch((res) => console.log(res.response.data.error));
    //           .catch((err) =>
    //             NotificationManager.error(err.response.data.error)
    //           );
    //       }}
    //     >
    //       <input type="email" name="email" value="nishavak.n@somaiya.edu" />
    //       <input
    //         type="password"
    //         name="password"
    //         value="my Secret password!!!"
    //       />
    //       <button type="submit" className="btn btn-primary">
    //         Get login details
    //       </button>
    //     </form>
    //   </div>
    // );
    // if (this.state.loading) return <Loading />;
    // if (!this.__authenticated) return authRoutes;
    // else {
    //   if (this.__userType === "student") return studentRoutes;
    //   else if (this.__userType === "admin") return adminRoutes;
    // }
    return (
      <div id="App">
        {adminRoutes}
        {/* {studentRoutes} */}
        {/* <hr /> */}
        {/* {authRoutes} */}
      </div>
    );
  }
}
