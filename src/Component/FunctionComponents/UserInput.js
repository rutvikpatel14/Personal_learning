import React, { useState, useEffect } from "react";

function UserInput() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const UserData = [...users, user];
    localStorage.setItem("users", JSON.stringify(UserData));
    setUsers(UserData);
    setUser({
      name: "",
      mobile: "",
      gender: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleEdit = (index) => {
    const editedUser = users[index];
    setUser(editedUser);
    const UserData = [...users];
    UserData.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(UserData));
    setUsers(UserData);
  };

  const handleDelete = (index) => {
    const UserData = [...users];
    UserData.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(UserData));
    setUsers(UserData);
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === user.password;
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const isValidEmail = validateEmail(user.email);
    const isValidPassword = validatePassword(user.password);
    const isValidConfirmPassword = validateConfirmPassword(
      user.confirmPassword
    );

    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (!isValidConfirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    handleSubmit(event);
  };
  return (
    <div className="my-3">
      <center>
        <h2>Form</h2>
        <form style={{ marginTop: "20px" }} onSubmit={handleSubmitForm}>
          <table  border={"1px"}>
            <thead>
              <tr border={"1px"}>
                <th>Name</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={user.name}
                    placeholder="Enter name"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                  <br></br>
                </td>
                <td>
                  <input
                    type="text"
                    value={user.mobile}
                    placeholder="Enter mobile"
                    onChange={(e) =>
                      setUser({ ...user, mobile: e.target.value })
                    }
                  />
                  <br></br>
                </td>
                <td>
                  <input
                    type="text"
                    value={user.gender}
                    placeholder="Gender"
                    onChange={(e) =>
                      setUser({ ...user, gender: e.target.value })
                    }
                  />
                  <br></br>
                </td>
                <td>
                  <input
                    type="date"
                    value={user.dob}
                    placeholder="DOB"
                    onChange={(e) => setUser({ ...user, dob: e.target.value })}
                  />
                  <br></br>
                </td>
                <td>
                  <input
                    type="email"
                    value={user.email}
                    placeholder="Enter email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <br></br>
                </td>
                <td>
                  <input
                    type="password"
                    value={user.password}
                    placeholder="Enter password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <br></br>
                </td>
                <td>
                  <input
                    type="password"
                    value={user.confirmPassword}
                    placeholder="confirm password"
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                </td>
                <td>
                  <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <h4 style={{marginTop:'10px'}}>Above Filled Data</h4>
        <table style={{marginTop:'10px'}} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>{user.dob}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmPassword}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UserInput;
