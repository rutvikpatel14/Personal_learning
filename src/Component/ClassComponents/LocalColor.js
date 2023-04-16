import React from 'react'

class LocalColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "" };
  }
  setProcess(event) {
    let a = "Hello";
    localStorage.setItem("name", a);
    this.setState({ msg: a });
    event.preventDefault();
  }
  getProcess(event) {
    var b = localStorage.getItem("name");
    this.setState({ msg: `name is ${b}` });
    event.preventDefault();
  }

  removeProcess(event) {
    localStorage.removeItem("name");
    this.setState({ msg: "Removed" });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <center>
            <input
              type="button"
              value="set"
              onClick={this.setProcess.bind(this)}
              name="button1"
            />
            <input
              type="button"
              value="get"
              onClick={this.getProcess.bind(this)}
              name="button2"
            />
            <input
              type="button"
              value="remove"
              onClick={this.removeProcess.bind(this)}
              name="button3"
            />
            <br></br>
            {this.state.msg}
          </center>
        </div>
      </>
    );
  }
}

export default LocalColor;
