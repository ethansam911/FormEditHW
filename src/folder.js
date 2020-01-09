import React, { Component } from 'react';

class Folder extends Component {

    constructor()
    {
        super();

        this.state = 
        {
        //Files are currently hidden
        showFiles: false
        }
    }

    toggleFiles = () =>
    {
        this.setState
        ({
            showFiles: true 
        });
    }
    render() 
    {
        if(this.state.showFiles)
        {
            return(
                <div>
                    <h1> Home </h1>
                    <button onClick={this.toggleFiles}> show/hide</button>
                </div>
            )
        }
        else
        {
        return(
            <div>
                <h1>Home</h1>
                <ul>
                    <li>File 1</li>
                    <li>File 2</li>
                    <li>File 3</li>
                </ul>
                <div>
                    <button onClick={this.toggleFiles}>toggle</button>    
                </div> 
            </div>
            );
        }
    }
}



//Ensure the visibility of this file
export default Folder;