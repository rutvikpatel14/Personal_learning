import React, { useState, useEffect } from 'react';

function UserInput() {
    const [user, setUser] = useState({ name: '', mobile: '', email: '', password: '' });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('users');
        if (data) {
            setUsers(JSON.parse(data));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const UserData = [...users, user];
        localStorage.setItem('users', JSON.stringify(UserData));
        setUsers(UserData);
        setUser({ name: '', mobile: '', email: '', password: '' });
    };

    const handleEdit = (index) => {
        const editedUser = users[index];
        setUser(editedUser);
        const UserData = [...users];
        UserData.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(UserData));
        setUsers(UserData);
    };

    const handleDelete = (index) => {
        const UserData = [...users];
        UserData.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(UserData));
        setUsers(UserData);
    };

    return (
        <div className='container my-5'>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={user.name} placeholder='Enter name' onChange={(e) => setUser({ ...user, name: e.target.value })} />

                    <br></br>
                    <input type="text" value={user.mobile} placeholder='Enter mobile' onChange={(e) => setUser({ ...user, mobile: e.target.value })} />
                    <br></br>
                    <input type="email" value={user.email} placeholder='Enter email' onChange={(e) => setUser({ ...user, email: e.target.value })} />

                    <br></br>
                    <input type="password" value={user.password} placeholder='Enter password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
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
