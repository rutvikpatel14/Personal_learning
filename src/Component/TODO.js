import React, { useState,useEffect } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = (event) => {
    event.preventDefault();
    const newData = event.target.task.value;
    setTasks([...tasks, { text: newData }]);
    event.target.reset();
  };

  const handleDelete = (index) => {
    const myTask = [...tasks];
    myTask.splice(index, 1);
    setTasks(myTask);
  };

  const handleEdit = (index, newData) => {
    const myTask = [...tasks];
    myTask[index].text = newData;
    setTasks(myTask);
  };

  return (
    <div className="container my-5" >
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Add task" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button
              onClick={() =>
                handleEdit(
                  index,
                  prompt("Enter the new task text:", task.text)
                )
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
