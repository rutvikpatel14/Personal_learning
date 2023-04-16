import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/TODO">
                  TODO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UserInput">
                  Form Crud
                </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/axiosPro">
                  Api
                </Link>
                </li>
                <li>
                <Link className="nav-link "  to="/">
                  Calculator
                </Link>
              </li>
                <li>
                <Link className="nav-link "  to="/weather">
                  WeatherApp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counterFunction">
                  CounterFunction
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignupForm">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignInForm">
                  SignIn
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
