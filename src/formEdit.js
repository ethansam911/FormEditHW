import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Decrement is a component
class FormEdit extends Component 
{

    constructor(props) {
        super(props);
        this.state = {
            view_edit: false,
            first_name: '',
            last_name: '',
	    temp_first: '',
	    temp_last: '',
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({first_name: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({ last_name: event.target.value });
    }

    save(event)
    {
        this.setState({view_edit: false});
    }

    edit() {
	this.setState({ temp_first: this.state.first_name });
	this.setState({ temp_last: this.state.last_name });
        this.setState({view_edit: true});
    }

    cancel() {
        this.setState({
            first_name: this.state.temp_first,
            last_name: this.state.temp_last
        });
	this.setState({view_edit: false});
    }

    render() 
    {   
        if(this.state.view_edit === true){
            return (
                <div>
                    <label>
                        First name:
                <input type="text" value={this.state.first_name} onChange={this.handleFirstNameChange} name="first_name" />
                    </label>

                    <label>
                        Last name:
                <input type="text" value={this.state.last_name} onChange={this.handleLastNameChange} name="last_name" />
                    </label>
                    <input type="button" onClick={this.save} value="save" />
                    <input type="button" onClick={this.cancel} value="cancel" />
                </div>

            );
        }
        else{
            return (
            <div>
                <p>First name: {this.state.first_name}</p> <br/>
                <p>Last name: {this.state.last_name}</p>
                <button type="button" onClick={this.edit}>EDIT ME!</button>
            </div>
            );
        }
    }
};

FormEdit.propType =
{
    first_name: PropTypes.string,
    last_name: PropTypes.string
}



export default FormEdit;
