import React from "react";
import "./App.css";

export default class Box extends React.Component {
  render() {
    let { height, width, color } = this.props;
    return (
      <div
        className="box"
        style={{
          height: Number(height),
          width: Number(width),
          backgroundColor: color,
        }}
      ></div>
    );
  }
}
