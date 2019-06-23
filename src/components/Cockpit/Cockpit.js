import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
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
            <h1>Hi, I am react app</h1>
            <p className={asignedClasses.join(' ')}>This is really work!</p>
            <button className={buttonClass} onClick={props.clicked}>Toggle persons</button> 
        </div>
        
        
    );
}

export default cockpit;