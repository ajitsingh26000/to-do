import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this)
  }

  addTask(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }

      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.concat(newItem)
        }
      })
    }

    this._inputElement.value = "";
    console.log(this.state.tasks)
    console.log(e)
    e.preventDefault();
  }




  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form className="form-group" onSubmit={this.addTask}>
            <input ref={(task) => this._inputElement = task}
              placeholder="Enter Task" className="form-control"></input>
            <button className="btn btn-primary" type="submit">Add</button>
          </form>
        </div>
        <TodoItems tasks={this.state.tasks} />
      </div>
    )
  }

}

export default TodoList;