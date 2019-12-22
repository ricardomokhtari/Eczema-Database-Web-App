import React, { Component } from 'react';
import DataTable from './DataTable';
import './Homepage.css';
import Search from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

//var serverURL = "https://servlet-1.herokuapp.com/"
var serverURL = "http://localhost:8080/LectureServlet/"

class Homepage extends Component {
  state = {
    id: null, 
    Sex: null, 
    DOB: null, 
    latestScore: null, 
    lastUpdated: null
  };

  constructor(props) {
    super(props);
    this.handleGet = this.handleGet.bind(this);
  }

  // make a GET request for the table info as soon as page opens
  componentDidMount(){
    this.handleGet();
  }

  // make GET request to the server
  async handleGet(){
    axios.get(serverURL).then(({data}) => {
        this.setState({
          id: data.id,
          Sex: data.sex,
          DOB: data.DOB,
          latestScore: data.latestSeverityScore,
          lastUpdated: data.lastUpdated
        });
    }).catch(error => {
        console.log(error.response)
    })
  }

  render() {
    const headings = [
      'Patient id',
      'Sex',
      'Date of Birth',
      'Latest Severity Score',
      'Last Updated',
      'Actions'
    ];

    const rows = [
      [
        this.state.id,
        this.state.Sex,
        this.state.DOB,
        this.state.latestScore,
        this.state.lastUpdated,
        <div className="btn-group" role="group" aria-label="Basic example">
          <Router forceRefresh = {true}>
            <Link to="/viewpage">
              <button type="button" className="btn btn-primary">View</button>
            </Link>
          </Router>
          <Router forceRefresh = {true}>
            <Link to="/upload">
              <button type="button" className="btn btn-primary">Upload</button>
            </Link>
          </Router>
        </div>
      ]
    ];

    return (
      <React.Fragment>
        <div className = "TopBar">
          <Search/>
        </div>
        <div className = "App-header">
          <DataTable headings = {headings} rows = {rows}></DataTable>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;