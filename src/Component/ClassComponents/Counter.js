import { Button } from "@mui/material";
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.RemoveItem = this.RemoveItem.bind(this);
  }

  componentDidMount() {
    const store = localStorage.getItem("count");
    if (store) {
      this.setState({ count: parseInt(store) });
    }
  }

  increment() {
    const temp = this.state.count + 1;
    this.setState({ count: temp });
    localStorage.setItem("count", temp.toString());
  }
  decrement() {
    const temp = this.state.count - 1;
    this.setState({ count: temp });
    localStorage.setItem("count", temp.toString());
  }

  RemoveItem(){
    const temp = localStorage.getItem('');
    localStorage.removeItem("count");
    this.setState({ count: temp });
  }
  render() {
    return (
      <>
        <center>
          <h1>Counter App</h1>
          <p>Count:{this.state.count}</p>
          <Button variant="contained" onClick={this.increment.bind(this)}>
            +
          </Button>
          <Button variant="contained" style={{marginLeft:'20px'}} onClick={this.decrement.bind(this)}>
            -
          </Button>
          <br/>
          <Button variant="contained" style={{marginTop:'10px'}}  onClick={this.RemoveItem.bind(this)}>
            Remove
          </Button>
        </center>
      </>
    );
  }
}

export default Counter;
