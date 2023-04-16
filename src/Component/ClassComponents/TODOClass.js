import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      this.setState({
        tasks: JSON.parse(storedTasks)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  handleAddTask(event) {
    event.preventDefault();
    const newData = event.target.task.value;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, { text: newData }]
    }));
    event.target.reset();
  }

  handleDelete(index) {
    const myTask = [...this.state.tasks];
    myTask.splice(index, 1);
    this.setState({
      tasks: myTask
    });
  }

  handleEdit(index, newData) {
    const myTask = [...this.state.tasks];
    myTask[index].text = newData;
    this.setState({
      tasks: myTask
    });
  }

  render() {
    return (
      <div className="container my-5">
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task" placeholder="Add task" />
          <button>Add</button>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task.text}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
              <button
                onClick={() =>
                  this.handleEdit(
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
}

export default Todo;
