import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      classes: [{ name: "1", details: "abc" }],
    };
  }
  render() {
    return (
      <div className="min-vh-100">
        <Navbar />
        <div className="d-flex flex-wrap">
          {this.state.classes.map((c) => {
            return (
              <div class="card">
                <h5 class="card-header">{c.name}</h5>
                <div class="card-body">
                  {/* <h5 class="card-title"></h5> */}
                  <p class="card-text">{c.details}</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Home;
