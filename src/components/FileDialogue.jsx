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
        return <button className="btn btn-info m-2" href="" onClick={this.handleFileSelect}>Select files</button>
    }
}
 
export default FileDialogue;