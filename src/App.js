import React from 'react';
import picture from './output_2.png';
import './App.css';
import createTable from './Helpers/database-helper';

function App() {

  createTable();

  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
