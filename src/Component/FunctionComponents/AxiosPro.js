import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AxiosPro() {

    const [myData, myDataUpdate] = useState({ text1: '', text2: '' });
    const [data, setData] = useState([]);

    const onChangeEvent =(e) =>{
        myDataUpdate((myData)=>({
            ...myData,
            [e.target.name] : e.target.value
        }));
    }

    const submitValue = (event) => {
        event.preventDefault();
        const { text1, text2 } = myData;

        var myform = new FormData();
        myform.append("todo_title", text1);
        myform.append("todo_details", text2);

        axios.post('https://akashsir.in/myapi/crud/todo-add-api-php', myform)
        .then(response =>{
            console.log(response.data);
            fetchData();
        });
    };

    const editValue = (id, text1, text2) => {
        var myform = new FormData();
        myform.append("todo_id", id);
        myform.append("todo_title", text1);
        myform.append("todo_details", text2);

        axios.post('https://akashsir.in/myapi/crud/todo-update-api-php', myform)
        .then(response =>{
            console.log(response.data);
            fetchData();
        });
    };

    const deleteValue = (id) => {
        axios.post('https://akashsir.in/myapi/crud/todo-delete-api-php', { todo_id: id })
        .then(response =>{
            console.log(response.data);
            fetchData();
        });
    };

    const fetchData = () => {
        axios.get('https://akashsir.in/myapi/crud/todo-list-api-php')
        .then(response =>{
            setData(response.data);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container my-5">
            <form onSubmit={submitValue}>
                No1:
                <input type="text" name='text1' value={myData.text1} onChange={onChangeEvent} />
                No2:
                <input type="text" name='text2' value={myData.text2} onChange={onChangeEvent} />
                <input type="submit" /><br/><br/>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>No1</th>
                        <th>No2</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.todo_id}</td>
                            <td>{item.todo_title}</td>
                            <td>{item.todo_details}</td>
                            <td>
                                <button onClick={() => editValue(item.todo_id, item.todo_title, item.todo_details)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => deleteValue(item.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
