import React, { Component } from 'react';
import DataTable from './components/DataTable';
import './App.css';

class App extends Component {
  render() {

    const headings = [
      'Patient id',
      'Sex',
      'Date of Birth',
      'Latest Severity Score',
      'Last Updated'
    ];

    const rows = [
      [
        '1234',
        'M',
        '01/01/1985',
        '65',
        '24/11/2019',
      ]
    ];

    return (
      <React.Fragment>
        <DataTable headings = {headings} rows = {rows}></DataTable>
      </React.Fragment>
    );
  }
}

export default App;