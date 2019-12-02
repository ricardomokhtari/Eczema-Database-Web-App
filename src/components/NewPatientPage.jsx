import React, { Component } from 'react';
import './NewPatientPage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class UploadPage extends Component {
    render() {
        const {expanded} = this.state;
        return (
            <React.Fragment>
                    <div>
                        <h1>New Patient</h1>
                    </div>
                    <div className = "Inline">
                        <h5>First Name</h5>
                        <input className = "Input" type="text" placeholder = "John"/>
                    </div>
                    <div className = "Inline">
                        <h5>Last Name</h5>
                        <input className = "Input" type="text" placeholder = "Smith"/>
                    </div>
                    <div className = "Inline">
                        <h5>Sex</h5>
                        <input className = "Input" type="text" placeholder = "M"/>
                    </div>
                    <div className = "Inline">
                        <h5>Ethnicity</h5>
                        <input className = "Input" type="text" placeholder = "Caucasian"/>
                    </div>
                    <div className = "Inline">
                        <h5>Date of Birth</h5>
                        <input className = "Input" type="text" placeholder = "1/1/1990"/>
                    </div>
                    <div>
                        <button className = "btn btn-info m-2">Add Patient</button>
                    </div>
                </div>
        </React.Fragment>
        );
    }
}

export default UploadPage;
