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

var rows = [];

class Homepage extends Component {
  state = {
    patients: [null]
  };

  constructor(props) {
    super(props);
    this.handleGet = this.handleGet.bind(this);  
  }

  // make a GET request for the table info as soon as page opens
  componentWillMount(){
    this.handleGet();
  }

  // make GET request to the server
  async handleGet(){
    axios.get(serverURL).then(({data}) => {
      const lines = data.split("\n");

      var list = []

      for(var i=0;i<lines.length-1;i++){
        var patient = JSON.parse(lines[i]);
        list.push(patient);
      }

      for(var i = 0; i<list.length; i++){
        rows.push(
          [
            String(list[i].id), 
            String(list[i].sex), 
            String(list[i].DOB), 
            String(list[i].latestSeverityScore), 
            String(list[i].lastUpdated),
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
          ]);
        }

        this.setState({patients: rows});

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