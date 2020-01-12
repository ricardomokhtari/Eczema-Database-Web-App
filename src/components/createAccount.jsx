import React, { Component } from 'react';
import axios from 'axios';

var serverURL = "http://localhost:8080/LectureServlet/create";

class CreateAccount extends Component {
    state = { 
        firstname: null,
        surname: null,
        email: null,
        password: null,
        type: null
    }

    async handlePost(){
        axios.post(serverURL,JSON.stringify(this.state),'Access-Control-Allow-Origin','*').then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    }

    handleUpload(){
        const firstname = this.refs.firstname.value;
        const surname = this.refs.surname.value;
        const email = this.refs.email.value;
        const temp = this.refs.password.value;
        const passwordCheck = this.refs.passwordCheck.value;
        if(temp === passwordCheck){
            var password = temp;
        }
        // get all input fields in the dropdown
        const types = document.getElementById('typeInput');
        //extract value of the selected region
        const selectedType = types.options[types.selectedIndex].value;
        this.setState(
            {
                firstname: firstname,
                surname: surname,
                email: email,
                password: password,
                type: selectedType
            }, 
            () => {
            this.handlePost()
        })
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
                        <h1>New User</h1>
                    </div>
                    <div className = "Inline">
                        <h5>First Name</h5>
                        <input className = "Input" type="text" ref="firstname" placeholder = "John"/>
                    </div>
                    <div className = "Inline">
                        <h5>Surname</h5>
                        <input className = "Input" type="text" ref="surname" placeholder = "Smith"/>
                    </div>
                    <div className = "Inline">
                        <h5>Email</h5>
                        <input className = "Input" type="text" ref="email" placeholder = "jSmith@gmail.com"/>
                    </div>
                    <div className = "Inline">
                        <h5>Password</h5>
                        <input className = "Input" type="password" ref="password"/>
                    </div>
                    <div className = "Inline">
                        <h5>Re-Enter Password</h5>
                        <input className = "Input" type="password" ref="passwordCheck"/>
                    </div>
                    <div className = "Inline">
                        <h5>Are you a Clinician or a Researcher?</h5>
                        <div>
                            <select className = "Input" id = "typeInput">
                                <option value="Clinician" id="clinician">Clinician</option>
                                <option value="Researcher" id="researcher">Researcher</option>
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