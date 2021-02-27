import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="p-lg-4 p-2">
        <form action="" method="get" className="col-12 col-lg-6 mx-auto">
          <div className="input-">
            <input
              type="search"
              name="searchExams"
              className="form-control"
              id="searchExams"
              placeholder="Search public organizations"
            />
            <div className="input-group-append" hidden>
              <button className="btn btn-primary">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="search-results container">
          <div className="h1 font-weight-bold py-4 text-center">
            Top searches results 👇
          </div>
          <div className="card shadow-sm border-0">
            <div className="card-header border-0">KJSCE</div>
            <div className="card-body border-0">KJSCE</div>
          </div>
        </div>
      </div>
    );
  }
}
