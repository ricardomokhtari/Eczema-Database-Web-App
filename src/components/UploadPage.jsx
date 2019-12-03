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
        score: ""
    };

    constructor(props){
        super(props);
        this.calculateScore = this.calculateScore.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    calculateScore(){
        const Erythema = parseInt(this.getRadioVal(document.getElementById('ErythemaInput'), 'ErythemaScoreInput'));
        const Edema = parseInt(this.getRadioVal(document.getElementById('EdemaInput'), 'EdemaScoreInput'));
        const Excoriation = parseInt(this.getRadioVal(document.getElementById('ExcoriationInput'), 'ExcoriationScoreInput'));
        const Lichenification = parseInt(this.getRadioVal(document.getElementById('LichenificationInput'), 'LichenificationScoreInput'));
        const AreaScore = parseInt(this.getRadioVal(document.getElementById('AreaScoreInput'), 'AreaScoreScoreInput'));
        
        if (Erythema >= 0 && Erythema <= 3 && Edema >= 0 && Edema <= 3 && Excoriation >= 0 && Excoriation <= 3
            && Lichenification >= 0 && Lichenification <= 3 && AreaScore >= 0 && Erythema <= 6) {
                const total = Erythema + Edema + Excoriation + Lichenification + AreaScore;
                this.setState({score: total});
        } else {
            this.setState({score: "A value is incorrect"});
        }
    }

    getRadioVal(form, name) {
        var val;
        // get list of radio buttons with specified name
        var radios = form.elements[name];
        
        // loop through list of radio buttons
        for (var i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) { // radio checked?
                val = radios[i].value; // if so, hold its value in val
                break; // and break out of for loop
            }
        }
        return val; // return value of checked radio or undefined if none checked
    }
    

    // template POST requst, untested
    handleUpload() {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('POST', 'put our URL here')
        // send the request
        xhr.send(JSON.stringify({data: this.state.score}))
        console.log("button clicked")
    }

    render() { 
        const {expanded} = this.state;

        const headings = [
            'Erythema',
            'Edema',
            'Excoriation',
            'Lichenification',
            'Area Score',
        ];
      
        const rows = [
            [
                <form id="ErythemaInput">
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Erythema0" value = "0" name="ErythemaScoreInput"/>
                        <label class="custom-control-label" for="Erythema0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Erythema1" value = "1" name="ErythemaScoreInput"/>
                        <label class="custom-control-label" for="Erythema1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Erythema2" value = "2" name="ErythemaScoreInput"/>
                        <label class="custom-control-label" for="Erythema2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Erythema3" value = "3" name="ErythemaScoreInput"/>
                        <label class="custom-control-label" for="Erythema3">3</label>
                    </div>
                </form>,
                <form id="EdemaInput">
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Edema0" value = "0" name="EdemaScoreInput"/>
                        <label class="custom-control-label" for="Edema0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Edema1" value = "1" name="EdemaScoreInput"/>
                        <label class="custom-control-label" for="Edema1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Edema2" value = "2" name="EdemaScoreInput"/>
                        <label class="custom-control-label" for="Edema2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Edema3" value = "3" name="EdemaScoreInput"/>
                        <label class="custom-control-label" for="Edema3">3</label>
                    </div>
                </form>,
                <form id="ExcoriationInput">
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Excoriation0" value = "0" name="ExcoriationScoreInput"/>
                        <label class="custom-control-label" for="Excoriation0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Excoriation1" value = "1" name="ExcoriationScoreInput"/>
                        <label class="custom-control-label" for="Excoriation1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Excoriation2" value = "2" name="ExcoriationScoreInput"/>
                        <label class="custom-control-label" for="Excoriation2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Excoriation3" value = "3" name="ExcoriationScoreInput"/>
                        <label class="custom-control-label" for="Excoriation3">3</label>
                    </div>
                </form>,
                <form id="LichenificationInput">
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Lichenification0" value = "0" name="LichenificationScoreInput"/>
                        <label class="custom-control-label" for="Lichenification0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Lichenification1" value = "1" name="LichenificationScoreInput"/>
                        <label class="custom-control-label" for="Lichenification1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Lichenification2" value = "2" name="LichenificationScoreInput"/>
                        <label class="custom-control-label" for="Lichenification2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="Lichenification3" value = "3" name="LichenificationScoreInput"/>
                        <label class="custom-control-label" for="Lichenification3">3</label>
                    </div>
                </form>,
                <form id="AreaScoreInput">
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore0" value = "0" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore1" value = "1" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore2" value = "2" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore3" value = "3" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore3">3</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore4" value = "4" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore4">4</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore5" value = "5" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore5">5</label>
                    </div>
                </form>
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
                    <div>
                        <button onClick = {this.handleUpload} className = "btn btn-info m-2">Upload Image and Score</button>
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