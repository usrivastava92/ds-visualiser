import React, { Component } from "react";

class Bar extends Component {
  render() {
    return (
      <div
        className={`d-inline-block ${this.props.color} text-white text-center py-2`}
        style={{
          width: `${this.props.width}%`,
          height: `${this.props.height}%`,
          border: "solid white 1px",
          fontSize: "70%",
        }}
      >
        {this.props.height}
      </div>
    );
  }
}

export default Bar;
