import React, { Component } from "react";
import axios from 'axios'

class GetApi extends Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [] };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        this.setState({mydata: response.data});
      });
  }
  render() {
    return (
      <>
        <h2>Api</h2>
        {this.state.mydata.map((value, index) => {
          return (
            <div className="container my-3" style={{justifyContent:'center'}}>
              <div className="card" style={{ width: "20rem" }}>
                <img src={value.image} className="card-img-top" alt="..." style={{height:'200px' ,width:"200px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href="/" className="btn btn-primary">
                    Next
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default GetApi;
