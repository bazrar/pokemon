import React from "react";
import "./App.css";

export default class Box extends React.Component {
  removeBoxHandler(evt) {
    this.props.removeBox(this.props.id);
  }

  render() {
    let { height, width, color } = this.props;
    return (
      <div className="container">
        <div
          className="box"
          style={{
            height: Number(height),
            width: Number(width),
            backgroundColor: color,
          }}
        ></div>
        <button className="btn" onClick={this.removeBoxHandler.bind(this)}>
          remove box
        </button>
      </div>
    );
  }
}
