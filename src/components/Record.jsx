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
            [this.props.records.patientid,
            this.props.records.patientid,
            this.props.records.patientid,
            this.props.records.patientid,
            this.props.records.patientid]
        ];

        return(
            <React.Fragment>
                <div className="Inline">
                    <div>
                        Date Uploaded: {this.props.records.DOB}
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <DataTable headings = {headings} rows = {rows}></DataTable>
                </div>
                <div className="Inline">
                    <div>
                        Score: {this.props.records.latestSeverityScore}
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="Inline">
                    <div>
                        Comments: 
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