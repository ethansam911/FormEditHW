import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Decrement is a component
class FormEdit extends Component 
{


    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({
            first_name: event.target.value
        });
    }

    handleLastNameChange(event) {
        this.setState({
            last_name: event.target.value
        });
    }

    save(event)
    {
        this.setState()
    }

    edit() {
        return (
            <form>
                <label>
                    First name:
                <input type="text" value="Emily" name="first_name" />
                </label>

                <label>
                    Last name:
                <input type="text" value="Fang" name="last_name" />
                </label>
                <input type="submit" onClick={ this.save()} value="Submit" />
            </form>

        );
    }

    render() 
    {
        return (<div>
            <p>Hello World!</p>
        </div>);
    }
};

FormEdit.propType =
{
    first_name: PropTypes.string,
    last_name: PropTypes.string
}



export default FormEdit;