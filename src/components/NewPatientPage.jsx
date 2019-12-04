import React, { Component } from 'react';
import './NewPatientPage.css';

class NewPatientPage extends Component {


    constructor(props){
      super(props);
      this.state = {
        firstame: null,
        lastname: null,
        sex: null,
        ethinicity: null,
        dateofbirth: null
      };
      this.setFields = this.setFields.bind(this);
    }

    setFields(e){
      this.setState({
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      sex: this.refs.sex.value,
      ethnicity: this.refs.ethnicity.value,
      dateofbirth: this.refs.dateofbirth.value
      });
    }

    render() {
        return (
            <React.Fragment>
              <div
               style={{
                  marginLeft: 64,
                  padding: '15px 20px 0 20px'
              }}>
                <div>
                    <h1>New Patient</h1>
                </div>
                <div className = "Inline">
                    <h5>First Name</h5>
                    <input className = "Input" type="text" ref="firstname" placeholder = "John"/>
                </div>
                <div className = "Inline">
                    <h5>Last Name</h5>
                    <input className = "Input" type="text" ref="lastname" placeholder = "Smith"/>
                </div>
                <div className = "Inline">
                    <h5>Sex</h5>
                    <input className = "Input" type="text" ref="sex" placeholder = "M"/>
                </div>
                <div className = "Inline">
                    <h5>Ethnicity</h5>
                    <input className = "Input" type="text" ref="ethnicity" placeholder = "Caucasian"/>
                </div>
                <div className = "Inline">
                    <h5>Date of Birth</h5>
                    <input className = "Input" type="text" ref="dateofbirth" placeholder = "1/1/1990"/>
                </div>
                <div>
                    <button className = "btn btn-info m-2" onClick={this.setFields}>Add Patient</button>
                </div>
              </div>
            </React.Fragment>
        );
    }
}

export default NewPatientPage;
