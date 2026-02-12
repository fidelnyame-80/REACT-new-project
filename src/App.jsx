import React from 'react';
import './App.css';


class WelcomeComponent extends React.Component {
  render() {
    const { name} = this.props;

    return (
      <h1>
        {name} is awesome, React works!!!!
      </h1>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* Passing the prop 'name' to WelcomeComponent */}
      <WelcomeComponent name="Codetrain Ghana" />
    </div>
  );
}

export default App; 