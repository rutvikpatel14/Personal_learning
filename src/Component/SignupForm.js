import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    setFormData({
      Name: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
         Name:
        <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
