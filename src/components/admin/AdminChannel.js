import React, { Component } from "react";

export default class AdminChannel extends Component {
  render() {
    return (
      <div>
        <p>Admin Channel</p>
        <ul>
          Options to:
          <li>Update room details</li>
          <li>Change room accessibility</li>
          <li>Delete room</li>
          <li>Share code</li>
          <li>Add exam</li>
          <li>Update exam</li>
          <li>Remove exam</li>
          <li>See Participants</li>
          <li>Remove Participants?</li>
        </ul>

        <p>Refer student section to create similar UI in admin</p>
      </div>
    );
  }
}
