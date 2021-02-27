import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "../shared/Loading";
export default class ExamList extends Component {
  constructor() {
    super();
    this.state = { loading: false };

    this.exams = [
      {
        id: 1,
        name: "abcafadffafafdafsf affadfadfa affsfafdfas affasfd afaf ",
        date: "28/2/21",
      },
      {
        id: 2,
        name: "abcafadffafafdafsf affadfadfa affsfafdfas affasfd afaf ",
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
        {this.exams.map((exam) => {
          return (
            <Link to={`/channel/${this.props.match.params.id}/exam/${exam.id}`}>
              <div className="card">
                <div class="card-header d-flex ">
                  <div>{exam.name}</div>
                  <div>{exam.date}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
