import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] is rendering...')
        return (
            
            <div className={classes.person}>
                <input
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
                <p onClick={this.props.click}>
                    I'm a {this.props.name}! I am {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
            </div>
            
        );
    }
    
}

export default Person;