import React, { Component } from 'react';
import DataTable from './components/DataTable';
import './App.css';
import Search from './components/Search';

class App extends Component {
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
        <div>
          <Search/>
        </div>
        <div className = "App-header">
          <DataTable headings = {headings} rows = {rows}></DataTable>
        </div>
      </React.Fragment>
    );
  }
}

export default App;