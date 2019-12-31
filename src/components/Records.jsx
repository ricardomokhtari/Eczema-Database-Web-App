import React, { Component } from 'react';
import Record from './Record'

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