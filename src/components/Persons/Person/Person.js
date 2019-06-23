import React from 'react';
import classes from './Person.css';

const person = (props) => {
    console.log('[Person.js] is rendering')
    return (
        
        <div className={classes.person}>
            <input onChange={props.changed} value={props.name}></input>
            <p onClick={props.click}>I'm a {props.name}! I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default person;