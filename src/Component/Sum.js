import React, { Component } from "react";
// import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", output: "" };
  }

  handleInput = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  handleAdd = () => {
    const { input } = this.state;
    const numbers = input.split("+");
    const sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
    this.setState({ output: sum });
  };

  handleSubtract = () => {
    const { input } = this.state;
    const numbers = input.split("-");
    const difference = numbers.reduce((acc, curr) => acc - parseInt(curr), 0);
    this.setState({ output: difference });
  };

  handleMultiply = () => {
    const { input } = this.state;
    const numbers = input.split("*");
    const product = numbers.reduce((acc, curr) => acc * parseInt(curr), 1);
    this.setState({ output: product });
  };

  handleDivide = () => {
    const { input } = this.state;
    const numbers = input.split("/");
    const quotient = numbers.reduce((acc, curr) => acc / parseInt(curr), 1);
    this.setState({ output: quotient });
  };

  handleClear = () => {
    this.setState({ input: "", output: "" });
  };

  render() {
    return (
      <div className="calculator">
        <div className="input">{this.state.input}</div>
        <div className="output">{this.state.output}</div>
        <div className="keypad">
          <div className="row">
            <button onClick={() => this.handleInput("7")}>7</button>
            <button onClick={() => this.handleInput("8")}>8</button>
            <button onClick={() => this.handleInput("9")}>9</button>
            <button onClick={() => this.handleInput("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput("4")}>4</button>
            <button onClick={() => this.handleInput("5")}>5</button>
            <button onClick={() => this.handleInput("6")}>6</button>
            <button onClick={() => this.handleInput("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput("1")}>1</button>
            <button onClick={() => this.handleInput("2")}>2</button>
            <button onClick={() => this.handleInput("3")}>3</button>
            <button onClick={() => this.handleInput("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput("0")}>0</button>
            <button onClick={() => this.handleClear()}>C</button>
            <button onClick={() => this.handleDivide("/")}>/</button>
            <button onClick={() => this.handleMultiply()}>X</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleAdd()}>+</button>
            <button onClick={() => this.handleSubtract()}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
