import React, { Component } from "react";

function App() {
  return (
    <div>
      <WelcomeComponent name="Codetrain Ghana" />
    </div>
  );
}

// Class component placed beneath App()
class WelcomeComponent extends Component {
  render() {
    return <h1>{this.props.name} is awesome, react works!!!!</h1>;
  }
}

export default App;
