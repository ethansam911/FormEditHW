import React, { Component } from 'react';
import './App.css';
import FormEdit from './formEdit'; 
import Folder from './folder' 

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {}
  }
  render() {
    return (
      <div>
        <br />
        <FormEdit />
        <br/><br/>
        <Folder/>
      </div>

    );
  }
}

export default App;
