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

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.handleGet = this.handleGet.bind(this);
  }

  // template GET request, untested
  handleGet(){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'put our url here')
    // send the request
    xhr.send()
    console.log("button clicked")
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
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <Router forceRefresh = {true}>
            <Link to="/viewpage">
              <button onClick = {this.handleGet} type="button" className="btn btn-primary">View</button>
            </Link>
          </Router>
          <Router forceRefresh = {true}>
            <Link to="/upload">
              <button type="button" className="btn btn-primary">Upload</button>
            </Link>
          </Router>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
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