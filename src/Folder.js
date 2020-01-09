import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Folder extends Component {
    constructor(props){
	super(props);
	this.state = {
	    toggle: false
	};
	this.toggleChange = this.toggleChange.bind(this);
    }

    toggleChange() {
	if (this.state.toggle === false){
	    this.setState({toggle: true});
	}
	else {
	    this.setState({toggle: false});
	}
    }
    
    render() {
	if (this.state.toggle == true) {
	    return(
	    	    <div id="folder">
		    <h1>{this.props.name}</h1>
		    <ul>
		    <li>File1</li>
		    <li>File2</li>
		    <li>File3</li>
		    </ul>
		    <button type="button" onClick={this.toggleChange}>TOGGLE</button>
		    </div>
	    );
	}
	else {
	    return (
		    <div id="folder">
		    <h1>{this.props.name}</h1>
		    <button type="button" onClick={this.toggleChange}>TOGGLE</button>
		</div>
	    );
	}
    }

};

export default Folder;
