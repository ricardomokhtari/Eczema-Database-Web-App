import React, { Component } from 'react';

class Search extends Component {
    render() { 
        return (
            <div>
                <span><input class="form-control" type="text" placeholder="Search" aria-label="Search"></input></span>
                <button className = "btn btn-success btn-m m-2">Add New Patient</button>
            </div>
        );
    }
}
export default Search;