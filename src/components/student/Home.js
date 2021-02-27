import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      classes: [
        {
          name:
            "1gggggggggggggggggggggggggggggggg gggggggggggggggggggggg ggggggggggggggggggggggggggggggg ggggggggg",
          details:
            "abcggsgggggggggggggggggggggggggggggggggggggggggggg gggggggggggggg ggggggggg gggggggggg",
        },
        {
          name:
            "1gggggggggggggggggggggggggggggggg gggggggggggggggggggggg ggggggggggggggggggggggggggggggg ggggggggg",
          details:
            "abcggsgggggggggggggggggggggggggggggggggggggggggggg gggggggggggggg ggggggggg gggggggggg",
        },
        {
          name:
            "1gggggggggggggggggggggggggggggggg gggggggggggggggggggggg ggggggggggggggggggggggggggggggg ggggggggg",
          details:
            "abcggsgggggggggggggggggggggggggggggggggggggggggggg gggggggggggggg ggggggggg gggggggggg",
        },
        {
          name:
            "1gggggggggggggggggggggggggggggggg gggggggggggggggggggggg ggggggggggggggggggggggggggggggg ggggggggg",
          details:
            "abcggsgggggggggggggggggggggggggggggggggggggggggggg gggggggggggggg ggggggggg gggggggggg",
        },
        {
          name:
            "1gggggggggggggggggggggggggggggggg gggggggggggggggggggggg ggggggggggggggggggggggggggggggg ggggggggg",
          details:
            "abcggsgggggggggggggggggggggggggggggggggggggggggggg gggggggggggggg ggggggggg gggggggggg",
        },
      ],
    };
  }
  render() {
    return (
      <div className="min-vh-100">
        <Navbar />
        <div className="d-flex flex-md-row flex-column flex-wrap p-4 justify-content-start ml-4">
          {this.state.classes.map((c) => {
            return (
              <div class="card w-25 h-50 my-3 mx-5">
                <h5 class="card-header text-truncate">{c.name}</h5>
                <div class="card-body">
                  {/* <h5 class="card-title"></h5> */}
                  <p class="card-text text-truncate">{c.details}</p>
                  <Link to="/channel/1" class="btn btn-primary">
                    Go to channel
                  </Link>
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
