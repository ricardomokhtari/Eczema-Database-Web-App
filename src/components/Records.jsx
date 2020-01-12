import React, { Component } from 'react';
import Record from './Record'

//Create multiple record components depending on the number of records in state, passing values from each record in state to individual record components
class records extends Component{
    render(){
        return(
            <div>
                {this.props.records.map(record => (
                <Record key = {records.id} records = {record}>
                </Record>
            ))}
            </div>
        );
    }
}

export default records