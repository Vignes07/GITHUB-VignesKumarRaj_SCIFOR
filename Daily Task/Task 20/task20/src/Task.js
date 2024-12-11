import React, { Component } from "react";

import "./App.css";

class Task extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome to React Class Component</h1>
        <p className="paragraph">
          This is a sample paragraph rendered using a React class component. The
          styles are applied inline to demonstrate customization of the
          appearance of elements.
        </p>
      </div>
    );
  }
}

export default Task;
