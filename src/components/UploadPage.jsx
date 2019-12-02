import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';
import './UploadPage.css';
import DataTable from './DataTable';
import './DataTable.css';
import FileDialogue from './FileDialogue';

class UploadPage extends Component {
    state = {
        expanded: false,
        score: "Enter fields to calculate"
    };

    constructor(props){
        super(props);
        this.calculateScore = this.calculateScore.bind(this);
    }

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    calculateScore(){
        const Erythema = parseInt(document.getElementById("Erythema").value);
        const Edema = parseInt(document.getElementById("Edema").value);
        const Excoriation = parseInt(document.getElementById("Excoriation").value);
        const Lichenification = parseInt(document.getElementById("Lichenification").value);
        const AreaScore = parseInt(document.getElementById("AreaScore").value);

        if (Erythema >= 0 && Erythema <= 3 && Edema >= 0 && Edema <= 3 && Excoriation >= 0 && Excoriation <= 3
            && Lichenification >= 0 && Lichenification <= 3 && AreaScore >= 0 && Erythema <= 6) {
                const total = Erythema + Edema + Excoriation + Lichenification + AreaScore;
                this.setState({score: total});
        } else {
            this.setState({score: "A value is incorrect"});
        }
        
    }

    render() { 
        const {expanded} = this.state;

        const headings = [
            'Erythema',
            'Edema',
            'Excoriation',
            'Lichenification',
            'Area Score',
            ''
        ];
      
        const rows = [
            [
                <div>
                    <input id="Erythema" maxLength = "1" className = "TableInput" type="text"></input>
                </div>,
                <div>
                    <input id="Edema" maxLength = "1" className = "TableInput" type="text"></input>
                </div>,
                <div>
                    <input id="Excoriation" maxLength = "1" className = "TableInput" type="text"></input>
                </div>,
                <div>
                    <input id="Lichenification" maxLength = "1" className = "TableInput" type="text"></input>
                </div>,
                <div>
                    <input id="AreaScore" maxLength = "1" className = "TableInput" type="text"></input>
                </div>
            ]
        ];

        return (
            <React.Fragment>
                <div 
                 style={{
                    marginLeft: expanded ? 240 : 64,
                    padding: '15px 20px 0 20px'
                }}>
                    <div>
                        <h1>Upload</h1>
                    </div>
                    <div className = "Inline">
                        <h5>Date Taken</h5>
                        <input className = "Input" type="text" placeholder = "eg. 24/11/2019"/>
                    </div>
                    <div className = "Inline">
                        <h5>Region</h5>
                        <input className = "Input" type="text" placeholder = "eg. Head"/>
                    </div>
                    <div>
                        <DataTable headings = {headings} rows = {rows}></DataTable>
                    </div>
                    <div>
                        <button onClick = {this.calculateScore} className = "btn btn-info m-2">Calculate total score</button>
                    </div>
                    <div className = "Inline">
                        <h5>Score: {this.state.score}</h5>
                    </div>
                    <div>
                        <FileDialogue></FileDialogue>                  
                    </div>
                </div>

                <div>
                    <SideNav onToggle = {this.onToggle}>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="charts">
                            <NavItem eventKey="charts">
                                <NavIcon>
                                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Upload
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Records
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
                
        </React.Fragment>
        );
    }
}
 
export default UploadPage;