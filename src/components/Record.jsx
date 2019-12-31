import React, { Component } from 'react';
import DataTable from './DataTable';
import './DataTable.css';

class Record extends Component{
    render(){
        const headings = [
            'Erythema',
            'Edema',
            'Excoriation',
            'Lichenification',
            'Area Score',
        ];

        const rows = [
            [this.props.records.erythemascore,
            this.props.records.edemascore,
            this.props.records.exclorationscore,
            this.props.records.lichenificationscore,
            this.props.records.areascore]
        ];

        return(
            <React.Fragment>
                <div className="Inline">
                    <div>
                        Date Uploaded: {this.props.records.date}
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <DataTable headings = {headings} rows = {rows}></DataTable>
                </div>
                <div className="Inline">
                    <div>
                        Score: {this.props.records.totalscore}
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="Inline">
                    <div>
                        Comments: {this.props.records.comments}
                    </div>
                    <div>
                        -
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Record