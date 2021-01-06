import React, { Component } from "react";
import Login from "../auth/Login";
import Registration from "../auth/Registration";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <div className="Home">
        <h1>this is home </h1>
        <h1> STATUS: {this.props.loggedInStatus}</h1>
        <Registration />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

