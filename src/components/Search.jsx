import React, { Component } from 'react';

class Search extends Component {
    render() { 
        return (
            <div className="input-group">
                <div className="active-cyan-3 active-cyan-4">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                </div>
                <span className="input-group-btn">
                    <button className="btn btn-success">Add New Patient</button>
                </span>
            </div>
        );
    }
}
export default Search;