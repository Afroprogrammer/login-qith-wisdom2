import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/Dashboard";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(profile) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: profile
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <DashBoard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
