import React from "react";
import ShoppingListForm from "./ShoppingListForm";
export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "milk", qty: 2 },
        { name: "banana", qty: 3 },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    this.setState((st) => ({ items: [...st.items, item] }));
  }
  renderList() {
    let list = this.state.items.map((item) => (
      <li>
        name:{item.name} qty: {item.qty}
      </li>
    ));
    return list;
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}
