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
    this.state = { loading: false };

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
    return (
      <div className="min-vh-">
        <div
          className="p-4 shadow mx-4 mt-2 bg-white animate__slideInDown animate__animated"
          style={{ borderRadius: "1em" }}
        >
          <div className="about-exam">
            <h2 className="text-primary font-weight-bold">Exam Title</h2>
            <div id="exam-description" className="py-3">
              <b>Description 👉</b> <span className="pr-2"> </span>{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in
                nesciunt cum deleniti porro omnis nisi facilis numquam, ipsa, a
                magni! Sequi minima vitae nihil fugiat exercitationem. Ad,
                provident accusantium?
              </span>
            </div>
            <div id="exam-date" className="pt-1 pb-3">
              <b>Exam date 👉</b> <span className="pr-2"></span> 27/02/2021
            </div>
            <div className="exam-registration-link">
              <b>Registration Link 👉</b> <span className="pr-2"></span>
              <a href="https://docs.google.com/document/d/1pHlOebfTda91p0R-67GC_C1m_oPFXAbC3aR04mJLPNA/edit?pli=1#heading=h.ok2q36wq9jd7">
                https://docs.google.com/document/d/1pHlOebfTda91p0R-67GC_C1m_oPFXAbC3aR04mJLPNA/edit?pli=1#heading=h.ok2q36wq9jd7
              </a>
            </div>
            <div className="py-2"></div>
            <div id="exam-resources" className="pt-1">
              <b>Resources 👇</b>
              <div className="py-2"></div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="https://docs.google.com/document/d/1pHlOebfTda91p0R-67GC_C1m_oPFXAbC3aR04mJLPNA/edit?pli=1#heading=h.ok2q36wq9jd7">
                    https://docs.google.com/document/d/1pHlOebfTda91p0R-67GC_C1m_oPFXAbC3aR04mJLPNA/edit?pli=1#heading=h.ok2q36wq9jd7
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://getbootstrap.com/docs/4.4/components/list-group/">
                    https://getbootstrap.com/docs/4.4/components/list-group/
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://meet.google.com/whm-bcig-vya?pli=1&authuser=1">
                    https://meet.google.com/whm-bcig-vya?pli=1&authuser=1
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://docs.google.com/document/d/1pHlOebfTda91p0R-67GC_C1m_oPFXAbC3aR04mJLPNA/edit?pli=1#heading=h.ok2q36wq9jd7">
                    https://docs.google.com/document/d/1pHlOebfTda91p0R-67GC_C1m_oPFXAbC3aR04mJLPNA/edit?pli=1#heading=h.ok2q36wq9jd7
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://www.google.com">https://www.google.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
