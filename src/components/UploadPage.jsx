import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './SideNav.css';
import './UploadPage.css';
import DataTable from './DataTable';
import './DataTable.css';
import FileDialogue from './FileDialogue';
import axios from 'axios';

// uncomment next line to access cloud servlet
var serverURL = "https://servlet-1.herokuapp.com/upload"
// var serverURL = "http://localhost:8080/LectureServlet/upload"

class UploadPage extends Component {
    /*
     the state of the UploadPage component consists of:
        expanded: whether or not the side bar is expanded
        date: the date that the user enters
        region: the region that the user enters
        score: the total score that gets calculated
        preview: image preview in browser
        image: the image that the user uploads
    */

    state = {
        expanded: false,
        date: null,
        region: null,
        erythema: null,
        edema: null,
        excoriation: null,
        lichenification: null,
        areaScore: null,
        totalScore: null,
        preview: null,
        image: null
    };
    
    // binding "this" in functions to UploadPage component
    constructor(props){
        super(props);
        this.getScore = this.getScore.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    // handlePOST makes a post request with the upload page state
    handlePost(){
        axios.post(serverURL, JSON.stringify({
            date: this.state.date, 
            region: this.state.region,
            erythema: this.state.erythema,
            edema: this.state.edema,
            excoriation: this.state.excoriation,
            lichenification: this.state.lichenification,
            areaScore: this.state.areaScore, 
            totalScore: this.state.score, 
            image: this.state.image}), 'Access-Control-Allow-Origin', '*').then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    }

    // function that sets side bar to expanded if expand button clicked
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    // get image from file browser, set image field to image selected
    getImage(event){
        this.setState({image: event.target.files[0]})
        this.setState({preview: URL.createObjectURL(event.target.files[0])});
    }

    // returns date that user inputs in the date input box (as a string)
    getDate(){
        var date = document.getElementById('dateInput').value
        return date;
    }

    // returns region that user inputs in the date input box (as a string)
    getRegion(){
        // get all input fields in the dropdown
        const allRegions = document.getElementById('regionInput');
        //extract value of the selected region
        const selectedRegion = allRegions.options[allRegions.selectedIndex].value;
        return selectedRegion;
    }

    // returns region score based on user input (as a float)
    getScore(){
        // obtain the selected radio button in each column, as a float
        const Erythema = parseFloat(this.getRadioVal(document.getElementById('ErythemaInput'), 'ErythemaScoreInput'));
        const Edema = parseFloat(this.getRadioVal(document.getElementById('EdemaInput'), 'EdemaScoreInput'));
        const Excoriation = parseFloat(this.getRadioVal(document.getElementById('ExcoriationInput'), 'ExcoriationScoreInput'));
        const Lichenification = parseFloat(this.getRadioVal(document.getElementById('LichenificationInput'), 'LichenificationScoreInput'));
        const AreaScore = parseFloat(this.getRadioVal(document.getElementById('AreaScoreInput'), 'AreaScoreScoreInput'));

        // get the region input field for score multiplier
        const region = this.getRegion();
        let multiplier = 0;

        // set multiplier to correct value based on region
        if(region === "head" || region === "upperExtremities"){
            multiplier = 0.2;
        } else {
            multiplier  = 0.3;
        }

        // perform arithmetic
        const total = ((Erythema + Edema + Excoriation + Lichenification) * AreaScore * multiplier).toFixed(2);
        this.setState({erythema: Erythema});
        this.setState({edema: Edema});
        this.setState({excoriation: Excoriation});
        this.setState({lichenification: Lichenification});
        this.setState({areaScore: AreaScore});

        this.setState({score: total});

        return total;
    }

    // function that loops through radio button and returns the value of the selected button
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
    
    // function that updates state of uploadPage and POSTs the data to backend
    handleUpload() {
        let date = this.getDate();
        let region = this.getRegion();
        let score = this.getScore();
        this.setState({
            date: date,
            region: region,
            score: score
        }, () => { // arrow function here waits for state to be updating before POSTing
            this.handlePost();
        });
    }

    render() {
        const {expanded} = this.state;

        // table headings
        const headings = [
            'Erythema',
            'Edema',
            'Excoriation',
            'Lichenification',
            'Area Score',
        ];
        
        // table rows (consist of radio buttons)
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
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="AreaScore6" value = "6" name="AreaScoreScoreInput"/>
                        <label class="custom-control-label" for="AreaScore6">6</label>
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
                        <input className = "Input" id = "dateInput" type="text" placeholder = "eg. 24/11/2019"/>
                    </div>
                    <div className = "Inline">
                        <h5>Region</h5>
                        <div>
                            <select className = "Input" id = "regionInput">
                                <option value="headnneck" name = "region">Head</option>
                                <option value="trunk" name = "region">Trunk</option>
                                <option value="upperlimb" name = "region">Upper Extremities</option>
                                <option value="lowerlimb" name = "region">Lower Extremities</option>
                            </select>                    
                        </div>
                    </div>
                    <div>
                        <DataTable headings = {headings} rows = {rows}></DataTable>
                    </div>
                    <div>
                        <button onClick = {this.getScore} className = "btn btn-info m-2">Calculate total score</button>
                    </div>
                    <div className = "Inline">
                        <h5>Score: {this.state.score}</h5>
                    </div>
                    <div className = "adjusted">
                        <img className="preview" src={this.state.preview} alt = ""/>
                        <input type="file" onChange={this.getImage}/>
                    </div>
                    <div className = "adjusted">
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
