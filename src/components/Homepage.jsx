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

class Homepage extends Component {

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
        console.log(data)
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

    const rows = [
      [
        '1647',
        'M',
        '01/01/1985',
        '56',
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
        'F',
        '12/03/1995',
        '34',
        '22/09/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '7483',
        'M',
        '02/12/1956',
        '24',
        '12/04/2019',
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
        '17/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '4328',
        'M',
        '01/01/1985',
        '65',
        '09/11/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '1297',
        'F',
        '02/02/1957',
        '36',
        '24/12/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '3829',
        'F',
        '01/03/1991',
        '56',
        '03/03/2019',
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">View</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      ],
      [
        '5128',
        'M',
        '05/05/1985',
        '65',
        '27/03/2017',
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