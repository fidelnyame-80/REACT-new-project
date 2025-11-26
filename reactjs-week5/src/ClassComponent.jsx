import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Count: {this.state.count}</h1>

        <button
          onClick={this.increaseCount}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
