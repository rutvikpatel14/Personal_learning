import React, { useState, useEffect } from 'react';

function UserInput() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('users');
        if (data) {
            setUsers(JSON.parse(data));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: name,
            mobile: mobile,
            email: email,
            password: password,
        };
        const updatedUsers = [...users, user];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setName('');
        setMobile('');
        setEmail('');
        setPassword('');
    };

    const handleEdit = (index) => {
        const editedUser = users[index];
        setName(editedUser.name);
        setMobile(editedUser.mobile);
        setEmail(editedUser.email);
        setPassword(editedUser.password);
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    return (
        <div className='container my-5'>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />

                    <br></br>
                    <input type="text" value={mobile} placeholder='Enter mobile' onChange={(e) => setMobile(e.target.value)} />
                    <br></br>
                    <input type="email" value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />

                    <br></br>
                    <input type="password" value={password} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
                </form>
                {users.map((user, index) => (
                    <div key={index}>
                        <h4>{user.name}</h4>
                        <h4>{user.mobile}</h4>
                        <h4>{user.email}</h4>
                        <h4>{user.password}</h4>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </center>
        </div>
    );
}

export default UserInput;
