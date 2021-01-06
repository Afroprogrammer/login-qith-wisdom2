import React, { Component } from "react";
export default class Joe extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className="Joe">
        <h1>this is joe</h1>
        <h1> STATUS:{this.props.loggedInStatus}</h1>
      </div>
    );
  }
}

