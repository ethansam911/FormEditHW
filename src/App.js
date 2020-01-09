import React, { Component } from 'react';
import './App.css';
import FormEdit from './formEdit';  
import Folder from './Folder';

class App extends Component {
  render() {
      return (
	  <div id="container">
	      <FormEdit/>
	      <Folder name="Home"/>
	      </div>
    
    );
  }
}

export default App;
