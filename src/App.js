import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import TodoList from './components/TodoList';
// import LoginScreen from './components/LoginScreen';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">To-do List</NavbarBrand>
          </div>
        </Navbar>
        <TodoList/>
      </div>
    );
  }
}

export default App;
