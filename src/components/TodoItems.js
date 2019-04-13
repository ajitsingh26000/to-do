import React, { Component } from "react";
import SingleItem from './SingleItem';
class TodoItems extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false
    }

    this.createTasks = this.createTasks.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ isMouseInside: true });
  }

  mouseLeave() {
    this.setState({ isMouseInside: false });
  }

  createTasks(task) {
    return <SingleItem key={task.date} task={task}/>
  }

  deleteTasks(e) {
    console.log(e)
  }
  render() {
    var toDoEntries = this.props.tasks;
    console.log(toDoEntries)
    var listTasks = toDoEntries.map(this.createTasks);

    return (
      <ul className="todolist">
        {listTasks}
      </ul>
    )
  }

}

export default TodoItems;