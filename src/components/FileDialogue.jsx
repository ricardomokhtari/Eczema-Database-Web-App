// Reference 3 - taken from https://codepen.io/rkotze/pen/zjRXYr

import React, { Component } from 'react';

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class FileDialogue extends Component {
    componentDidMount(){
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();  
    }

    render(){
        return (
            <React.Fragment>
                <button className="btn btn-info m-2" href="" onClick={this.handleFileSelect}>Select Image</button>
            </React.Fragment>
        );
    }
}
 
export default FileDialogue;

// end of reference 3