import React, { Component } from 'react';
import DataTable from './DataTable';
import './App.css';
import Search from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Homepage extends Component {
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
        <div class="btn-group" role="group" aria-label="Basic example">
          <Router forceRefresh = {true}>
            <Link to="/viewpage">
              <button type="button" class="btn btn-primary">View</button>
            </Link>
          </Router>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">View</button>
          <button type="button" class="btn btn-primary">Upload</button>
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