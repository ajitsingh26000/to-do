import React, { Component } from "react";

class LoginScreen extends Component {
  render() {
    return (
      <div className="login-container card">
        <form className="login-form col">
          <div className="form-group">
            <input className="form-control" type="text" name="Username" placeholder="Enter Username"/>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <input className="form-control" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginScreen;
