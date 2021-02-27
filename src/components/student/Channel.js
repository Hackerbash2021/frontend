import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "../shared/Loading";

export default class Channel extends Component {
  constructor() {
    super();
    this.state = { loading: false };

    this.exams = [
      {
        id: 1,
        name: "SM IA 2",
        date: "28/2/21",
      },
      {
        id: 2,
        name: "OOSE LAB ASSESSMENT",
        date: "28/2/21",
      },
    ];
  }
  componentDidMount() {
    // api
    //   .get(`channel/${this.props.match.params.id}`)
    //   .then(({ data }) => {
    //     this.exams = data;
    //     this.setState({ loading: false });
    //   })
    //   .catch((err) => {
    //     this.props.history.goBack();
    //   });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="min-vh-">
        <div className="px-4 pt-2">
          <div className="bg-dark shadow text-white mb-3 p-3 rounded ">
            <h1>Classroom name</h1>
            <div className="py-4">
              <b>Description 👉</b>
              <span className="pr-4"></span>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita inventore repellendus, repellat quos et, labore ipsum
                quas error veritatis enim deleniti quam asperiores ex neque
                dolor quibusdam earum adipisci numquam.
              </span>
            </div>
            <small>KJSCE</small>
            <div style={{ userSelect: "all" }}>SDBJK234</div>
          </div>
          <div className="py-1"></div>
          <div>
            {this.exams.map((exam, i) => {
              return (
                <div className="card border-0 shadow my-2">
                  <div class="card-header d-flex border-0">
                    <div
                      className="index bg-dark text-white p-4 d-flex justify-content-center align-items-center rounded-circle mr-4"
                      style={{
                        width: "1em",
                        height: "1em",
                        borderRadius: ".5em",
                      }}
                    >
                      {i + 1}
                    </div>
                    <Link
                      to={`/channel/${this.props.match.params.id}/exam/${exam.id}`}
                      className="stretched-link text-decoration-none"
                    >
                      <div className="h5 font-weight-bold">{exam.name}</div>
                      <div className="lead" style={{ fontSize: "1em" }}>
                        {exam.date}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
