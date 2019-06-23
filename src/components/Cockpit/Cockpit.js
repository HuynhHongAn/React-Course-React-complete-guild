import React, {useEffect} from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

  useEffect (()=>{
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      // alert("Send data from cloud");
    }, 1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect.');
    }
  }, []);

  useEffect (()=>{
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect.');
    }
  })

  let asignedClasses = [];
  let buttonClass = '';

  if (props.showPersons){
      buttonClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    asignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1){
    asignedClasses.push(classes.bold);
  }
  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={asignedClasses.join(' ')}>This is really work!</p>
          <button className={buttonClass} onClick={props.clicked}>Toggle persons</button> 
      </div>
      
      
  );
}

export default cockpit;