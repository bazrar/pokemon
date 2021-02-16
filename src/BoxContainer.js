import React, { Component } from "react";
import BoxForm from "./BoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";
export default class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.submit = this.submit.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  submit(boxProps) {
    this.setState((prevState) => ({
      boxes: [...prevState.boxes, { ...boxProps, id: uuid() }],
    }));
  }

  removeBox(id) {
    this.setState((st) => ({ boxes: st.boxes.filter((box) => box.id !== id) }));
  }
  render() {
    let boxes = this.state.boxes.map((box) => {
      return (
        <Box
          key={box.id}
          id={box.id}
          height={box.height}
          width={box.width}
          color={box.color}
          removeBox={this.removeBox}
        />
      );
    });
    return (
      <div>
        <BoxForm submit={this.submit} />
        {boxes}
      </div>
    );
  }
}
