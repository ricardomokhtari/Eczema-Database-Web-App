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
        this.handleUpload = this.handleUpload.bind(this);
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
            ''
        ];
      
        const rows = [
            [
                <div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline0" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline2">2</label>
                    </div>

                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline3" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline3">3</label>
                    </div>
                </div>,
                <div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline0" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline3" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline3">3</label>
                    </div>
                </div>,
                <div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline0" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline3" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline3">3</label>
                    </div>
                </div>,
                <div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline0" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline3" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline3">3</label>
                    </div>
                </div>,
                <div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline0" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline0">0</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline1">1</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline2">2</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline3" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline3">3</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline4" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline4">4</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultInline5" name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultInline5">5</label>
                    </div>
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