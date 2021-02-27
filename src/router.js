import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import React from "react";
import Home from "./components/student/Home";
// function Home(userType) {
//   return (
//     <div>
//       <p>{userType}</p>
//     </div>
//   );
// }

function Forgot() {
  return (
    <div>
      <p>Forgot</p>
    </div>
  );
}

const authRoutes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/forgot" component={Forgot} />
    <Redirect to="/login" />
  </Switch>
);

const adminRoutes = (
  <Switch>
    <Route path="/" component={() => Home("admin")}></Route>
    <Redirect to="/"></Redirect>
  </Switch>
);

const studentRoutes = (
  <Switch>
    <Route path="/" component={Home}></Route>
    <Redirect to="/"></Redirect>
  </Switch>
);

export { authRoutes, adminRoutes, studentRoutes };
