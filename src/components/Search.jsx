import React, { Component } from 'react';

class Search extends Component {
    render() { 
        return (
            <div className="input-group">
                <input class="form-control" type="text" placeholder="Search patients" aria-label="Search"></input>
                <span className="input-group-btn">
                    <button className="btn btn-success">Add New Patient</button>
                </span>
            </div>
        );
    }
}
export default Search;