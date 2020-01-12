import React, { Component } from 'react';
import Logo from './Tanaka_logo.png';
import './loginpage.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// var serverURL = "http://localhost:8080/LectureServlet/login";
var serverURL = "https://servlet-1.herokuapp.com/login";

class LoginPage extends Component {
    state = {
        email: "",
        password: ""
    }

    constructor(props){
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    async handlePost(){
        axios.post(serverURL,JSON.stringify(this.state),'Access-Control-Allow-Origin','*').then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    }

    handleUpload(){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        this.setState(
            {
                email: email, 
                password: password
            }, 
            () => {
            this.handlePost()
        })
    }

    render() { 
        return (
            <React.Fragment>
                <div className = "login-style">
                    <div>
                        <img className = "logo" src = {Logo} alt = "logo"></img>
                    </div>
                    <div className = "inputs">
                        <input type="text" ref="email" placeholder = "Email"/>
                    </div>
                    <div className = "inputs">
                        <input type="password" ref="password" placeholder = "Password"/>
                    </div>
                    <div className = "inputs">
                        <Router forceRefresh = {true}>
                            <Link to="/">
                                <button className = "btn btn-info m-2" onClick = {this.handleUpload}>Login</button>
                            </Link>
                        </Router>
                    </div>
                    <div className = "inputs">
                        <Router forceRefresh = {true}>
                            <Link to="/create">
                                <button className = "btn btn-info m-2">Create New Account</button>
                            </Link>
                        </Router>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LoginPage;