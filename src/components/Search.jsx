import React, { Component } from 'react';

class Search extends Component {
    render() { 
        return (
            <div class="md-form mt-0">
                <span>
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    <button className = "btn btn-success btn-m m-2"></button>
                    <button className = "btn btn-success btn-m m-2"></button>
                </span>
            </div>
        );
    }
}
 
export default Search;