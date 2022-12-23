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

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapShotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A Componentdidupdate");
  }

  changeState = () => {
    this.setState({
      name: "Venkatesh",
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        <div> LifeCycleA</div>
        <div>
          <button onClick={this.changeState}>Change State</button>
        </div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
