import React, { Component } from 'react';
import classes from './App.css';
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    let person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    let persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

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
    let persons = null;
    let buttonClass = '';
  
    if (this.state.showPersons === true){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
      buttonClass = classes.Red;
    }

    let asignedClasses = [];
    if (this.state.persons.length <= 2) {
      asignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      asignedClasses.push(classes.bold);
    }
  
    return (

      <div className={classes.App}>
        <h1>Hi, I am react app</h1>
        <p className={asignedClasses.join(' ')}>This is really work!</p>
        <button className={buttonClass} onClick={this.togglePersonHandler}>Toggle persons</button> 
      {persons}
      </div>
      
    );
  }
  
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m Andrew'));
}

export default App;
