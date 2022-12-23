import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    //Method 2 using Call back ref
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);

    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* //Method 2 using Call back ref */}
        {/* <input type="text" ref={this.setCbRef} /> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
