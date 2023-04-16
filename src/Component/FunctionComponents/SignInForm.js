import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = (event) => {
    event.preventDefault();
    if (email) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email) {
        alert(`Your password is: ${storedUser.password}`);
      } else {
        alert("Sorry, we could not find an account associated with that email.");
      }
    } else {
      alert("Please enter the email associated with your account.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var a = JSON.parse(localStorage.getItem("user"));
    if (a.email === "" || a.password === "") {
      alert("Please fill out all fields");
      return;
    }
    if (email === a.email && pass === a.password) {
      setIsSubmitted(true);
      alert("Login Successful");
      navigate("/calculator");
    } else {
      alert("Incorrect name, email, or password");
    }
  };

  return (
    <div className="container my-5">
      <center>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </div>
          <button className="btn btn-primary my-2" type="submit" style={{ marginTop: "10px" }}>
            Sign In
          </button>
          <button className="btn btn-primary mx-2" onClick={handleForgotPassword}>
            Forgot Password
          </button>
        </form>
      </center>
    </div>
  );
};

export default SignUpForm;
