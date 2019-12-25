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

// var serverURL = "https://servlet-1.herokuapp.com/"
var serverURL = "http://localhost:8080/LectureServlet/"

var rows = [];

class Homepage extends Component {
  // State of the homepage component is just the list
  // of patients and their info
  // Therefore the state just contains an empty array, which is filled later
  state = {
    patients: [null]
  };

  // we need to bind this in the handleget method to the homepage
  // component otherwise it returns a reference to the window object
  // instead
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
      // each line comes in as string, we parse the lines
      // using split
      const lines = data.split("\n");

      // make an empty array
      var list = []

      // since the data comes in as a string, we have to convert the
      // string to JSON to access the patient fields.
      // we use JSON.parse to do this
      // we create a patient object for each input line and add it to a list
      for(var i=0;i<lines.length-1;i++){
        var patient = JSON.parse(lines[i]);
        list.push(patient);
      }

      // here we create the rows of the table, each contains the info about
      // each patient and the action buttons
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

        // we set the state of the homepage component to the rows we just made
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