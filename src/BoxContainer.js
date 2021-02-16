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
  }

  submit(boxProps) {
    this.setState((prevState) => ({
      boxes: [...prevState.boxes, { ...boxProps, id: uuid() }],
    }));
  }
  render() {
    let boxes = this.state.boxes.map((box) => {
      return (
        <Box
          key={box.id}
          height={box.height}
          width={box.width}
          color={box.color}
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
