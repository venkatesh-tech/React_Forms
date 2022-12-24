import React, { Component } from "react";

class User extends Component {
  state = {};
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default User;
