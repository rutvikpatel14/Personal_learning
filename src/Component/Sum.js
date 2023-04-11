import React, { Component } from "react";


class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "" };
  }

  changeProcess(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  clickProcess(event) {
    const { txt1, txt2 } = this.state;
    var ans;

    if (!txt1 || !txt2) {
      alert("Enter number");
    }
    if (event.target.name === "Add") {
       ans = parseInt(txt1) + parseInt(txt2);
      this.setState({ temp: ans });
      event.preventDefault();
    } else if (event.target.name === "sub") {
       ans = parseInt(txt1) - parseInt(txt2);
      this.setState({ temp: ans });
      event.preventDefault();
    } else if (event.target.name === "mul") {
       ans = parseInt(txt1) * parseInt(txt2);
      this.setState({ temp: ans });
      event.preventDefault();
    } else if (event.target.name === "div") {
       ans = parseInt(txt1) / parseInt(txt2);
      this.setState({ temp: ans });
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.clickProcess.bind(this)}>
            <br/>
          <input
            type="text"
            placeholder="Enter number"
            onChange={this.changeProcess.bind(this)}
            name="txt1"
          />
          <br />
          <input
            type="text"
            placeholder="Enter number"
            onChange={this.changeProcess.bind(this)}
            name="txt2"
          />
          <br />
          <input
            type="button"
            value="Sum"
            name="Add"
            onClick={this.clickProcess.bind(this)}
          />
          <input
            type="button"
            value="Subtraction"
            name="sub"
            onClick={this.clickProcess.bind(this)}
          />
          <input
            type="button"
            value="Multiplication"
            name="mul"
            onClick={this.clickProcess.bind(this)}
          />
          <input
            type="button"
            value="Division"
            name="div"
            onClick={this.clickProcess.bind(this)}
          />
        </form>
        <br />
        {this.state.temp}
      </div>
    );
  }
}

export default Sum;
