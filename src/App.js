import React from 'react';
import logo from './logo.svg';
import picture from './output_2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture} className="App-logo" alt="logo" />
        <p>
          <code>Has this change been made</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
