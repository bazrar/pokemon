import React from "react";

export default class ShoppingListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="qty">qty</label>
        <input
          type="text"
          name="qty"
          id="qty"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button>add item</button>
      </form>
    );
  }
}
