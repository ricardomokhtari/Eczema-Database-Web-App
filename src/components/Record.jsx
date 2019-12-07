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
            ['1',
            '2',
            '3',
            '2',
            '3']
        ];

        return(
            <React.Fragment>
                <div className="Inline">
                    <div>
                        Date Uploaded:
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <DataTable headings = {headings} rows = {rows}></DataTable>
                </div>
                <div className="Inline">
                    <div>
                        Score: 
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