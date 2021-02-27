import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import React from "react";
import Home from "./components/student/Home";
import AdminHome from "./components/admin/AdminHome";
import Channel from "./components/student/Channel";
import Exam from "./components/student/Exam";
import ExamList from "./components/student/ExamList";
import Navbar from "./components/student/Navbar";
import Search from "./components/student/Search";
import Profile from "./components/student/Profile";
import AdminChannel from "./components/admin/AdminChannel";
import AdminExam from "./components/admin/AdminExam";
import AdminNavbar from "./components/admin/AdminNavbar";
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
  <>
    {/* navbar */}
    <AdminNavbar></AdminNavbar>
    {/* content */}
    <Switch>
      <Route exact path="/" component={AdminHome}></Route>
      <Route exact path="/channel/:id" component={AdminChannel}></Route>
      <Route exact path="/channel/:id/exam/:id" component={AdminExam}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </>
);

const studentRoutes = (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/channel/:id" component={Channel}></Route>
      <Route exact path="/channel/:id/exam/:id" component={Exam}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/my-exams" component={ExamList}></Route>

      <Redirect to="/"></Redirect>
    </Switch>
  </>
);

export { authRoutes, adminRoutes, studentRoutes };
