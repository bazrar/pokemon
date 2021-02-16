import React from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";
export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "milk", qty: 2, id: uuid() },
        { name: "banana", qty: 3, id: uuid() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState((st) => ({ items: [...st.items, newItem] }));
  }
  renderList() {
    let list = this.state.items.map((item) => (
      <li key={item.id}>
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
