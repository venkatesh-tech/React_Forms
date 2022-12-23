import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "venkatesh",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A ComponentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        LifeCycleA
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
