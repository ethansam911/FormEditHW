import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Decrement is a component
class formEdit extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            name: 'David'
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    render() {
        return <div>
            <input type='text' value={this.state.name} onChange={this.handleNameChange} />
        </div>
    }
    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }
}





export default FormEdit;