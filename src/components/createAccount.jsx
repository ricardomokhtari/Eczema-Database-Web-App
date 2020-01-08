import React, { Component } from 'react';

class CreateAccount extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div
                style={{
                    marginLeft: 64,
                    padding: '15px 20px 0 20px'
                }}>
                    <div>
                        <h1>New User</h1>
                    </div>
                    <div className = "Inline">
                        <h5>First Name</h5>
                        <input className = "Input" type="text" ref="firstname" placeholder = "John"/>
                    </div>
                    <div className = "Inline">
                        <h5>Middle Name</h5>
                        <input className = "Input" type="text" ref="middlename" placeholder = "Richard"/>
                    </div>
                    <div className = "Inline">
                        <h5>Surname</h5>
                        <input className = "Input" type="text" ref="surname" placeholder = "Smith"/>
                    </div>
                    <div className = "Inline">
                        <h5>Date of Birth</h5>
                        <input className = "Input" type="text" ref="dob" placeholder = "1/1/1990"/>
                    </div>
                    <div className = "Inline">
                        <h5>Are you a Clinician or a Researcher?</h5>
                        <div>
                            <select className = "Input">
                                <option value="Clinician" >Clinician</option>
                                <option value="Researcher" >Researcher</option>
                            </select>                    
                        </div>
                    </div>
                    <div>
                        <button className = "btn btn-info m-2" onClick={this.handleUpload}>Create Account</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CreateAccount;