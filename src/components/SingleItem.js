import React, { Component } from "react";
import { removeTodo, editTodo } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    tasks: state.todo
  }
}

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  editTodo: (task,todo) => dispatch(editTodo(task,todo))
});
class SingleItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
    this.editTask = this.editTask.bind(this)
  }

  mouseEnter() {
    this.setState({ isMouseInside: true });
  }

  mouseLeave() {
    this.setState({ isMouseInside: false });
  }

  deleteTasks() {
    this.props.removeTodo(this.props.task)
  }

  editTask() {
    this.props.editTodo(this.props.task,this._inputElement.value)
  }
  render() {
    return (
      <div className="single-task" onClick={this.editTask} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <input onChange={this.editTask} ref={(task) => this._inputElement = task} defaultValue={this.props.task.todo} type="text" name="todoTask"></input>
        {this.state.isMouseInside ? <button onClick={this.deleteTasks} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> : null}
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);