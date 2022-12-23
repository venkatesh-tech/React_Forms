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

  shouldComponentUpdate() {
    console.log("Lifecycle B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Lifecycle B getSnapShotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle B Componentdidupdate");
  }

  render() {
    console.log("LifeCycle Brender");
    return <div>LifeCycleB</div>;
  }
}

export default LifecycleB;
