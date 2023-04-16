import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleAdd = () => {
    const numbers = input.split("+");
    const sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
    setOutput(sum);
  };

  const handleSubtract = () => {
    const numbers = input.split("-");
    const difference = numbers.reduce((acc, curr) => acc - parseInt(curr), 0);
    setOutput(difference);
  };

  const handleMultiply = () => {
    const numbers = input.split("*");
    const product = numbers.reduce((acc, curr) => acc * parseInt(curr), 1);
    setOutput(product);
  };

  const handleDivide = () => {
    const numbers = input.split("/");
    const quotient = numbers.reduce((acc, curr) => acc / parseInt(curr), 1);
    setOutput(quotient);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="output">{output}</div>
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleDivide("/")}>/</button>
          <button onClick={() => handleMultiply("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleSubtract("-")}>-</button>
          <button onClick={() => handleAdd("+")}>+</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={() => handleInput("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
