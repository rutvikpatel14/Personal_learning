import React, { useState } from "react";
// import './../Signup.css'

function SignupForm() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setFormData({
      Name: "",
      email: "",
      password: "",
    });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    if (formData.email) {
      
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email) {
    
        alert(`Your password is: ${storedUser.password}`);
      } else {
        
        alert('Sorry, we could not find an account associated with that email.');
      }
    } else {
      
      alert('Please enter the email associated with your account.');
    }
  };

  return (
    <center>
      <form style={{marginTop:'50px'}} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn btn-primary my-3" type="submit">
          Sign Up
        </button>
        <button className="btn btn-primary mx-2" onClick={handleForgotPassword}>
          Forgot Password
        </button>
      </form>
    </center>
  );
}

export default SignupForm;
