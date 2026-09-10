import React, { Component } from "react";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: "",
            tasks: [],
        }
    }


  handleAddTask = (e) => {
    e.preventDefault();

    if (!this.state.taskInput.trim()) {
      return
    }

    const newTask = {
      id: Date.now(),
      text: this.state.taskInput.trim(),
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks],
      taskInput: "",
    })
  }

   render() {
    return (
      <div className="container py-5" style={{ maxWidth: "600px", direction: "rtl" }}>
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h3 className="mb-4 text-center fw-bold">لوحة المهام 🚀</h3>

          <form onSubmit={this.handleAddTask} className="mb-4">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                placeholder="أضف مهمة جديدة..."
                value={this.state.taskInput}
                onChange={this.handleInputChange}
              />
              <button className="btn btn-primary px-4 fw-bold" type="submit">
                إضافة
              </button>
            </div>
          </form>
          <p className="btn-btn primary center pm-4">المهمة الاحلية </p>

          <ul className="list-group">
            {this.state.tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center mb-2 rounded-3 border"
              >
                <span>{task.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;