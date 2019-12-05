import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Search extends Component {
    render() {
        return (
            <div className="input-group">
                    <div className="active-purple-3 active-purple-4 mb-4">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    </div>                
                    <span className="input-group-btn">
                    <Router forceRefresh = {true}>
                      <Link to="/newpatient">
                        <button className="btn btn-info btn-m">Add New Patient</button>
                      </Link>
                    </Router>
                </span>
            </div>
        );
    }
}
export default Search;
