import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }


  //---------------------------
  //PureComponent replace this (shouldComponentUpdate) funciton
  //---------------------------
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ){
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message: 'SnapShot!'};
  }

  // componentWillUpdate(){

  // }

  componentDidUpdate(prevProps, prevState, snapShot){ //Run after update
    console.log('[Person.js] componentDidUpdate');
    console.log(snapShot);
  }

  componentWillUnmount(){
    console.log('[Person.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] is rendering...')
    return this.props.persons.map((person, index) => {
      return (
        <Person 
          name={person.name} 
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      )
    });
  }
  
}

export default Persons;