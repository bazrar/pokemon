import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(evt) {
    console.log(evt);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    alert(`you've typed ${this.state.name}`);
    this.setState({ name: "" });
  }
  render() {
    return (
      <div>
        {/* <h1>hi </h1> */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">name</label>
          <input
            type="text"
            name="name"
            id="username"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}
