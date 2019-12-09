import React, { Component } from 'react';
import './NewPatientPage.css';
import axios from 'axios';


//var serverURL = "https://servlet-1.herokuapp.com/"
var serverURL = "http://localhost:8080/LectureServlet/"

class NewPatientPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        firstname: null,
        lastname: null,
        sex: null,
        ethnicity: null,
        dateofbirth: null
      };
      this.handlePost = this.handlePost.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }

    handlePost(){
        axios.post(serverURL, this.state).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    }

    handleUpload(e){
        this.setState({
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value,
            sex: this.refs.sex.value,
            ethnicity: this.refs.ethnicity.value,
            dateofbirth: this.refs.dateofbirth.value
        }, () => {
            this.handlePost();
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
                    <button className = "btn btn-info m-2" onClick={this.handleUpload}>Add Patient</button>
                </div>
              </div>
            </React.Fragment>
        );
    }
}

export default NewPatientPage;
