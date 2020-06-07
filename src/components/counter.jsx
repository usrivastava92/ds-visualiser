import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.state.value}</span>
        <button
          className="btn btn-warning btn-sm "
          onClick={this.handleIncrementCount}
        >
          increment
        </button>
      </div>
    );
  }

  handleIncrementCount = () => {
    this.state.value++;
    this.setState(this.state);
  };
}

export default Counter;
