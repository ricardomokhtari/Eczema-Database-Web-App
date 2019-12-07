import React, { Component } from 'react';
import Record from './Record'

class records extends Component{
    render(){
        return(
            <div>
                {this.props.records.map(record => (
                <Record key = {records.index} records = {record}>
                </Record>
            ))}
            </div>
        );
    }
}

export default records