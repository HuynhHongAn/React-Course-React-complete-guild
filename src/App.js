import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = ({
    persons: [
      {name: "Andrew", age: "22"},
      {name: "Bob", age: "25"},
      {name: "Charlos", age: "32"}
    ],
    someOtherState: 'some other state',
    showPersons: false
   
  });

  switchNameHandler = (changedName) => {
    // console.log("Clicked!");
    //DONT DO THIS: this.state.persons[0].name = "Author";
    this.setState({
      persons: [
        {name: changedName, age: "22"},
        {name: "B", age: "25"},
        {name: "C", age: "32"}
      ]
    })
  }

  togglePersonHandler =  () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
  
    if (this.state.showPersons === true){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}>Hello world!</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> 
        </div>
      )
    }
  
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button> 
        {persons}
        
      </div>
    );
  }
  
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m Andrew'));
}

export default App;
