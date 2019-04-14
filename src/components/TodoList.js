import React, { Component } from 'react';
import TodoItems from './TodoItems';
import { addTodo, fetchTodo } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  fetchTodo: () => dispatch(fetchTodo())
});

const mapStateToProps = state => {
  return {
    tasks: state.todo
  }
}

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    
    this.props.addTodo(this._inputElement.value)
    event.preventDefault();
  }

  componentDidMount() {
    this.props.fetchTodo();
    
  }
  

  render() {
    
    return (
      <div className="todoListMain">
        <div className="header">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <input ref={(task) => this._inputElement = task}
              placeholder="Enter Task" className="form-control"></input>
            <button className="btn btn-primary" type="submit">Add</button>
          </form>
        </div>
        <TodoItems tasks={this.props.tasks} />
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);