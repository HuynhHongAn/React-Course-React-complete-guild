import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="person" style={style}>
            <input onChange={props.changed} value={props.name}></input>
            <p onClick={props.click}>I'm a {props.name}! I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default Radium(person);