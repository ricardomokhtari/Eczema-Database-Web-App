import React, { Component } from 'react';

class Search extends Component {
    render() { 
        return (
            <div>
                <span>
                    <input class="form-control" type="text" width="50px" placeholder="Search" aria-label="Search"></input>
                    <button className = "btn btn-success btn-m m-2">Add New Patient</button>
                </span>
            </div>
        );
    }
}
export default Search;