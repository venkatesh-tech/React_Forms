import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "venkatesh",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle B ComponentDidMount");
  }

  render() {
    console.log("LifeCycle Brender");
    return <div>LifeCycleB</div>;
  }
}

export default LifecycleB;
