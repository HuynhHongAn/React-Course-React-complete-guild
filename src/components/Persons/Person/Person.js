import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js] is rendering...')
        return (
            
            // <div className={classes.person}>
            <Aux>
                <input
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
                <p onClick={this.props.click}>
                    I'm a {this.props.name}! I am {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
            </Aux>
            // </div>
            
        );
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);