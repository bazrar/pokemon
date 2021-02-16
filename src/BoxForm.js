import React, { Component } from "react";

export default class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="box-height">Height:</label>
        <input
          type="text"
          id="box-height"
          name="height"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="box-width">Width:</label>
        <input
          type="text"
          id="box-width"
          name="width"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="box-color">Color:</label>
        <input
          type="text"
          id="box-color"
          name="color"
          onChange={this.handleChange}
        />
        <br />
        <button>add a new box!</button>
      </form>
    );
  }
}
