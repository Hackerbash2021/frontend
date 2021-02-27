import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "../shared/Loading";
export default class Exam extends Component {
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
  constructor() {
    super();
    this.state = { loading: true };

    this.exam = [
      {
        name: "abcafadffafafdafsf affadfadfa affsfafdfas affasfd afaf ",
        description: "aflkajl",
        date: "28/2/21",
      },
    ];
  }
  render() {
    if (this.state.loading) return <Loading />;
    return <div className="min-vh-100">hi</div>;
  }
}
