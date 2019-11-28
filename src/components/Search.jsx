import React, { Component } from 'react';

class Search extends Component {
    render() { 
        return (
            <div className="input-group">
                    <div class="active-purple-3 active-purple-4 mb-4">
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    </div>                
                    <span className="input-group-btn">
                    <button className="btn btn-info btn-m">Add New Patient</button>
                </span>
            </div>
        );
    }
}
export default Search;