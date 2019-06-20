import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
  const [personState, setPersonState] = useState ({
    persons: [
      {name: "Andrew", age: "22"},
      {name: "Bob", age: "25"},
      {name: "Charlos", age: "32"}
    ]
  });

  const [otherState, setOtherState] = useState('some other state');

  const switchNameHandler = (changedName) => {
    // console.log("Clicked!");
    //DONT DO THIS: this.state.persons[0].name = "Author";
    setPersonState({
      persons: [
        {name: changedName, age: "22"},
        {name: "B", age: "25"},
        {name: "C", age: "32"}
      ]
    })
  }
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <button style={style} onClick={() => switchNameHandler('Hello')}>Switch Name</button> 
      {/* recommand using bind() */}
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}>Hello world!</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m Andrew'));
}

export default app;
