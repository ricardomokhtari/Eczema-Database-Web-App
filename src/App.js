import React, { Component } from 'react';
import picture from './Tanaka_logo.png';
import './App.css';
import createTable from './Helpers/database-helper';

class App extends Component {
  componentDidMount(){
    //createTable();
  }

  render () {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={picture} className="App-logo" alt="logo" />
          </header>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
