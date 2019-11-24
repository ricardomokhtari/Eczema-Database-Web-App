import React, { Component } from 'react';
import picture from './Tanaka_logo.png';
import './App.css';
import createTable from './Helpers/database-helper';
import DataTable from './components/DataTable';

class App extends Component {

  render () {
    return (
      <React.Fragment>
        <DataTable/>
      </React.Fragment>
    );
  }
}
 
export default App;
