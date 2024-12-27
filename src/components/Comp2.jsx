import React, { Component } from "react";

class Comp2 extends Component {
  constructor() {
    super();
    this.state = {
      num: 100,
      msg: "Excelr",
    };
    this.func_one = this.func_one.bind(this);
  }

  func_one() {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  }

  render() {
    return (
      <>
        <p>Number is {this.state.num}</p>
        <p>Message is {this.state.msg}</p>
        <button onClick={this.func_one}>Increment Number</button>
      </>
    );
  }
}

export default Comp2;
