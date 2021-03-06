import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import widthClassStateful from '../../../hoc/widthClassStateful'
import { AuthContext } from '../../../containers/App'

// functional component es6
class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] inside constructor')
        this.inputElementFocus = React.createRef()
    }

    componentWillMount() {
        // it is being deprecated this method!!
        console.log('[Person.js] inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount')
        if (this.props.position === 0) this.inputElementFocus.current.focus()

    }

    componentWillUnmount() {
        console.log('[Person.js] inside componentWillUnmount')
    }

    render() {
        console.log('[Person.js] inside render')
        console.info(this.props)

        // destructuring
        const {
            name,
            age,
            click,
            changed,
            authenticated,
            children
        } = this.props
        
        // dynamic content
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated with AuthContext</p> : null }
                </AuthContext.Consumer>
                { authenticated ? <p>I am authenticated</p> : null }
                <p onClick={click}>I am {name} and I am {age} years old</p>
                <p>{children}</p>
                <input 
                    ref={ this.inputElementFocus }
                    type="text" 
                    onChange={changed} 
                    value={name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default widthClassStateful(Person, classes.Person)
