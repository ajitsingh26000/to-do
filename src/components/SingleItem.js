import React, { Component } from "react";

class SingleItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.editTask = this.editTask.bind(this)
  }

  mouseEnter() {
    this.setState({ isMouseInside: true });
  }

  mouseLeave() {
    this.setState({ isMouseInside: false });
  }

  deleteTasks(e) {
    console.log(e)
  }

  editTask(e) {
    console.log(e)
  }
  render() {
    return (
      <div className="single-task" onClick={this.editTask} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <li>{this.props.task.text}</li>
        {this.state.isMouseInside ? <button onClick={this.deleteTasks} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> : null}
      </div>
    )
  }

}

export default SingleItem;