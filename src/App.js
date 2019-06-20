import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Andrew", age: "22"},
      {name: "Bob", age: "25"},
      {name: "Charlos", age: "32"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hello world!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m Andrew'));
  }
}

export default App;
