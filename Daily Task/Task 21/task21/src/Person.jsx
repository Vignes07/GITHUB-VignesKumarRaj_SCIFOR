import React, { Component } from "react";

class Person extends Component {
  render() {
    const { name, age, hobby } = this.props;
    return (
      <div>
        <h2>Details:</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Hobby: {hobby}</p>
      </div>
    );
  }
}

export default Person;
