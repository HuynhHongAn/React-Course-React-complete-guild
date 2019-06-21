import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = ({
    persons: [
      {id: "asd", name: "Andrew", age: "22"},
      {id: "asd1", name: "Bob", age: "25"},
      {id: "asd2", name: "Charlos", age: "32"}
    ],
    someOtherState: 'some other state',
    showPersons: false
   
  });

  deletePersonHandler(personIndex) {
    // const persons = this.state.persons.split();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
            />
          })}
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
