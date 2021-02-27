import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      classes: [
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
        {
          name: "Organization name",
          details: "Organization details",
        },
      ],
    };
  }
  render() {
    return (
      <div className="min-vh-">
        <div
          className="d-flex flex-md-row flex-column flex-wrap mx-auto w-100 justify-content-start"
          style={{ minHeight: "80vh" }}
        >
          {this.state.classes.map((c) => {
            return (
              <div
                class="card border-0 shadow h-50 my-3 mx-auto"
                style={{
                  width: "30vw",
                  borderRadius: ".5em",
                }}
              >
                <h5 class="card-header border-0 text-truncate">{c.name}</h5>
                <div class="card-body boder-0 ">
                  {/* <h5 class="card-title"></h5> */}
                  <p class="card-text text-truncate">{c.details}</p>
                  <div className="text-center">
                    <Link to="/channel/1" class="btn shadow-sm btn-primary">
                      Go to channel
                    </Link>
                  </div>
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
