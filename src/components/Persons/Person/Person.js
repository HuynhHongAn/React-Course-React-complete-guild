import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated); //This prop "authenticated" based on 
                                                    //the prop name in AuthContext.Provider
    }
    render() {
        console.log('[Person.js] is rendering...')
        return (
            
            // <div className={classes.person}>
            <Aux>
                {this.context.authenticated? <p>Authenticated!</p> : <p>Please login again</p>}
                <input
                    type="text" 
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
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