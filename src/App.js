import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import TodoList from './components/TodoList';
// import LoginScreen from './components/LoginScreen';
import "./App.scss";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">To-do List</NavbarBrand>
            </div>
          </Navbar>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
